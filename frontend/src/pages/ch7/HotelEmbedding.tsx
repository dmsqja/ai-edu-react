import { useState } from 'react';
// import apiClient from '../../api/client'; // TODO: 백엔드 API 구현 후 활성화

interface Message {
  id: number;
  sender: 'user' | 'bot';
  timestamp: string;
  text: string;
}

const HotelEmbedding = () => {
  const [question, setQuestion] = useState('입실 시간은 언제야');
  const [section, setSection] = useState('regulation');
  const [name, setName] = useState('hotel1');
  const [messages, setMessages] = useState<Message[]>([]);
  const [loading, setLoading] = useState(false);

  const sendMessage = async () => {
    if (!question.trim() || loading) return;

    const questionText = `${name}에 ${section}정보에대한 ${question}`;
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
      // TODO: 백엔드 API 구현 후 활성화
      // const response = await apiClient.post('/ch7/hotel-embedding',
      //   new URLSearchParams({ prompt: question, section: section, name: name }),
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

  const addHotels = async () => {
    setLoading(true);
    try {
      // TODO: 백엔드 API 구현 후 활성화
      // const response = await apiClient.post('/ch7/add-hotels', null, {
      //   headers: {
      //     'Content-Type': 'application/x-www-form-urlencoded',
      //     'Accept': 'text/plain',
      //   },
      // });
      // const responseText = response.data;

      const responseText = '호텔 데이터가 추가되었습니다. (백엔드 API 구현 필요)';

      const botMessage: Message = {
        id: Date.now(),
        text: responseText,
        sender: 'bot',
        timestamp: new Date().toLocaleTimeString('ko-KR'),
      };

      setMessages((prev) => [botMessage, ...prev]);
    } catch (error) {
      console.error('Error adding hotels:', error);
    } finally {
      setLoading(false);
    }
  };

  const deleteHotels = async () => {
    setLoading(true);
    try {
      // TODO: 백엔드 API 구현 후 활성화
      // const response = await apiClient.post('/ch7/delete-hotels', null, {
      //   headers: {
      //     'Content-Type': 'application/x-www-form-urlencoded',
      //     'Accept': 'text/plain',
      //   },
      // });
      // const responseText = response.data;

      const responseText = '호텔 데이터가 삭제되었습니다. (백엔드 API 구현 필요)';

      const botMessage: Message = {
        id: Date.now(),
        text: responseText,
        sender: 'bot',
        timestamp: new Date().toLocaleTimeString('ko-KR'),
      };

      setMessages((prev) => [botMessage, ...prev]);
    } catch (error) {
      console.error('Error deleting hotels:', error);
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
      <h2 className="text-center">2. Hotel Data Embedding</h2>
      <div className="container py-5">
        <div className="row justify-content-center">
          <div>
            <button type="button" className="btn btn-primary mr-2" onClick={addHotels} disabled={loading}>
              Data Add
            </button>
            <button type="button" className="btn btn-primary" onClick={deleteHotels} disabled={loading}>
              Data Delete
            </button>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-sm-5">
            <div className="input-group p-1">
              <span className="input-group-text">호텔</span>
              <select
                id="name"
                className="form-control"
                value={name}
                onChange={(e) => setName(e.target.value)}
              >
                <option value="hotel1">호텔1</option>
                <option value="hotel2">호텔2</option>
              </select>
            </div>
          </div>
          <div className="col-sm-5">
            <div className="input-group p-1">
              <span className="input-group-text">구분</span>
              <select
                id="section"
                className="form-control"
                value={section}
                onChange={(e) => setSection(e.target.value)}
              >
                <option value="regulation">호텔규정</option>
                <option value="restaurant">식사</option>
                <option value="additional">관광지</option>
              </select>
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

export default HotelEmbedding;

