import { useState } from 'react';
import ChatUI from '../../components/ChatUI';
// import apiClient from '../../api/client'; // TODO: 백엔드 API 구현 후 활성화

interface Message {
  id: number;
  sender: 'user' | 'bot';
  timestamp: string;
  text: string;
}

const RaaRagChat = () => {
  const [question, setQuestion] = useState('오늘 아침부터 많이 먹은거 같은데 몸무게는 몇이야');
  const [type, setType] = useState('regulation');
  const [messages, setMessages] = useState<Message[]>([]);
  const [loading, setLoading] = useState(false);    

  const sendMessage = async () => {
    if (!question.trim() || loading) return;

    const questionText = `${type}: ${question}`;
    const userMessage: Message = {
      id: Date.now(),
      text: questionText,
      sender: 'user',
      timestamp: new Date().toLocaleTimeString('ko-KR'),
    };

    setMessages((prev) => [userMessage, ...prev]);
    setLoading(true);
    setQuestion('');

    try {
      // TODO: 백엔드 API 구현 후 스트리밍 응답 처리
      const responseText = 'Retrieval Augmentation Advisor 응답 (백엔드 API 구현 후 실제 스트리밍으로 대체 예정)';

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
      title="4. Chat Client - Retrieval Augmentation Advisor"
      question={question}
      setQuestion={setQuestion}
      messages={messages}
      loading={loading}
      onSendMessage={sendMessage}
      onKeyPress={handleKeyPress}
      columnSize="col-sm-10"
      topControls={
        <div className="row justify-content-center">
          <div className="col-sm-5">
            <div className="input-group p-1">
              <span className="input-group-text">구분</span>
              <select
                id="type"
                className="form-control"
                value={type}
                onChange={(e) => setType(e.target.value)}
              >
                <option value="regulation">호텔규정</option>
                <option value="restaurant">식사</option>
                <option value="additional">관광지</option>
              </select>
            </div>
          </div>
        </div>
      }
    />
  );
};

export default RaaRagChat;

