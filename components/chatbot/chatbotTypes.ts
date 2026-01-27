export interface ChatMessage {
  id: string;
  text: string;
  isBot: boolean;
  timestamp: Date;
  chips?: Chip[];
}

export interface Chip {
  label: string;
  value: string;
  type: ChipType;
  metadata?: ChipMetadata;
}

export type ChipType = 
  | 'service' 
  | 'staff' 
  | 'time_slot' 
  | 'date' 
  | 'booking' 
  | 'confirmation' 
  | 'cancel';

export interface ChipMetadata {
  // Service metadata
  service_id?: string;
  price?: number;
  duration?: number;
  
  // Staff metadata
  staff_id?: string;
  
  // Time slot metadata
  date?: string;
  time?: string;
  time_12h?: string;
  
  // Date metadata
  day_of_week?: string;
  
  // Booking metadata
  booking_id?: string;
  index?: number;
  service_name?: string;
  status?: string;
  
  // Confirmation metadata
  action?: 'confirm' | 'confirm_cancel' | 'confirm_reschedule';
  style?: 'primary' | 'secondary' | 'danger';
  
  [key: string]: any;
}

export interface ChatResponse {
  response: string;
  session_id: string;
  session_ended?: boolean;
  tools_used?: string[];
  chips?: Chip[];
}
