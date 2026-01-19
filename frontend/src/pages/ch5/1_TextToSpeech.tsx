import { useState } from 'react';

interface Message {
  id: number;
  sender: 'user' | 'bot';
  timestamp: string;
  text?: string;
  audioBase64?: string;
}

const TextToSpeech = () => {
  const [question, setQuestion] = useState('안녕하세요');
  const [messages, setMessages] = useState<Message[]>([]);
  const [loading, setLoading] = useState(false);

  const sendMessage = async () => {
    if (!question.trim() || loading) return;

    const userMessage: Message = {
      id: Date.now(),
      sender: 'user',
      timestamp: new Date().toLocaleTimeString('ko-KR'),
      text: question,
    };

    setMessages((prev) => [userMessage, ...prev]);
    setLoading(true);
    setQuestion('');

    try {
      // 백엔드 API 호출
      const response = await fetch('/ch5/text-to-speech', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
          'Accept': 'application/json',
        },
        body: new URLSearchParams({ prompt: userMessage.text || '' }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const responseJson = await response.json();
      const audioBase64 = responseJson.audio;

      const botMessage: Message = {
        id: Date.now() + 1,
        sender: 'bot',
        timestamp: new Date().toLocaleTimeString('ko-KR'),
        audioBase64: audioBase64,
        text: userMessage.text || '',
      };

      setMessages((prev) => [botMessage, ...prev]);
    } catch (e) {
      const errorMessage: Message = {
        id: Date.now() + 1,
        sender: 'bot',
        timestamp: new Date().toLocaleTimeString('ko-KR'),
        text: '오류가 발생했습니다. 나중에 다시 시도해주세요.',
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
      <h2 className="text-center">1. Text to Speech</h2>
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
                {messages.map((m) => (
                  <div key={m.id}>
                    {m.sender === 'user' ? (
                      <>
                        <div className="d-flex justify-content-between">
                          <p className="small mb-1">User</p>
                          <p className="small mb-1 text-muted">{m.timestamp}</p>
                        </div>
                        <div className="d-flex flex-row justify-content-start">
                          <img
                            src="/imgs/user.jpg"
                            alt="User"
                            style={{ width: '45px', height: '100%' }}
                          />
                          <div>
                            <p className="small p-2 ms-3 mb-3 rounded-3 bg-body-tertiary bg-warning">
                              {m.text}
                            </p>
                          </div>
                        </div>
                      </>
                    ) : (
                      <>
                        <div className="d-flex justify-content-between">
                          <p className="small mb-1 text-muted">{m.timestamp}</p>
                          <p className="small mb-1">Chatbot</p>
                        </div>
                        <div className="d-flex flex-row justify-content-end mb-4 pt-1">
                          <div
                            className="small p-2 me-3 mb-3 rounded-3 bg-info"
                            style={{ overflow: 'auto' }}
                          >
                            <span className="input-group-text me-2">변환된 음성</span>
                            {m.audioBase64 ? (
                              <>
                                <a
                                  href={`data:audio/mp3;base64,${m.audioBase64}`}
                                  className="text-white"
                                  download={`output-${Date.now()}.mp3`}
                                >
                                  Download
                                </a>
                                <br />
                                <audio
                                  controls
                                  src={`data:audio/mp3;base64,${m.audioBase64}`}
                                />
                              </>
                            ) : (
                              <p className="text-white" style={{ fontWeight: 'bold' }}>
                                {m.text}
                              </p>
                            )}
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

export default TextToSpeech;
