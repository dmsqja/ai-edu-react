import { useState } from 'react';
import ChatUI from '../../components/ChatUI';
// import apiClient from '../../api/client'; // TODO: 백엔드 API 구현 후 활성화

interface Message {
  id: number;
  sender: 'user' | 'bot';
  timestamp: string;
  text: string;
}

const McpWebmvcChat = () => {
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
      // TODO: 백엔드 API 구현 후 활성화
      // const response = await apiClient.post('/ch9/weather',
      //   new URLSearchParams({ prompt: userMessage.text }),
      //   {
      //     headers: {
      //       'Content-Type': 'application/x-www-form-urlencoded',
      //       'Accept': 'text/plain',
      //     },
      //   }
      // );
      // const responseText = response.data;

      // 임시: API 미구현 상태이므로 더미 응답
      const responseText = '백엔드 API가 구현되면 답변이 표시됩니다.';

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
      title="1. MCP webmvc Chat"
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

export default McpWebmvcChat;

