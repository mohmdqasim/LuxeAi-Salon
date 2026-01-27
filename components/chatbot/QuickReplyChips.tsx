import React from 'react';
import { 
  Clock, 
  Calendar, 
  Scissors, 
  User, 
  CheckCircle2, 
  XCircle,
  DollarSign,
  Timer
} from 'lucide-react';
import type { Chip, ChipType } from './chatbotTypes';

interface QuickReplyChipsProps {
  chips: Chip[];
  onChipClick: (value: string) => void;
  isLoading?: boolean;
}

const getChipIcon = (type: ChipType) => {
  switch (type) {
    case 'time_slot':
      return <Clock className="h-3.5 w-3.5" />;
    case 'date':
      return <Calendar className="h-3.5 w-3.5" />;
    case 'service':
      return <Scissors className="h-3.5 w-3.5" />;
    case 'staff':
      return <User className="h-3.5 w-3.5" />;
    case 'booking':
      return <Calendar className="h-3.5 w-3.5" />;
    case 'confirmation':
      return <CheckCircle2 className="h-3.5 w-3.5" />;
    case 'cancel':
      return <XCircle className="h-3.5 w-3.5" />;
    default:
      return null;
  }
};

const getChipStyles = (chip: Chip) => {
  const { type, metadata } = chip;
  const style = metadata?.style || 'default';

  const baseStyles = "flex items-center gap-2 rounded-lg border px-3 py-2 text-xs font-semibold shadow-sm transition-all disabled:cursor-not-allowed disabled:opacity-50";

  switch (type) {
    case 'service':
      return `${baseStyles} border-emerald-200 bg-emerald-50 text-emerald-700 hover:border-emerald-300 hover:bg-emerald-100 dark:border-emerald-800 dark:bg-emerald-900/30 dark:text-emerald-300 dark:hover:bg-emerald-900/50`;
    
    case 'staff':
      return `${baseStyles} border-blue-200 bg-blue-50 text-blue-700 hover:border-blue-300 hover:bg-blue-100 dark:border-blue-800 dark:bg-blue-900/30 dark:text-blue-300 dark:hover:bg-blue-900/50`;
    
    case 'time_slot':
      return `${baseStyles} border-purple-200 bg-purple-50 text-purple-700 hover:border-purple-300 hover:bg-purple-100 dark:border-purple-800 dark:bg-purple-900/30 dark:text-purple-300 dark:hover:bg-purple-900/50`;
    
    case 'date':
      return `${baseStyles} border-indigo-200 bg-indigo-50 text-indigo-700 hover:border-indigo-300 hover:bg-indigo-100 dark:border-indigo-800 dark:bg-indigo-900/30 dark:text-indigo-300 dark:hover:bg-indigo-900/50`;
    
    case 'booking':
      return `${baseStyles} border-amber-200 bg-amber-50 text-amber-700 hover:border-amber-300 hover:bg-amber-100 dark:border-amber-800 dark:bg-amber-900/30 dark:text-amber-300 dark:hover:bg-amber-900/50`;
    
    case 'confirmation':
      if (style === 'danger') {
        return `${baseStyles} border-red-200 bg-red-50 text-red-700 hover:border-red-300 hover:bg-red-100 dark:border-red-800 dark:bg-red-900/30 dark:text-red-300 dark:hover:bg-red-900/50`;
      }
      return `${baseStyles} border-green-200 bg-green-50 text-green-700 hover:border-green-300 hover:bg-green-100 dark:border-green-800 dark:bg-green-900/30 dark:text-green-300 dark:hover:bg-green-900/50`;
    
    case 'cancel':
      return `${baseStyles} border-slate-200 bg-slate-50 text-slate-700 hover:border-slate-300 hover:bg-slate-100 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-300 dark:hover:bg-slate-700`;
    
    default:
      return `${baseStyles} border-slate-200 bg-white text-primary hover:border-accent hover:bg-accent/5 dark:border-slate-700 dark:bg-slate-800 dark:text-white dark:hover:bg-accent/10`;
  }
};

const formatServiceChip = (chip: Chip): React.ReactNode => {
  const { label, metadata } = chip;
  const price = metadata?.price;
  const duration = metadata?.duration;

  return (
    <div className="flex flex-col items-start gap-0.5">
      <span className="font-semibold">{label}</span>
      {(price !== undefined || duration !== undefined) && (
        <div className="flex items-center gap-2 text-[10px] font-normal opacity-75">
          {price !== undefined && (
            <span className="flex items-center gap-0.5">
              <DollarSign className="h-2.5 w-2.5" />
              {price}
            </span>
          )}
          {duration !== undefined && (
            <span className="flex items-center gap-0.5">
              <Timer className="h-2.5 w-2.5" />
              {duration} min
            </span>
          )}
        </div>
      )}
    </div>
  );
};

const groupChipsByType = (chips: Chip[]): Record<string, Chip[]> => {
  const grouped: Record<string, Chip[]> = {};
  
  chips.forEach(chip => {
    if (!grouped[chip.type]) {
      grouped[chip.type] = [];
    }
    grouped[chip.type].push(chip);
  });
  
  return grouped;
};

const getSectionTitle = (type: ChipType): string => {
  switch (type) {
    case 'service':
      return 'Select Service';
    case 'staff':
      return 'Select Staff';
    case 'time_slot':
      return 'Select Time';
    case 'date':
      return 'Select Date';
    case 'booking':
      return 'Select Booking';
    case 'confirmation':
      return 'Confirm Action';
    case 'cancel':
      return '';
    default:
      return 'Options';
  }
};

export const QuickReplyChips: React.FC<QuickReplyChipsProps> = ({
  chips,
  onChipClick,
  isLoading = false,
}) => {
  if (!chips || chips.length === 0) {
    return null;
  }

  const grouped = groupChipsByType(chips);
  
  // Order: confirmation/cancel first, then service, staff, date, time_slot, booking
  const typeOrder: ChipType[] = ['confirmation', 'cancel', 'service', 'staff', 'date', 'time_slot', 'booking'];
  
  // Separate confirmation and cancel chips for special layout
  const confirmationChips = grouped['confirmation'] || [];
  const cancelChips = grouped['cancel'] || [];
  const actionChips = [...confirmationChips, ...cancelChips];
  const otherChips = chips.filter(c => c.type !== 'confirmation' && c.type !== 'cancel');

  return (
    <div className="mt-4 space-y-4">
      {/* Action chips (confirmation/cancel) - horizontal layout */}
      {actionChips.length > 0 && (
        <div className="flex flex-wrap gap-2">
          {actionChips.map((chip, index) => {
            const icon = getChipIcon(chip.type);
            const styles = getChipStyles(chip);
            
            return (
              <button
                key={`${chip.value}-${index}`}
                onClick={() => !isLoading && onChipClick(chip.value)}
                disabled={isLoading}
                className={styles}
                aria-label={`${chip.label}`}
              >
                {icon}
                <span>{chip.label}</span>
              </button>
            );
          })}
        </div>
      )}

      {/* Other chips grouped by type */}
      {typeOrder.map(type => {
        const typeChips = grouped[type];
        if (!typeChips || typeChips.length === 0 || type === 'confirmation' || type === 'cancel') {
          return null;
        }

        const sectionTitle = getSectionTitle(type);
        const icon = getChipIcon(type);

        return (
          <div key={type} className="space-y-2">
            {sectionTitle && (
              <p className="text-xs font-semibold uppercase tracking-wide text-slate-600 dark:text-slate-400">
                {sectionTitle}
              </p>
            )}
            <div className="flex flex-wrap gap-2">
              {typeChips.map((chip, index) => {
                const styles = getChipStyles(chip);
                const chipIcon = getChipIcon(chip.type);
                
                return (
                  <button
                    key={`${chip.value}-${index}`}
                    onClick={() => !isLoading && onChipClick(chip.value)}
                    disabled={isLoading}
                    className={styles}
                    aria-label={`Select ${chip.label}`}
                  >
                    {chipIcon}
                    {chip.type === 'service' ? (
                      formatServiceChip(chip)
                    ) : (
                      <span>{chip.label}</span>
                    )}
                  </button>
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export type { Chip };
