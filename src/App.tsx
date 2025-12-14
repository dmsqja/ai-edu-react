import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import Home from './pages/Home';
import Chapter1 from './pages/chapters/Chapter1';
import Chapter2 from './pages/chapters/Chapter2';
import Chapter3 from './pages/chapters/Chapter3';
import Chapter4 from './pages/chapters/Chapter4';
import Chapter5 from './pages/chapters/Chapter5';
import Chapter6 from './pages/chapters/Chapter6';
import Chapter7 from './pages/chapters/Chapter7';
import Chapter8 from './pages/chapters/Chapter8';
import Chapter9 from './pages/chapters/Chapter9';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="chapter/1" element={<Chapter1 />} />
          <Route path="chapter/2" element={<Chapter2 />} />
          <Route path="chapter/3" element={<Chapter3 />} />
          <Route path="chapter/4" element={<Chapter4 />} />
          <Route path="chapter/5" element={<Chapter5 />} />
          <Route path="chapter/6" element={<Chapter6 />} />
          <Route path="chapter/7" element={<Chapter7 />} />
          <Route path="chapter/8" element={<Chapter8 />} />
          <Route path="chapter/9" element={<Chapter9 />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
