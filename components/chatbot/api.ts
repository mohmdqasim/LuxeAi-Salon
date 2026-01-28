import { ChatResponse } from './chatbotTypes';

interface SendChatMessageParams {
  message: string;
  businessId: string;
  sessionId?: string | null;
}

const DEFAULT_API_BASE_URL = 'http://localhost:8000'; 

const getApiBaseUrl = () => {
  const rawBaseUrl = import.meta.env?.VITE_API_BASE_URL as string | undefined;
  const baseUrl = rawBaseUrl || DEFAULT_API_BASE_URL;
  return baseUrl.replace(/\/$/, '');
};

export const sendChatMessage = async ({
  message,
  businessId,
  sessionId,
}: SendChatMessageParams): Promise<ChatResponse> => {
  const baseUrl = getApiBaseUrl();
  const url = baseUrl ? `${baseUrl}/api/tool-chat/` : '/api/tool-chat/';

  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      message,
      business_id: businessId,
      session_id: sessionId ?? '',
    }),
  });

  if (!response.ok) {
    throw new Error(`Chat request failed: ${response.status}`);
  }

  return response.json();
};
