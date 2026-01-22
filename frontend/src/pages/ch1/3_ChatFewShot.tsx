import { useState } from 'react';
import ChatUI from '../../components/ChatUI';
import { postRequest } from '../../api/client';

interface Message {
  id: number;
  text: string;
  sender: 'user' | 'bot';
  timestamp: string;
}

const ChatFewShot = () => {
  const [question, setQuestion] = useState('서울의 맛집 알려줘');
  const [messages, setMessages] = useState<Message[]>([]);
  const [loading, setLoading] = useState(false);

  const sendMessage = async () => {
    if (!question.trim() || loading) return;

    const userMessage: Message = {
      id: Date.now(),
      text: question,
      sender: 'user',
      timestamp: new Date().toLocaleTimeString('ko-KR'),
    };

    setMessages((prev) => [userMessage, ...prev]);
    setLoading(true);
    setQuestion('');

    try {
      // 백엔드 API 호출
      const responseText = await postRequest(
        '/ch1/few',
        new URLSearchParams({ prompt: userMessage.text }),
        {
          'Accept': 'text/plain',
        }
      );

      const botMessage: Message = {
        id: Date.now() + 1,
        text: responseText,
        sender: 'bot',
        timestamp: new Date().toLocaleTimeString('ko-KR'),
      };

      setMessages((prev) => [botMessage, ...prev]);
    } finally {
      setLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      sendMessage();
    }
  };

  return (
    <ChatUI
      title="4. Chat Client - Few Shot Prompting"
      question={question}
      setQuestion={setQuestion}
      messages={messages}
      loading={loading}
      onSendMessage={sendMessage}
      onKeyPress={handleKeyPress}
    />
  );
};

export default ChatFewShot;


