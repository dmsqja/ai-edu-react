import { useState } from 'react';
import ChatUI from '../../components/ChatUI';

interface Message {
  id: number;
  text: string;
  sender: 'user' | 'bot';
  timestamp: string;
}

const ChatStream = () => {
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
      // TODO: 백엔드 API 구현 후 스트리밍 응답 처리
      const responseText = 'Reactive Streams 응답 (백엔드 API 구현 후 실제 스트리밍으로 대체 예정)';

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
      title="2. Chat Client - Reactive Streams"
      question={question}
      setQuestion={setQuestion}
      messages={messages}
      loading={loading}
      onSendMessage={sendMessage}
      onKeyPress={handleKeyPress}
    />
  );
};

export default ChatStream;


