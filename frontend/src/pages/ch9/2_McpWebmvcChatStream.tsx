import { useState } from 'react';
import ChatUI from '../../components/ChatUI';
import { streamRequest } from '../../api/client';

interface Message {
  id: number;
  sender: 'user' | 'bot';
  timestamp: string;
  text: string;
}

const McpWebmvcChatStream = () => {
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
      // 실시간 스트리밍을 위해서는 ChatUI가 아닌 커스텀 UI를 사용해야 하지만,
      // 현재는 간단하게 전체 응답을 받아서 표시
      const responseText = await streamRequest(
        '/ch9/weather-stream',
        new URLSearchParams({ prompt: userMessage.text }),
        () => {}, // ChatUI에서는 실시간 업데이트 어려움
        {
          'Accept': 'application/x-ndjson',
        }
      );

      const botMessage: Message = {
        id: Date.now() + 1,
        text: responseText,
        sender: 'bot',
        timestamp: new Date().toLocaleTimeString('ko-KR'),
      };

      setMessages((prev) => [botMessage, ...prev]);
    } catch (error) {
      console.error('Error sending message:', error);
      const errorMessage: Message = {
        id: Date.now() + 1,
        text: '오류가 발생했습니다. 나중에 다시 시도해주세요.',
        sender: 'bot',
        timestamp: new Date().toLocaleTimeString('ko-KR'),
      };
      setMessages((prev) => [errorMessage, ...prev]);
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
      columnSize="col-sm-10"
    />
  );
};

export default McpWebmvcChatStream;

