import { useState, useRef } from 'react';

interface Message {
  id: number;
  sender: 'user' | 'bot';
  timestamp: string;
  text?: string;
  audioUrl?: string;
}

const SpeechToTextChat = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [loading, setLoading] = useState(false);
  const mediaRecorderRef = useRef<MediaRecorder | null>(null);
  const streamRef = useRef<MediaStream | null>(null);
  const chunksRef = useRef<Blob[]>([]);

  const startRecording = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      streamRef.current = stream;
      const mediaRecorder = new MediaRecorder(stream);
      mediaRecorderRef.current = mediaRecorder;
      chunksRef.current = [];

      mediaRecorder.ondataavailable = (e) => {
        chunksRef.current.push(e.data);
      };

      mediaRecorder.onstop = () => {
        const blob = new Blob(chunksRef.current, { type: 'audio/ogg; codecs=opus' });
        const audioURL = URL.createObjectURL(blob);
        send(blob, audioURL);
        chunksRef.current = [];
      };

      mediaRecorder.start();
    } catch (err) {
      console.error('Error accessing the microphone:', err);
      alert('마이크에 접근할 수 없습니다. 브라우저 권한을 확인해주세요.');
    }
  };

  const stopRecording = () => {
    mediaRecorderRef.current?.stop();
    streamRef.current?.getTracks().forEach((t) => t.stop());
  };

  const send = async (blob: Blob, audioURL: string) => {
    setLoading(true);

    const audioMessage: Message = {
      id: Date.now(),
      sender: 'user',
      timestamp: new Date().toLocaleTimeString('ko-KR'),
      audioUrl: audioURL,
    };
    setMessages((prev) => [audioMessage, ...prev]);

    try {
      // 백엔드 API 호출 (음성 파일 전송)
      const formData = new FormData();
      formData.append('attach', blob, 'speech.mp3');

      const response = await fetch('/ch5/speech-to-text-chat', {
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
        sender: 'bot',
        timestamp: new Date().toLocaleTimeString('ko-KR'),
        text: responseText,
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

  return (
    <>
      <h2 className="text-center">5. Speech to Text : Chat</h2>
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
                  <span className="input-group-text mr-2">음성으로 질문하세요</span>
                  <button
                    type="button"
                    className="btn btn-primary mr-2"
                    onClick={startRecording}
                  >
                    Record
                  </button>
                  <button
                    type="button"
                    className="btn btn-primary mr-2"
                    onClick={stopRecording}
                  >
                    Stop &amp; Send
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
                            <p className="small p-2 ms-3 mb-3 rounded-3 bg-body-tertiary">
                              <audio controls src={m.audioUrl} />
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
                            <pre className="text-white" style={{ fontWeight: 'bold' }}>
                              {m.text}
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

export default SpeechToTextChat;
