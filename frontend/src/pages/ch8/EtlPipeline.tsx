import { useState } from 'react';
// import apiClient from '../../api/client'; // TODO: 백엔드 API 구현 후 활성화

interface Message {
  id: number;
  sender: 'user' | 'bot';
  timestamp: string;
  text: string;
}

const EtlPipeline = () => {
  const [type, setType] = useState('regulation');
  const [file, setFile] = useState<File | null>(null);
  const [messages, setMessages] = useState<Message[]>([]);
  const [loading, setLoading] = useState(false);

  const sendMessage = async () => {
    if (!file || loading) return;

    setLoading(true);

    try {
      // TODO: 백엔드 API 구현 후 활성화
      // const formData = new FormData();
      // formData.append('type', type);
      // formData.append('attach', file);
      // const response = await apiClient.post('/ch8/add-vector-store', formData, {
      //   headers: {
      //     'Accept': 'text/plain',
      //   },
      // });
      // const responseText = response.data;

      const responseText = 'ETL 파이프라인이 처리되었습니다. (백엔드 API 구현 필요)';

      const botMessage: Message = {
        id: Date.now(),
        text: responseText,
        sender: 'bot',
        timestamp: new Date().toLocaleTimeString('ko-KR'),
      };

      setMessages((prev) => [botMessage, ...prev]);
      setFile(null);
    } catch (error) {
      console.error('Error sending file:', error);
      const errorMessage: Message = {
        id: Date.now(),
        text: '오류가 발생했습니다. 나중에 다시 시도해주세요.',
        sender: 'bot',
        timestamp: new Date().toLocaleTimeString('ko-KR'),
      };
      setMessages((prev) => [errorMessage, ...prev]);
    } finally {
      setLoading(false);
    }
  };

  const deleteData = async () => {
    setLoading(true);
    try {
      // TODO: 백엔드 API 구현 후 활성화
      // const response = await apiClient.post('/ch8/clear-vector-store', new URLSearchParams({ type: type }), {
      //   headers: {
      //     'Content-Type': 'application/x-www-form-urlencoded',
      //     'Accept': 'text/plain',
      //   },
      // });
      // const responseText = response.data;

      const responseText = 'Vector Store가 삭제되었습니다. (백엔드 API 구현 필요)';

      const botMessage: Message = {
        id: Date.now(),
        text: responseText,
        sender: 'bot',
        timestamp: new Date().toLocaleTimeString('ko-KR'),
      };

      setMessages((prev) => [botMessage, ...prev]);
    } catch (error) {
      console.error('Error deleting data:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0]);
    }
  };

  return (
    <>
      <h2 className="text-center">1. ETL(Extract, Transform, Load) Pipeline</h2>
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
                  <span className="input-group-text">파일선택</span>
                  <input id="attach" className="form-control" type="file" onChange={handleFileChange} />
                </div>
              </div>
              <div className="card-header text-muted d-flex justify-content-start align-items-center p-3">
                <div className="input-group mb-0">
                  <span className="input-group-text">구분</span>
                  <select
                    id="type"
                    className="form-control mr-5"
                    value={type}
                    onChange={(e) => setType(e.target.value)}
                  >
                    <option value="regulation">호텔규정</option>
                    <option value="restaurant">식사</option>
                    <option value="additional">관광지</option>
                  </select>
                  <button type="button" className="btn btn-primary mr-5" onClick={sendMessage} disabled={loading || !file}>
                    Send
                  </button>
                  <button type="button" className="btn btn-danger" onClick={deleteData} disabled={loading}>
                    Delete
                  </button>
                </div>
              </div>
              <div id="result" className="card-body">
                {messages.map((message) => (
                  <div key={message.id}>
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

export default EtlPipeline;

