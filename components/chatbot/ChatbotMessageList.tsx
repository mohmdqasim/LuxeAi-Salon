import React from 'react';
import { ChatMessage } from './chatbotTypes';

interface QuickReplyOption {
  icon?: React.ReactNode;
  text: string;
  query: string;
}

interface ChatbotMessageListProps {
  messages: ChatMessage[];
  isLoading: boolean;
  scrollRef: React.RefObject<HTMLDivElement>;
  suggestions?: QuickReplyOption[];
  onQuickReply?: (query: string) => void;
}

const cleanMarkdown = (text: string): string => {
  return text
    .replace(/\*\*([^*]+)\*\*/g, '$1')  // Remove ** but keep content
    .replace(/\*([^*]+)\*/g, '$1')       // Remove * but keep content
    .replace(/`([^`]+)`/g, '$1')         // Remove backticks but keep content
    .replace(/\[([^\]]+)\]\(([^)]+)\)/g, '$1');  // Remove links but keep text
};

const parseServiceMessage = (text: string) => {
  // Check if this is a service details message (has emojis like ✅, 💰, ⏱️)
  if (text.includes('✅') && text.includes('💰') && text.includes('⏱️')) {
    const lines = text.split('\n').map(line => line.trim()).filter(Boolean);
    
    let serviceName = '';
    let price = '';
    let duration = '';
    const staffList: Array<{ name: string; description: string }> = [];
    let instruction = '';
    let inStaffSection = false;

    lines.forEach((line) => {
      if (line.startsWith('✅')) {
        serviceName = cleanMarkdown(line.replace('✅', '').trim());
      } else if (line.startsWith('💰')) {
        price = line.replace('💰', '').trim();
      } else if (line.startsWith('⏱️')) {
        duration = line.replace('⏱️', '').trim();
      } else if (line.toLowerCase().includes('available staff')) {
        inStaffSection = true;
      } else if (line.startsWith('•') && inStaffSection) {
        const staffText = line.replace('•', '').trim();
        const [name, ...descParts] = staffText.split('—');
        staffList.push({
          name: cleanMarkdown(name.trim()),
          description: cleanMarkdown(descParts.join('—').trim())
        });
      } else if (line.toLowerCase().startsWith('please type')) {
        inStaffSection = false;
        instruction = cleanMarkdown(line);
      }
    });

    return { type: 'service', serviceName, price, duration, staffList, instruction };
  }

  return { type: 'text', content: cleanMarkdown(text) };
};

const renderServiceMessage = (data: ReturnType<typeof parseServiceMessage>, onQuickReply?: (query: string) => void) => {
  if (data.type !== 'service') return null;

  const { serviceName, price, duration, staffList, instruction } = data;

  return (
    <div className="max-w-[85%] rounded-2xl border border-slate-100 bg-white p-4 font-medium text-primary shadow-sm dark:border-slate-700 dark:bg-slate-800 dark:text-white">
      <div className="space-y-4">
        {/* Service Header */}
        <div className="border-b border-slate-200 pb-4 dark:border-slate-700">
          <h3 className="text-lg font-bold text-primary dark:text-white">{serviceName}</h3>
        </div>

        {/* Service Details */}
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <span className="text-sm font-semibold text-slate-600 dark:text-slate-400">Price:</span>
            <span className="text-sm font-bold text-primary dark:text-white">{price}</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-sm font-semibold text-slate-600 dark:text-slate-400">Duration:</span>
            <span className="text-sm font-bold text-primary dark:text-white">{duration}</span>
          </div>
        </div>

        {/* Staff List */}
        {staffList.length > 0 && (
          <div className="space-y-2 border-t border-slate-200 pt-3 dark:border-slate-700">
            <p className="text-xs font-semibold uppercase tracking-wide text-slate-600 dark:text-slate-400">
              Available Staff
            </p>
            <div className="flex flex-col gap-2">
              {staffList.map((staff, index) => (
                <button
                  key={index}
                  onClick={() => onQuickReply?.(staff.name)}
                  className="flex flex-col items-start gap-1 rounded-lg border border-slate-200 bg-white px-3 py-2 text-left shadow-sm transition hover:border-accent hover:bg-accent/5 dark:border-slate-700 dark:bg-slate-900 dark:hover:bg-accent/10"
                >
                  <p className="text-sm font-semibold text-primary dark:text-white">
                    {staff.name}
                  </p>
                  {staff.description && (
                    <p className="text-xs text-slate-600 dark:text-slate-300">
                      {staff.description}
                    </p>
                  )}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Instruction */}
        {instruction && (
          <div className="border-t border-slate-200 pt-3 dark:border-slate-700">
            <p className="text-xs leading-relaxed text-slate-600 dark:text-slate-300">
              {instruction}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

const renderInlineMarkdown = (text: string): React.ReactNode[] => {
  const nodes: React.ReactNode[] = [];
  const cleanText = cleanMarkdown(text);
  nodes.push(cleanText);
  return nodes;
};

const renderMessageContent = (text: string) => {
  const lines = text.split(/\r?\n/);
  const nonEmptyLines = lines.map((line) => line.trim()).filter(Boolean);
  const hasBulletLines = nonEmptyLines.some((line) => /^\s*[-*•]\s+/.test(line));
  if (nonEmptyLines.length >= 2 && nonEmptyLines[0].endsWith(':') && !hasBulletLines) {
    const preText = nonEmptyLines[0];
    const listItems: string[] = [];
    let postText = '';

    nonEmptyLines.slice(1).forEach((line) => {
      const trimmedLine = line.trim();
      if (isQuestionLine(trimmedLine)) {
        postText = postText ? `${postText} ${trimmedLine}` : trimmedLine;
        return;
      }

      const dotBulletMatch = trimmedLine.match(/^\.\s+(.*)$/);
      const bulletMatch = trimmedLine.match(/^[-*•]\s+(.*)$/);
      const candidate = dotBulletMatch?.[1] ?? bulletMatch?.[1] ?? trimmedLine;

      if (isQuestionLine(candidate)) {
        postText = postText ? `${postText} ${candidate}` : candidate;
        return;
      }

      const { main, tail } = splitQuestionTail(candidate);
      if (main) listItems.push(main);
      if (tail) {
        postText = postText ? `${postText} ${tail}` : tail;
      }
    });

    return (
      <div className="space-y-2">
        <p className="whitespace-pre-wrap">{renderInlineMarkdown(preText)}</p>
        {listItems.length > 0 && (
          <div className="space-y-1">
            {listItems.map((item, index) => (
              <p key={`${preText}-${index}`} className="whitespace-pre-wrap">
                . {renderInlineMarkdown(item)}
              </p>
            ))}
          </div>
        )}
        {postText && (
          <p className="whitespace-pre-wrap">{renderInlineMarkdown(postText)}</p>
        )}
      </div>
    );
  }
  const blocks: React.ReactNode[] = [];
  let listItems: string[] = [];

  const flushList = (key: string) => {
    if (listItems.length === 0) return;
    blocks.push(
      <ul key={key} className="ml-4 list-disc space-y-1">
        {listItems.map((item, index) => (
          <li key={`${key}-item-${index}`} className="text-sm">
            {renderInlineMarkdown(item)}
          </li>
        ))}
      </ul>,
    );
    listItems = [];
  };

  lines.forEach((line, index) => {
    const bulletMatch = line.match(/^\s*[-*•]\s+(.*)$/);
    if (bulletMatch) {
      listItems.push(bulletMatch[1].trim());
      return;
    }
    flushList(`list-${index}`);
    if (line.trim()) {
      blocks.push(
        <p key={`p-${index}`} className="whitespace-pre-wrap">
          {renderInlineMarkdown(line)}
        </p>,
      );
    }
  });

  flushList('list-final');
  return blocks.length > 0 ? <div className="space-y-2">{blocks}</div> : text;
};

const extractQuickReplies = (text: string) => {
  const inlineBullets = text.includes('•')
    ? text
      .split('•')
      .map((part) => part.trim())
      .filter(Boolean)
      .slice(1)
    : [];

  const lineBullets = text
    .split(/\r?\n/)
    .map((line) => line.match(/^\s*[-*•]\s+(.*)$/)?.[1]?.trim())
    .filter((value): value is string => Boolean(value));

  return [...inlineBullets, ...lineBullets]
    .map((part) => part.replace(/Which .*$/i, '').replace(/[?.!]+$/g, '').trim())
    .filter(Boolean);
};

const splitQuestionTail = (text: string) => {
  const match = text.match(/^(.*?)\s+(Which .*)$/i);
  if (!match) return { main: text.trim(), tail: '' };
  const main = match[1].trim();
  if (!main || isQuestionLine(main)) return { main: '', tail: '' };
  return { main, tail: match[2].trim() };
};

const isQuestionLine = (text: string) => /^Which\b/i.test(text.trim());

const renderParagraphs = (text: string) => {
  const lines = text.split(/\r?\n/).filter((line) => line.trim().length > 0);
  if (lines.length === 0) return null;
  return (
    <div className="space-y-2">
      {lines.map((line, index) => (
        <p key={`${line}-${index}`} className="whitespace-pre-wrap">
          {renderInlineMarkdown(line)}
        </p>
      ))}
    </div>
  );
};

const parseActionableMessage = (text: string) => {
  if (text.includes('•')) {
    const parts = text.split('•').map((part) => part.trim());
    const preText = parts.shift() || '';
    const rawBullets = parts.filter(Boolean);
    const chips: string[] = [];
    let postText = '';

    rawBullets.forEach((item) => {
      if (isQuestionLine(item)) {
        postText = item;
        return;
      }

      const { main, tail } = splitQuestionTail(item);
      if (main) chips.push(main);
      if (tail) {
        postText = tail;
      }
    });

    return { preText, chips, postText };
  }

  const nonEmptyLines = text
    .split(/\r?\n/)
    .map((line) => line.trim())
    .filter(Boolean);

  if (nonEmptyLines.length >= 2 && nonEmptyLines[0].endsWith(':')) {
    const preText = nonEmptyLines[0];
    const chips: string[] = [];
    let postText = '';

    nonEmptyLines.slice(1).forEach((line) => {
      if (isQuestionLine(line)) {
        postText = postText ? `${postText} ${line.trim()}` : line.trim();
        return;
      }
      const { main, tail } = splitQuestionTail(line);
      if (main) chips.push(main);
      if (tail) {
        postText = postText ? `${postText} ${tail}` : tail;
      }
    });

    if (chips.length > 0) {
      return { preText, chips, postText };
    }
  }

  const lines = text.split(/\r?\n/);
  const preLines: string[] = [];
  const bulletLines: string[] = [];
  const postLines: string[] = [];
  let inBullets = false;

  lines.forEach((line) => {
    const bulletMatch = line.match(/^\s*[-*•]\s+(.*)$/);
    if (bulletMatch) {
      inBullets = true;
      bulletLines.push(bulletMatch[1].trim());
      return;
    }
    if (inBullets) {
      postLines.push(line);
    } else {
      preLines.push(line);
    }
  });

  if (bulletLines.length === 0) {
    return { preText: '', chips: [], postText: '' };
  }

  const chips: string[] = [];
  let postText = postLines.join('\n').trim();

  bulletLines.forEach((line) => {
    if (isQuestionLine(line)) {
      postText = line;
      return;
    }

    const { main, tail } = splitQuestionTail(line);
    if (main) chips.push(main);
    if (tail) {
      postText = postText ? `${postText} ${tail}` : tail;
    }
  });

  return {
    preText: preLines.join('\n').trim(),
    chips,
    postText,
  };
};

export const ChatbotMessageList: React.FC<ChatbotMessageListProps> = ({
  messages,
  isLoading,
  scrollRef,
  suggestions = [],
  onQuickReply,
}) => {
  const showSuggestions = suggestions.length > 0 && messages.length <= 1;

  return (
    <div
      ref={scrollRef}
      className="h-full overflow-y-auto bg-white px-4 py-5 text-sm dark:bg-slate-900"
    >
      <div className="space-y-4">
        {messages.map((msg, index) => (
          <div
            key={msg.id}
            className={`flex flex-col ${msg.isBot ? 'items-start' : 'items-end'} animate-fade-in-up`}
          >
            {msg.isBot && msg.text.includes('✅') && msg.text.includes('💰') ? (
              renderServiceMessage(parseServiceMessage(msg.text), onQuickReply)
            ) : msg.isBot && extractQuickReplies(msg.text).length > 0 ? (
              (() => {
                const { preText, chips, postText } = parseActionableMessage(msg.text);
                return (
                  <div className="max-w-[85%] rounded-2xl border border-slate-100 bg-white p-3 font-medium text-primary shadow-sm dark:border-slate-700 dark:bg-slate-800 dark:text-white">
                    <div className="space-y-3">
                      {preText && renderParagraphs(preText)}
                      <div className="flex flex-col gap-2">
                        {chips.map((option) => (
                          <button
                            key={option}
                            onClick={() => onQuickReply?.(option)}
                            className="flex items-center gap-2 rounded-lg border border-slate-200 bg-white px-3 py-2 text-xs font-semibold text-primary shadow-sm transition hover:border-accent hover:text-accent dark:border-slate-700 dark:bg-slate-900 dark:text-white"
                          >
                            <span className="text-primary/60 dark:text-slate-400">•</span>
                            <span>{option}</span>
                          </button>
                        ))}
                      </div>
                      {postText && renderParagraphs(postText)}
                    </div>
                  </div>
                );
              })()
            ) : (
              <div
                className={`max-w-[85%] rounded-2xl p-3 font-medium ${msg.isBot
                    ? 'border border-slate-100 bg-white text-primary shadow-sm dark:border-slate-700 dark:bg-slate-800 dark:text-white'
                    : 'rounded-tr-none bg-primary text-white shadow-md shadow-primary/10'
                  }`}
              >
                {renderMessageContent(msg.text)}
              </div>
            )}
            {showSuggestions && index === 0 && (
              <div className="mt-3 flex flex-wrap gap-2">
                {suggestions.map((item) => (
                  <button
                    key={item.text}
                    onClick={() => onQuickReply?.(item.query)}
                    className="flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-3 py-2 text-xs font-semibold text-slate-600 transition hover:border-accent hover:text-accent dark:border-slate-700 dark:bg-slate-800 dark:text-slate-300"
                  >
                    {item.icon}
                    <span>{item.text}</span>
                  </button>
                ))}
              </div>
            )}
          </div>
        ))}
        {isLoading && (
          <div className="flex items-center gap-2 rounded-2xl rounded-tl-none border border-slate-100 bg-white px-3 py-2 dark:border-slate-700 dark:bg-slate-800">
            <div className="h-1.5 w-1.5 animate-bounce rounded-full bg-accent" />
            <div className="h-1.5 w-1.5 animate-bounce rounded-full bg-accent [animation-delay:0.2s]" />
            <div className="h-1.5 w-1.5 animate-bounce rounded-full bg-accent [animation-delay:0.4s]" />
          </div>
        )}
      </div>
    </div>
  );
};