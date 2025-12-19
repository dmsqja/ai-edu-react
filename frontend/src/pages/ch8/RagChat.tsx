import { useState } from 'react';
// import apiClient from '../../api/client'; // TODO: 백엔드 API 구현 후 활성화

interface Message {
  id: number;
  sender: 'user' | 'bot';
  timestamp: string;
  text: string;
}

const RagChat = () => {
  const [question, setQuestion] = useState('몸무게는 몇이야');
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
      // const response = await fetch('/ch8/rag-chat', {
      //   method: 'POST',
      //   headers: {
      //     'Content-Type': 'application/x-www-form-urlencoded',
      //     'Accept': 'application/x-ndjson',
      //   },
      //   body: new URLSearchParams({ prompt: question, type: type }),
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

      const responseText = 'RAG Chat 응답 (백엔드 API 구현 후 실제 스트리밍으로 대체 예정)';

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
    <>
      <h2 className="text-center">2. Chat Client - RAG</h2>
      <div className="container py-5">
        <div className="row d-flex justify-content-center">
          <div className="col-sm-10">
            <button
              className="btn btn-primary"
              disabled
              style={{ visibility: loading ? 'visible' : 'hidden' }}
            >
              <span className="spinner-border spinner-border-sm"></span>
              Loading..
            </button>
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
            <div className="card">
              <div className="card-header text-muted d-flex justify-content-start align-items-center p-3">
                <div className="input-group mb-0">
                  <input
                    id="question"
                    type="text"
                    className="form-control"
                    placeholder="Type message"
                    value={question}
                    onChange={(e) => setQuestion(e.target.value)}
                    onKeyPress={handleKeyPress}
                    aria-label="Recipient's username"
                    aria-describedby="button-addon2"
                  />
                  <button type="button" className="btn btn-primary" onClick={sendMessage} disabled={loading}>
                    Send
                  </button>
                </div>
              </div>
              <div id="result" className="card-body">
                {messages.map((message) => (
                  <div key={message.id}>
                    {message.sender === 'user' ? (
                      <>
                        <div className="d-flex justify-content-between">
                          <p className="small mb-1">User</p>
                          <p className="small mb-1 text-muted">{message.timestamp}</p>
                        </div>
                        <div className="d-flex flex-row justify-content-start">
                          <img src="/imgs/user.jpg" alt="User" style={{ width: '45px', height: '100%' }} />
                          <div>
                            <p className="small p-2 ms-3 mb-3 rounded-3 bg-body-tertiary bg-warning">
                              {message.text}
                            </p>
                          </div>
                        </div>
                      </>
                    ) : (
                      <>
                        <div className="d-flex justify-content-between">
                          <p className="small mb-1 text-muted">{message.timestamp}</p>
                          <p className="small mb-1">Chatbot</p>
                        </div>
                        <div className="d-flex flex-row justify-content-end mb-4 pt-1">
                          <div className="small p-2 me-3 mb-3 rounded-3 bg-info" style={{ overflow: 'auto' }}>
                            <pre className="text-white" style={{ fontWeight: 'bold' }}>
                              {message.text}
                            </pre>
                          </div>
                          <img src="/imgs/chatbot.png" alt="Chat Bot" style={{ width: '45px', height: '100%' }} />
                        </div>
                      </>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RagChat;

