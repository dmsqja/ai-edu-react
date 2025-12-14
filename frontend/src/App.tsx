import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Chapter from './pages/Chapter';
import ChapterDesc from './pages/ChapterDesc';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path=":chapterId" element={<Chapter />}>
            <Route index element={<ChapterDesc />} />
            {/* 각 챕터의 세부 페이지는 여기에 추가 */}
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
