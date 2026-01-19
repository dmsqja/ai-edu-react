import { useState, useRef } from 'react';

interface Message {
  id: number;
  text: string;
  sender: 'user' | 'bot';
  timestamp: string;
  previewImage?: string;
  streamTargetId?: string;
}

const ImageAnalysis = () => {
  const [question, setQuestion] = useState('사진의 내용을 설명해줘');
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [previewImage, setPreviewImage] = useState<string | null>(null);
  const [messages, setMessages] = useState<Message[]>([]);
  const [loading, setLoading] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const streamTargetRef = useRef<{ [key: string]: HTMLPreElement }>({});

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setSelectedFile(file);
      const reader = new FileReader();
      reader.onload = (event) => {
        setPreviewImage(event.target?.result as string);
        
        // 미리보기 메시지 추가
        const previewMessage: Message = {
          id: Date.now(),
          text: '올리신 이미지 입니다.',
          sender: 'user',
          timestamp: new Date().toLocaleTimeString('ko-KR'),
          previewImage: event.target?.result as string,
        };
        setMessages((prev) => [previewMessage, ...prev]);
      };
      reader.readAsDataURL(file);
    }
  };

  const sendMessage = async () => {
    if (!question.trim() || !selectedFile || loading) return;

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
      // 백엔드 API 호출 (FormData)
      const formData = new FormData();
      formData.append('question', userMessage.text);
      formData.append('attach', selectedFile);
      
      const response = await fetch('/ch4/image-analysis', {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const responseText = await response.text();
      const botMessage: Message = {
        id: Date.now() + 1,
        text: responseText,
        sender: 'bot',
        timestamp: new Date().toLocaleTimeString('ko-KR'),
      };

      setMessages((prev) => [botMessage, ...prev]);
      
      const targetElement = streamTargetRef.current[targetId];
      if (targetElement) {
        for (let i = 0; i < dummyText.length; i++) {
          targetElement.textContent += dummyText[i];
          await new Promise((resolve) => setTimeout(resolve, 30));
        }
      }
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
      <h2 className="text-center">3. Image Analysis</h2>
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
                  <span className="input-group-text">사진선택</span>
                  <input
                    id="attach"
                    ref={fileInputRef}
                    className="form-control"
                    type="file"
                    accept="image/*"
                    onChange={handleFileChange}
                  />
                </div>
              </div>
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
                    disabled={loading || !selectedFile}
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
                            alt="avatar 1"
                            style={{ width: '45px', height: '100%' }}
                          />
                          <div>
                            {message.previewImage ? (
                              <>
                                <p>올리신 이미지 입니다.</p>
                                <img
                                  src={message.previewImage}
                                  alt="미리보기 이미지"
                                  height="200"
                                />
                              </>
                            ) : (
                              <p className="small p-2 ms-3 mb-3 rounded-3 bg-body-tertiary bg-warning">
                                {message.text}
                              </p>
                            )}
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

export default ImageAnalysis;

