import './Home.css';

const Home = () => {
  return (
    <div className="home">
      <h1>AI Education Platform</h1>
      <p className="subtitle">Spring AI 학습 콘텐츠를 React로 재구현</p>
      
      <div className="chapters-grid">
        <div className="chapter-card">
          <h2>Chapter 1: Chat</h2>
          <p>채팅 기능 구현</p>
        </div>
        <div className="chapter-card">
          <h2>Chapter 2: Prompt Template</h2>
          <p>프롬프트 템플릿</p>
        </div>
        <div className="chapter-card">
          <h2>Chapter 3: Advisors</h2>
          <p>어드바이저 패턴</p>
        </div>
        <div className="chapter-card">
          <h2>Chapter 4: Multimodality</h2>
          <p>멀티모달 처리</p>
        </div>
        <div className="chapter-card">
          <h2>Chapter 5: Speech</h2>
          <p>음성 처리</p>
        </div>
        <div className="chapter-card">
          <h2>Chapter 6: Tools</h2>
          <p>도구/함수 호출</p>
        </div>
        <div className="chapter-card">
          <h2>Chapter 7: Embedding</h2>
          <p>임베딩</p>
        </div>
        <div className="chapter-card">
          <h2>Chapter 8: RAG</h2>
          <p>Retrieval Augmented Generation</p>
        </div>
        <div className="chapter-card">
          <h2>Chapter 9: MCP</h2>
          <p>Model Context Protocol</p>
        </div>
      </div>
    </div>
  );
};

export default Home;

