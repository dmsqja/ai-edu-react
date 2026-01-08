import { useState } from 'react';
import ChatUI from '../../components/ChatUI';
// import apiClient from '../../api/client'; // TODO: 백엔드 API 구현 후 활성화

interface Message {
  id: number;
  sender: 'user' | 'bot';
  timestamp: string;
  text: string;
}

const ChatPgvector = () => {
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
      // const response = await apiClient.post('/ch7/chat-pgvector',
      //   new URLSearchParams({ prompt: userMessage.text }),
      //   {
      //     headers: {
      //       'Content-Type': 'application/x-www-form-urlencoded',
      //       'Accept': 'application/x-ndjson',
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

  const deleteChat = async (deleteAll: boolean = false) => {
    setLoading(true);
    try {
      // TODO: 백엔드 API 구현 후 활성화
      // const url = deleteAll ? '/ch7/delete-all-chat-pgvector' : '/ch7/delete-chat-pgvector';
      // const response = await apiClient.post(url, null, {
      //   headers: {
      //     'Content-Type': 'application/x-www-form-urlencoded',
      //     'Accept': 'text/plain',
      //   },
      // });
      // const responseText = response.data;

      const responseText = deleteAll
        ? '모든 대화 기록이 삭제되었습니다. (백엔드 API 구현 필요)'
        : '대화 기록이 삭제되었습니다. (백엔드 API 구현 필요)';

      const botMessage: Message = {
        id: Date.now(),
        text: responseText,
        sender: 'bot',
        timestamp: new Date().toLocaleTimeString('ko-KR'),
      };

      setMessages((prev) => [botMessage, ...prev]);
    } catch (error) {
      console.error('Error deleting chat:', error);
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
      title="3. Chat Client with ChatMemory(pgvector)"
      question={question}
      setQuestion={setQuestion}
      messages={messages}
      loading={loading}
      onSendMessage={sendMessage}
      onKeyPress={handleKeyPress}
      columnSize="col-sm-10"
      additionalButtons={
        <>
          <button
            type="button"
            className="btn btn-danger mr-1"
            onClick={() => deleteChat(false)}
            disabled={loading}
          >
            Delete
          </button>
          <button
            type="button"
            className="btn btn-danger"
            onClick={() => deleteChat(true)}
            disabled={loading}
          >
            Delete All
          </button>
        </>
      }
    />
  );
};

export default ChatPgvector;

