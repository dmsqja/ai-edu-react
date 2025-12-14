import { Link, Outlet } from 'react-router-dom';
import './MainLayout.css';

const MainLayout = () => {
  const chapters = [
    { id: 1, title: 'AI 소개', path: '/chapter/1' },
    { id: 2, title: 'AI 기초와 채팅', path: '/chapter/2' },
    { id: 3, title: '프롬프트 엔지니어링', path: '/chapter/3' },
    { id: 4, title: '고급 프롬프팅', path: '/chapter/4' },
    { id: 5, title: '멀티모달 AI', path: '/chapter/5' },
    { id: 6, title: 'RAG', path: '/chapter/6' },
    { id: 7, title: '파인튜닝', path: '/chapter/7' },
    { id: 8, title: 'AI 윤리와 안전', path: '/chapter/8' },
    { id: 9, title: '실전 프로젝트', path: '/chapter/9' },
  ];

  return (
    <div className="main-layout">
      <header className="header">
        <h1>AI 교육 플랫폼</h1>
        <p className="subtitle">인공지능을 배우는 가장 쉬운 방법</p>
      </header>
      
      <div className="content-wrapper">
        <nav className="sidebar">
          <h2>학습 챕터</h2>
          <ul className="chapter-list">
            {chapters.map((chapter) => (
              <li key={chapter.id}>
                <Link to={chapter.path} className="chapter-link">
                  <span className="chapter-number">{chapter.id}</span>
                  <span className="chapter-title">{chapter.title}</span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        
        <main className="main-content">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default MainLayout;
