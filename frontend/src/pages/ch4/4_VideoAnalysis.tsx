import { useState, useRef, useEffect } from 'react';
import { streamRequest } from '../../api/client';

interface Message {
  id: number;
  text: string;
  sender: 'user' | 'bot';
  timestamp: string;
  canvasId?: string;
  streamTargetId?: string;
}

const VideoAnalysis = () => {
  const [question, setQuestion] = useState('사진 내용을 설명해줘');
  const [messages, setMessages] = useState<Message[]>([]);
  const [loading, setLoading] = useState(false);
  const [isAutoMode, setIsAutoMode] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const streamRef = useRef<MediaStream | null>(null);
  const autoIntervalRef = useRef<number | null>(null);
  const currentCanvasIdRef = useRef<string>('');
  const streamTargetRef = useRef<{ [key: string]: HTMLPreElement }>({});

  useEffect(() => {
    // 컴포넌트 마운트 시 웹캠 시작
    startWebcam();

    // 컴포넌트 언마운트 시 정리
    return () => {
      stopWebcam();
      if (autoIntervalRef.current) {
        clearInterval(autoIntervalRef.current);
      }
    };
  }, []);

  const startWebcam = async () => {
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
      console.error('웹캠 접근 오류:', error);
      alert('웹캠이 작동하지 않습니다.');
    }
  };

  const stopWebcam = () => {
    if (streamRef.current) {
      streamRef.current.getTracks().forEach((track) => track.stop());
      streamRef.current = null;
    }
  };

  const takeSnapshot = () => {
    if (!videoRef.current) return;

    const canvasId = `target-${Date.now()}`;
    currentCanvasIdRef.current = canvasId;

    const previewMessage: Message = {
      id: Date.now(),
      text: '선택한 이미지 입니다.',
      sender: 'user',
      timestamp: new Date().toLocaleTimeString('ko-KR'),
      canvasId: canvasId,
    };

    setMessages((prev) => [previewMessage, ...prev]);

    // 다음 렌더링에서 canvas에 그리기
    setTimeout(() => {
      const canvas = document.getElementById(canvasId) as HTMLCanvasElement;
      if (canvas && videoRef.current) {
        const ctx = canvas.getContext('2d');
        if (ctx) {
          ctx.drawImage(videoRef.current, 0, 0, canvas.width, canvas.height);
        }
      }
    }, 0);
  };

  const sendMessage = async () => {
    if (!question.trim() || !currentCanvasIdRef.current || loading) return;

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
    };

    setMessages((prev) => [botMessage, ...prev]);

    try {
      // 백엔드 API 호출 (웹캠 캡처 이미지)
      const canvas = document.getElementById(currentCanvasIdRef.current) as HTMLCanvasElement;
      const imgBase64 = canvas.toDataURL('image/jpeg');
      const blob = await (await fetch(imgBase64)).blob();
      
      const formData = new FormData();
      formData.append('question', userMessage.text);
      formData.append('attach', blob, `snapshot_${Date.now()}.jpg`);
      
      const fullText = await streamRequest(
        '/ch4/image-analysis',
        formData,
        (text) => {
          // 실시간으로 DOM에 텍스트 추가
          const target = streamTargetRef.current[streamTargetId];
          if (target) {
            target.textContent = text;
          }
        }
      );

      // 스트리밍 완료 후 메시지 업데이트
      setMessages((prev) =>
        prev.map((msg) =>
          msg.streamTargetId === streamTargetId
            ? { ...msg, text: fullText }
            : msg
        )
      );
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

  const handleAutoCapture = () => {
    if (isAutoMode) {
      // 자동 모드 중지
      if (autoIntervalRef.current) {
        clearInterval(autoIntervalRef.current);
        autoIntervalRef.current = null;
      }
      setIsAutoMode(false);
    } else {
      // 자동 모드 시작
      setIsAutoMode(true);
      autoIntervalRef.current = setInterval(() => {
        takeSnapshot();
        sendMessage();
      }, 15000);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      sendMessage();
    }
  };

  return (
    <>
      <h2 className="text-center">4. Video Analysis</h2>
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
                    className="btn btn-primary"
                    id="capture_btn"
                    onClick={takeSnapshot}
                  >
                    Image Capture
                  </button>
                </div>
                <div className="input-group mb-0">
                  <button
                    type="button"
                    className="btn btn-warning"
                    id="auto_btn"
                    onClick={handleAutoCapture}
                  >
                    {isAutoMode ? 'Take Auto Stop' : 'Take Auto'}
                  </button>
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
                    id="send_btn"
                    onClick={sendMessage}
                    disabled={loading || !currentCanvasIdRef.current}
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

export default VideoAnalysis;

