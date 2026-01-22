import { useState, useRef } from 'react';

interface Message {
  id: number;
  text: string;
  sender: 'user' | 'bot';
  timestamp: string;
  streamTargetId?: string;
  isStreaming?: boolean;
}

const ChatMemory = () => {
  const [question, setQuestion] = useState('서울의 맛집 알려줘');
  const [messages, setMessages] = useState<Message[]>([]);
  const [loading, setLoading] = useState(false);
  const streamTargetRef = useRef<{ [key: string]: HTMLPreElement }>({});

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

    const streamTargetId = `stream-${Date.now()}`;
    const botMessage: Message = {
      id: Date.now() + 1,
      text: '',
      sender: 'bot',
      timestamp: new Date().toLocaleTimeString('ko-KR'),
      streamTargetId,
      isStreaming: true,
    };

    setMessages((prev) => [botMessage, ...prev]);

    try {
      // 백엔드 API 호출 (스트리밍)
      const response = await fetch('/ch1/memory', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: new URLSearchParams({ prompt: userMessage.text }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const reader = response.body?.getReader();
      const decoder = new TextDecoder('utf-8');

      if (reader) {
        let fullText = '';
        while (true) {
          const { value, done } = await reader.read();
          if (done) break;
          const chunk = decoder.decode(value, { stream: true });
          fullText += chunk;

          // 실시간으로 DOM에 텍스트 추가
          const target = streamTargetRef.current[streamTargetId];
          if (target) {
            target.textContent = fullText;
          }
        }

        // 스트리밍 완료 후 메시지 업데이트
        setMessages((prev) =>
          prev.map((msg) =>
            msg.streamTargetId === streamTargetId
              ? { ...msg, text: fullText, isStreaming: false }
              : msg
          )
        );
      }
    } catch (error) {
      console.error('Error sending message:', error);
      const errorMessage: Message = {
        id: Date.now() + 2,
        text: '오류가 발생했습니다. 나중에 다시 시도해주세요.',
        sender: 'bot',
        timestamp: new Date().toLocaleTimeString('ko-KR'),
      };
      setMessages((prev) => [errorMessage, ...prev.filter((msg) => msg.streamTargetId !== streamTargetId)]);
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
      <h2 className="text-center">5. Chat Client with ChatMemory</h2>
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
                  <button
                    type="button"
                    className="btn btn-primary"
                    onClick={sendMessage}
                    disabled={loading}
                  >
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
                          <img
                            src="/imgs/user.jpg"
                            alt="User"
                            style={{ width: '45px', height: '100%' }}
                          />
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
                          <div
                            className="small p-2 me-3 mb-3 rounded-3 bg-info"
                            style={{ overflow: 'auto' }}
                          >
                            <pre
                              className="text-white"
                              style={{ fontWeight: 'bold' }}
                              id={message.streamTargetId}
                              ref={(el) => {
                                if (el && message.streamTargetId) {
                                  streamTargetRef.current[message.streamTargetId] = el;
                                }
                              }}
                            >
                              {message.text}
                            </pre>
                          </div>
                          <img
                            src="/imgs/chatbot.png"
                            alt="Chat Bot"
                            style={{ width: '45px', height: '100%' }}
                          />
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

export default ChatMemory;


