import React, { useEffect, useState, useMemo } from 'react';
import { X, ShieldAlert, FileText, Loader2 } from 'lucide-react';
import { marked } from 'marked';

interface LegalModalProps {
  isOpen: boolean;
  onClose: () => void;
  fileName: string;
  title: string;
}

export const LegalModal: React.FC<LegalModalProps> = ({ isOpen, onClose, fileName, title }) => {
  const [content, setContent] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<boolean>(false);

  useEffect(() => {
    if (isOpen) {
      setLoading(true);
      setError(false);
      fetch(`/${fileName}`)
        .then((res) => {
          if (!res.ok) throw new Error('Failed to load file');
          return res.text();
        })
        .then((text) => {
          setContent(text);
          setLoading(false);
        })
        .catch((err) => {
          console.error(err);
          setError(true);
          setLoading(false);
        });
    }
  }, [isOpen, fileName]);

  const htmlContent = useMemo(() => {
    if (!content) return '';
    try {
      return marked.parse(content) as string;
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
        <div className="flex-1 overflow-y-auto p-8 md:p-12 prose dark:prose-invert max-w-none prose-slate prose-headings:font-black prose-headings:tracking-tighter prose-headings:text-primary dark:prose-headings:text-white prose-p:text-slate-600 dark:prose-p:text-slate-300 prose-strong:text-primary dark:prose-strong:text-white prose-hr:border-slate-100 dark:prose-hr:border-slate-800">
          {loading ? (
            <div className="flex flex-col items-center justify-center py-20 gap-4">
              <Loader2 className="w-10 h-10 text-accent animate-spin" />
              <p className="text-sm font-bold text-slate-400 uppercase tracking-widest">Loading Document...</p>
            </div>
          ) : error ? (
            <div className="text-center py-20">
              <FileText className="w-12 h-12 text-slate-300 mx-auto mb-4" />
              <p className="text-slate-500 font-medium">Sorry, we couldn't load the requested document.</p>
              <button 
                onClick={onClose}
                className="mt-6 text-accent font-black text-xs uppercase tracking-widest underline"
              >
                Close Modal
              </button>
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
            © 2026 GlamMate AI Inc. • Secure & Private
          </p>
        </div>
      </div>
    </div>
  );
};