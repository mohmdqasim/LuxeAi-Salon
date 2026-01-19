import React, { useMemo } from 'react';
import { X, ShieldAlert, FileText } from 'lucide-react';
import { marked } from 'marked';

interface LegalModalProps {
  isOpen: boolean;
  onClose: () => void;
  content: string;
  title: string;
}

export const LegalModal: React.FC<LegalModalProps> = ({ isOpen, onClose, content, title }) => {
  const htmlContent = useMemo(() => {
    if (!content) return '';
    try {
      // Configure marked for safer rendering
      return marked.parse(content, { gfm: true, breaks: true }) as string;
    } catch (e) {
      console.error('Error parsing markdown:', e);
      return content;
    }
  }, [content]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 lg:p-8">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-slate-950/60 backdrop-blur-sm animate-fade-in"
        onClick={onClose}
      ></div>

      {/* Modal Container */}
      <div className="relative w-full max-w-4xl max-h-[90vh] bg-white dark:bg-[#0a0a1f] rounded-[2.5rem] shadow-2xl border border-slate-200 dark:border-slate-800 overflow-hidden flex flex-col animate-zoom-in">
        
        {/* Header */}
        <div className="flex items-center justify-between px-8 py-6 border-b border-slate-100 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/50">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-accent/10 rounded-xl text-accent">
              <ShieldAlert className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-xl font-black text-primary dark:text-white tracking-tight">{title}</h2>
              <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">GlamMate Legal Document</p>
            </div>
          </div>
          <button 
            onClick={onClose}
            className="p-2 hover:bg-slate-200 dark:hover:bg-slate-800 rounded-full transition-colors text-slate-500"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto p-8 md:p-12 prose prose-slate dark:prose-invert max-w-none 
          prose-headings:text-primary dark:prose-headings:text-white 
          prose-headings:font-black prose-headings:tracking-tighter
          prose-strong:text-primary dark:prose-strong:text-accent
          prose-a:text-accent prose-a:font-bold
          prose-table:border prose-table:border-slate-100 dark:prose-table:border-slate-800
          prose-th:bg-slate-50 dark:prose-th:bg-slate-900/50 prose-th:p-3
          prose-td:p-3
        ">
          {!content ? (
            <div className="text-center py-20">
              <FileText className="w-12 h-12 text-slate-300 mx-auto mb-4" />
              <p className="text-slate-500 font-medium">Document content is unavailable.</p>
            </div>
          ) : (
            <div 
              className="markdown-content"
              dangerouslySetInnerHTML={{ __html: htmlContent }} 
            />
          )}
        </div>

        {/* Footer */}
        <div className="px-8 py-6 border-t border-slate-100 dark:border-slate-800 text-center">
          <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">
            © 2026 GlamMate AI Inc. • Verified Compliance
          </p>
        </div>
      </div>
    </div>
  );
};