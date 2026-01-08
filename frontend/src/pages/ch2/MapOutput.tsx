import { useState } from 'react';

interface Message {
  id: number;
  text: string;
  sender: 'user' | 'bot';
  timestamp: string;
}

const MapOutput = () => {
  const [location, setLocation] = useState('서울시');
  const [content, setContent] = useState('맛집');
  const [language, setLanguage] = useState('Korean');
  const [messages, setMessages] = useState<Message[]>([]);
  const [loading, setLoading] = useState(false);

  const sendMessage = async () => {
    if (loading) return;

    const questionText = `${location}지역에 ${content}정보를 ${language}로 알려줘`;

    const userMessage: Message = {
      id: Date.now(),
      text: questionText,
      sender: 'user',
      timestamp: new Date().toLocaleTimeString('ko-KR'),
    };

    setMessages((prev) => [userMessage, ...prev]);
    setLoading(true);

    try {
      // 백엔드 API 호출
      const response = await fetch('/ch2/map-output', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
          'Accept': 'application/json',
        },
        body: new URLSearchParams({ location, content, language }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      const responseText = JSON.stringify(data, null, 2);

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

  return (
    <>
      <h2 className="text-center">3. Structured Output Converter - Map Output Converter</h2>
      <div className="container py-5">
        <div className="row justify-content-center">
          <div className="col-sm-2">
            <div className="input-group p-1">
              <span className="input-group-text">지역</span>
              <select
                id="location"
                className="form-control"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
              >
                <option value="서울시">서울</option>
                <option value="경기도">경기</option>
                <option value="부산시">부산</option>
                <option value="제주도">제주</option>
              </select>
            </div>
          </div>
          <div className="col-sm-2">
            <div className="input-group p-1">
              <span className="input-group-text">구분</span>
              <select
                id="content"
                className="form-control"
                value={content}
                onChange={(e) => setContent(e.target.value)}
              >
                <option value="맛집">맛집</option>
                <option value="숙박">숙박</option>
                <option value="쇼핑샵">쇼핑샵</option>
              </select>
            </div>
          </div>
          <div className="col-sm-3">
            <div className="input-group p-1">
              <span className="input-group-text">언어</span>
              <select
                id="language"
                className="form-control"
                value={language}
                onChange={(e) => setLanguage(e.target.value)}
              >
                <option value="Korean">한국어</option>
                <option value="Chinese">중국어</option>
                <option value="Japanese">일본어</option>
                <option value="English">영어</option>
              </select>
            </div>
          </div>
          <div className="col-sm-2">
            <div className="input-group p-1">
              <button
                type="button"
                className="btn btn-primary"
                id="send_btn"
                onClick={sendMessage}
                disabled={loading}
              >
                Send
              </button>
            </div>
          </div>
        </div>

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
              <div className="card-header text-muted d-flex justify-content-start align-items-center p-2"></div>
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
                            <pre className="text-white" style={{ fontWeight: 'bold' }}>
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

export default MapOutput;

