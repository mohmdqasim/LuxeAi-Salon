import React from 'react';
import { ChatMessage } from './chatbotTypes';
import { QuickReplyChips } from './QuickReplyChips';

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

const renderMarkdownText = (text: string): React.ReactNode => {
  const parts: React.ReactNode[] = [];
  let lastIndex = 0;
  
  const boldRegex = /\*\*([^*]+)\*\*/g;
  let match;
  
  while ((match = boldRegex.exec(text)) !== null) {
    if (match.index > lastIndex) {
      parts.push(text.slice(lastIndex, match.index));
    }
    parts.push(
      <strong key={`bold-${match.index}`} className="font-bold text-primary dark:text-white">
        {match[1]}
      </strong>
    );
    lastIndex = match.index + match[0].length;
  }
  
  if (lastIndex < text.length) {
    parts.push(text.slice(lastIndex));
  }
  
  return parts.length > 0 ? <>{parts}</> : text;
};


const renderInlineMarkdown = (text: string): React.ReactNode => {
  return renderMarkdownText(text);
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
            <div className="max-w-[85%]">
              <div
                className={`rounded-2xl p-3 font-medium ${msg.isBot
                    ? 'border border-slate-100 bg-white text-primary shadow-sm dark:border-slate-700 dark:bg-slate-800 dark:text-white'
                    : 'rounded-tr-none bg-primary text-white shadow-md shadow-primary/10'
                  }`}
              >
                {renderMessageContent(msg.text)}
              </div>
              {msg.isBot && msg.chips && msg.chips.length > 0 && (
                <QuickReplyChips
                  chips={msg.chips}
                  onChipClick={(value) => onQuickReply?.(value)}
                  isLoading={isLoading}
                />
              )}
            </div>
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