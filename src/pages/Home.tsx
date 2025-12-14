import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  return (
    <div className="home">
      <div className="hero">
        <h1>AI 교육 플랫폼에 오신 것을 환영합니다</h1>
        <p className="hero-description">
          체계적인 9개 챕터를 통해 AI의 기초부터 실전 프로젝트까지 학습하세요.
          채팅, 프롬프트 엔지니어링, 멀티모달, RAG 등 최신 AI 기술을 다룹니다.
        </p>
        <Link to="/chapter/1" className="start-button">
          학습 시작하기
        </Link>
      </div>
      
      <div className="features">
        <div className="feature-card">
          <div className="feature-icon">🤖</div>
          <h3>AI 기초부터 고급까지</h3>
          <p>인공지능의 기본 개념부터 최신 기술까지 단계별로 학습합니다.</p>
        </div>
        <div className="feature-card">
          <div className="feature-icon">💬</div>
          <h3>실습 중심 학습</h3>
          <p>채팅, 프롬프트 엔지니어링 등 실제 활용 가능한 기술을 습득합니다.</p>
        </div>
        <div className="feature-card">
          <div className="feature-icon">🎯</div>
          <h3>체계적인 커리큘럼</h3>
          <p>9개의 챕터로 구성된 완성도 높은 교육 과정을 제공합니다.</p>
        </div>
      </div>
    </div>
  );
};

export default Home;
