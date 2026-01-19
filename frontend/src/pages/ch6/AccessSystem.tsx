import { useState, useRef, useEffect } from 'react';

interface Message {
  id: number;
  sender: 'user' | 'bot';
  timestamp: string;
  text: string;
  canvasId?: string;
}

const AccessSystem = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [loading, setLoading] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const streamRef = useRef<MediaStream | null>(null);

  useEffect(() => {
    // 카메라 시작
    const startCamera = async () => {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({
          video: true,
          audio: false,
        });
        if (videoRef.current) {
          videoRef.current.srcObject = stream;
          streamRef.current = stream;
        }
      } catch (error) {
        console.error('Error accessing camera:', error);
        alert('웹캠에 접근할 수 없습니다.');
      }
    };

    startCamera();

    // 컴포넌트 언마운트 시 스트림 정리
    return () => {
      if (streamRef.current) {
        streamRef.current.getTracks().forEach((track) => track.stop());
      }
    };
  }, []);

  const takeSnapshot = async () => {
    if (!videoRef.current || loading) return;

    const canvasId = `target-${Date.now()}`;

    // 프리뷰 메시지 추가
    const previewMessage: Message = {
      id: Date.now(),
      text: '선택한 이미지 입니다.',
      sender: 'user',
      timestamp: new Date().toLocaleTimeString('ko-KR'),
      canvasId: canvasId,
    };

    setMessages((prev) => [previewMessage, ...prev]);
    setLoading(true);

    // 다음 렌더링에서 canvas에 그리기
    setTimeout(async () => {
      const canvas = document.getElementById(canvasId) as HTMLCanvasElement;
      if (canvas && videoRef.current) {
        const ctx = canvas.getContext('2d');
        if (ctx) {
          ctx.drawImage(videoRef.current, 0, 0, canvas.width, canvas.height);
        }

        try {
          // 백엔드 API 호출
          const imgBase64 = canvas.toDataURL('image/jpeg');
          const blob = await (await fetch(imgBase64)).blob();

          const formData = new FormData();
          formData.append('attach', blob, `snapshot_${Date.now()}.jpg`);

          const response = await fetch('/ch6/access-system', {
            method: 'POST',
            headers: {
              'Accept': 'text/plain',
            },
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
        } catch (error) {
          console.error('Error sending snapshot:', error);
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
      }
    }, 0);
  };

  return (
    <>
      <h2 className="text-center">4. Access System</h2>
      <div className="container py-5">
        <div className="row d-flex justify-content-center">
          <div className="col-sm-9">
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
                  <button
                    type="button"
                    className="btn btn-warning"
                    id="capture_btn"
                    onClick={takeSnapshot}
                    disabled={loading}
                  >
                    Image Capture & Send
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
                            {message.canvasId ? (
                              <>
                                <p>선택한 이미지 입니다.</p>
                                <canvas
                                  id={message.canvasId}
                                  width="160"
                                  height="140"
                                  style={{ border: '1px solid #ddd' }}
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
                              style={{ textAlign: 'left', fontWeight: 'bold' }}
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
          <div className="col-sm-3">
            <video
              id="video_area"
              ref={videoRef}
              autoPlay
              style={{ border: '1px solid blue', height: '300px', width: '100%' }}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default AccessSystem;

