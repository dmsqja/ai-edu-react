import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Chapter from './pages/Chapter';
import ChapterDesc from './pages/ChapterDesc';
import Chat from './pages/ch1/Chat';
import ChatStream from './pages/ch1/ChatStream';
import ChatFewShot from './pages/ch1/ChatFewShot';
import ChatChainOfThought from './pages/ch1/ChatChainOfThought';
import ChatMemory from './pages/ch1/ChatMemory';
import PromptTemplate from './pages/ch2/PromptTemplate';
import ListOutput from './pages/ch2/ListOutput';
import MapOutput from './pages/ch2/MapOutput';
import BeanOutput from './pages/ch2/BeanOutput';
import ParameterizedTypeReference from './pages/ch2/ParameterizedTypeReference';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path=":chapterId" element={<Chapter />}>
            <Route index element={<ChapterDesc />} />
            {/* Chapter 1 */}
            <Route path="1_chat" element={<Chat />} />
            <Route path="2_chat_stream" element={<ChatStream />} />
            <Route path="3_chat_few_shot" element={<ChatFewShot />} />
            <Route path="4_chat_chain_of_thought" element={<ChatChainOfThought />} />
            <Route path="5_chat_memory" element={<ChatMemory />} />
            {/* Chapter 2 */}
            <Route path="1_prompt_template" element={<PromptTemplate />} />
            <Route path="2_list_output" element={<ListOutput />} />
            <Route path="3_map_output" element={<MapOutput />} />
            <Route path="4_bean_output" element={<BeanOutput />} />
            <Route path="5_parameterized_type_reference" element={<ParameterizedTypeReference />} />
            {/* 다른 챕터의 세부 페이지는 여기에 추가 */}
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
