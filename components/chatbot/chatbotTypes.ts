export interface ChatMessage {
  id: string;
  text: string;
  isBot: boolean;
  timestamp: Date;
}

export interface ChatResponse {
  response: string;
  session_id: string;
}
