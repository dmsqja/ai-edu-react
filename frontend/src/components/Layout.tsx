import { Outlet, Link, useLocation } from 'react-router-dom';
import Sidebar from './Sidebar';

const Layout = () => {
  const location = useLocation();
  const currentPath = location.pathname;

  // 현재 챕터 ID 추출 (예: /ch1/desc -> ch1)
  const getCurrentChapter = () => {
    const match = currentPath.match(/^\/(ch\d+)/);
    return match ? match[1] : null;
  };

  const currentChapter = getCurrentChapter();

  return (
    <>
      {/* Jumbotron Header */}
      <div className="jumbotron text-center" style={{ marginBottom: 0 }}>
        <h1>Spring AI Project</h1>
      </div>

      {/* Top Navigation */}
      <ul className="nav justify-content-end">
        <li className="nav-item">
          <Link className="nav-link" style={{ color: 'black', fontWeight: 'bold' }} to="/setting/intellij">
            Intellij
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" style={{ color: 'black', fontWeight: 'bold' }} to="/setting/springai">
            SpringAi
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" style={{ color: 'black', fontWeight: 'bold' }} to="/setting/postgresql">
            PostgreSQL
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" style={{ color: 'black', fontWeight: 'bold' }} to="/setting/openai">
            OpenAi
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" style={{ color: 'black', fontWeight: 'bold' }} to="/setting/gemini">
            Gemini
          </Link>
        </li>
      </ul>

      {/* Bootstrap Navbar */}
      <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
        <Link className="navbar-brand" to="/">Home</Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#collapsibleNavbar"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="collapsibleNavbar">
          <ul className="navbar-nav" style={{ fontWeight: 'bold' }}>
            <li className="nav-item">
              <Link className="nav-link" to="/ch1">chapter1</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/ch2">chapter2</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/ch3">chapter3</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/ch4">chapter4</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/ch5">chapter5</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/ch6">chapter6</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/ch7">chapter7</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/ch8">chapter8</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/ch9">chapter9</Link>
            </li>
          </ul>
        </div>
      </nav>

      {/* Main Content Area */}
      <div className="container-fluid" style={{ marginTop: '30px' }}>
        <div className="row">
          {/* Sidebar */}
          <div className="col-sm-2">
            <Sidebar currentPage={currentChapter || (currentPath === '/' ? 'main' : currentPath.includes('/setting/') ? 'setting' : null)} />
          </div>
          {/* Main Content */}
          <div className="col-sm-10">
            <Outlet />
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="text-center bg-dark" style={{ marginBottom: 0 }}>
        <p>Footer</p>
      </div>
    </>
  );
};

export default Layout;
