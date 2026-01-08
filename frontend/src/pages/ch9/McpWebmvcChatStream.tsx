import { useState } from 'react';
import ChatUI from '../../components/ChatUI';
// import apiClient from '../../api/client'; // TODO: 백엔드 API 구현 후 활성화

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
      // TODO: 백엔드 API 구현 후 스트리밍 응답 처리
      // const response = await fetch('/ch9/weather', {
      //   method: 'POST',
      //   headers: {
      //     'Content-Type': 'application/x-www-form-urlencoded',
      //     'Accept': 'application/x-ndjson',
      //   },
      //   body: new URLSearchParams({ prompt: userMessage.text }),
      // });
      // const reader = response.body?.getReader();
      // const decoder = new TextDecoder('utf-8');
      // let responseText = '';
      // if (reader) {
      //   while (true) {
      //     const { value, done } = await reader.read();
      //     if (done) break;
      //     const chunk = decoder.decode(value);
      //     responseText += chunk;
      //     // 실시간 업데이트를 위해 메시지 업데이트
      //   }
      // }

      const responseText = 'Reactive Streams 응답 (백엔드 API 구현 후 실제 스트리밍으로 대체 예정)';

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

