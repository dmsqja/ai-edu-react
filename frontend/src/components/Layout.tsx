import { Outlet, Link, useLocation } from 'react-router-dom';
import './Layout.css';

const Layout = () => {
  const location = useLocation();
  const currentPath = location.pathname;

  const chapters = [
    { id: 'ch1', name: 'Chapter 1: Chat', path: '/ch1' },
    { id: 'ch2', name: 'Chapter 2: Prompt Template', path: '/ch2' },
    { id: 'ch3', name: 'Chapter 3: Advisors', path: '/ch3' },
    { id: 'ch4', name: 'Chapter 4: Multimodality', path: '/ch4' },
    { id: 'ch5', name: 'Chapter 5: Speech', path: '/ch5' },
    { id: 'ch6', name: 'Chapter 6: Tools', path: '/ch6' },
    { id: 'ch7', name: 'Chapter 7: Embedding', path: '/ch7' },
    { id: 'ch8', name: 'Chapter 8: RAG', path: '/ch8' },
    { id: 'ch9', name: 'Chapter 9: MCP', path: '/ch9' },
  ];

  return (
    <div className="layout">
      <aside className="sidebar">
        <div className="sidebar-header">
          <Link to="/" className="logo">
            <h1>AI Education</h1>
          </Link>
        </div>
        <nav className="sidebar-nav">
          <Link 
            to="/" 
            className={`nav-item ${currentPath === '/' ? 'active' : ''}`}
          >
            메인
          </Link>
          {chapters.map((chapter) => (
            <Link
              key={chapter.id}
              to={chapter.path}
              className={`nav-item ${currentPath.startsWith(chapter.path) ? 'active' : ''}`}
            >
              {chapter.name}
            </Link>
          ))}
        </nav>
      </aside>
      <main className="content">
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;

