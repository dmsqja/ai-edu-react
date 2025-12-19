import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Chapter from './pages/Chapter';
import ChapterDesc from './pages/ChapterDesc';
import Chapter1Fragment from './pages/ch1/Chapter1Fragment';
import Chapter2Fragment from './pages/ch2/Chapter2Fragment';
import Chapter3Fragment from './pages/ch3/Chapter3Fragment';
import Chapter4Fragment from './pages/ch4/Chapter4Fragment';
import Chapter5Fragment from './pages/ch5/Chapter5Fragment';
import Chapter6Fragment from './pages/ch6/Chapter6Fragment';
import Chapter7Fragment from './pages/ch7/Chapter7Fragment';
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
import Advisor from './pages/ch3/Advisor';
import AdvisorStream from './pages/ch3/AdvisorStream';
import RecursiveAdvisors from './pages/ch3/RecursiveAdvisors';
import GenerateImageUrl from './pages/ch4/GenerateImageUrl';
import GenerateImage from './pages/ch4/GenerateImage';
import ImageAnalysis from './pages/ch4/ImageAnalysis';
import VideoAnalysis from './pages/ch4/VideoAnalysis';
import TextToSpeech from './pages/ch5/TextToSpeech';
import TextToSpeechChat from './pages/ch5/TextToSpeechChat';
import TextToSpeechChatStream from './pages/ch5/TextToSpeechChatStream';
import SpeechToText from './pages/ch5/SpeechToText';
import SpeechToTextChat from './pages/ch5/SpeechToTextChat';
import SpeechToTextChatVoice from './pages/ch5/SpeechToTextChatVoice';
import DateTime from './pages/ch6/DateTime';
import CustomerInquiry from './pages/ch6/CustomerInquiry';
import Recommendation from './pages/ch6/Recommendation';
import AccessSystem from './pages/ch6/AccessSystem';
import TextEmbedding from './pages/ch7/TextEmbedding';
import HotelEmbedding from './pages/ch7/HotelEmbedding';
import ChatPgvector from './pages/ch7/ChatPgvector';
import ChatJdbc from './pages/ch7/ChatJdbc';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path=":chapterId" element={<Chapter />}>
            <Route path="desc" element={<ChapterDesc />} />
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
            {/* Chapter 3 */}
            <Route path="1_advisor" element={<Advisor />} />
            <Route path="2_advisor_stream" element={<AdvisorStream />} />
            <Route path="3_recursive_advisors" element={<RecursiveAdvisors />} />
            {/* Chapter 4 */}
            <Route path="1_generate_image_url" element={<GenerateImageUrl />} />
            <Route path="2_generate_image" element={<GenerateImage />} />
            <Route path="3_image_analysis" element={<ImageAnalysis />} />
            <Route path="4_video_analysis" element={<VideoAnalysis />} />
            {/* Chapter 5 */}
            <Route path="1_text_to_speech" element={<TextToSpeech />} />
            <Route path="2_text_to_speech_chat" element={<TextToSpeechChat />} />
            <Route path="3_text_to_speech_chat_stream" element={<TextToSpeechChatStream />} />
            <Route path="4_speech_to_text" element={<SpeechToText />} />
            <Route path="5_speech_to_text_chat" element={<SpeechToTextChat />} />
            <Route path="6_speech_to_text_chat_voice" element={<SpeechToTextChatVoice />} />
            {/* Chapter 6 */}
            <Route path="1_date_time" element={<DateTime />} />
            <Route path="2_customer_inquiry" element={<CustomerInquiry />} />
            <Route path="3_recommendation" element={<Recommendation />} />
            <Route path="4_access_system" element={<AccessSystem />} />
            {/* Chapter 7 */}
            <Route path="1_text_embedding" element={<TextEmbedding />} />
            <Route path="2_hotel_embedding" element={<HotelEmbedding />} />
            <Route path="3_chat_pgvector" element={<ChatPgvector />} />
            <Route path="4_chat_jdbc" element={<ChatJdbc />} />
            {/* 다른 챕터의 세부 페이지는 여기에 추가 */}
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
