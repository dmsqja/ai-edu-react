interface Message {
  id: number;
  text: string;
  sender: 'user' | 'bot';
  timestamp: string;
}

interface ChatUIProps {
  title: string;
  question: string;
  setQuestion: (value: string) => void;
  messages: Message[];
  loading: boolean;
  onSendMessage: () => void;
  onKeyPress: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  showSpinner?: boolean;
  additionalButtons?: React.ReactNode;
  columnSize?: string;
  topControls?: React.ReactNode;
}

const ChatUI = ({
  title,
  question,
  setQuestion,
  messages,
  loading,
  onSendMessage,
  onKeyPress,
  showSpinner = true,
  additionalButtons,
  columnSize = 'col-sm-12',
  topControls,
}: ChatUIProps) => {
  return (
    <>
      <h2 className="text-center">{title}</h2>
      <div className="container py-5">
        <div className="row d-flex justify-content-center">
          <div className={columnSize}>
            {showSpinner && (
              <button
                className="btn btn-primary"
                disabled
                style={{ visibility: loading ? 'visible' : 'hidden' }}
              >
                <span className="spinner-border spinner-border-sm"></span>
                Loading..
              </button>
            )}
            {topControls}
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
                    onKeyPress={onKeyPress}
                    aria-label="Recipient's username"
                    aria-describedby="button-addon2"
                  />
                  <button
                    type="button"
                    className="btn btn-primary"
                    onClick={onSendMessage}
                    disabled={loading}
                  >
                    Send
                  </button>
                  {additionalButtons}
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

export default ChatUI;

