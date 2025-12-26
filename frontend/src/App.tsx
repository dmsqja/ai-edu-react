import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import ChapterDesc from './pages/ChapterDesc';
// Chapter Index Pages
import Chapter1Index from './pages/ch1';
import Chapter2Index from './pages/ch2';
import Chapter3Index from './pages/ch3';
import Chapter4Index from './pages/ch4';
import Chapter5Index from './pages/ch5';
import Chapter6Index from './pages/ch6';
import Chapter7Index from './pages/ch7';
import Chapter8Index from './pages/ch8';
import Chapter9Index from './pages/ch9';
// Chapter 1
import Chat from './pages/ch1/Chat';
import ChatStream from './pages/ch1/ChatStream';
import ChatFewShot from './pages/ch1/ChatFewShot';
import ChatChainOfThought from './pages/ch1/ChatChainOfThought';
import ChatMemory from './pages/ch1/ChatMemory';
// Chapter 2
import PromptTemplate from './pages/ch2/PromptTemplate';
import ListOutput from './pages/ch2/ListOutput';
import MapOutput from './pages/ch2/MapOutput';
import BeanOutput from './pages/ch2/BeanOutput';
import ParameterizedTypeReference from './pages/ch2/ParameterizedTypeReference';
// Chapter 3
import Advisor from './pages/ch3/Advisor';
import AdvisorStream from './pages/ch3/AdvisorStream';
import RecursiveAdvisors from './pages/ch3/RecursiveAdvisors';
// Chapter 4
import GenerateImageUrl from './pages/ch4/GenerateImageUrl';
import GenerateImage from './pages/ch4/GenerateImage';
import ImageAnalysis from './pages/ch4/ImageAnalysis';
import VideoAnalysis from './pages/ch4/VideoAnalysis';
// Chapter 5
import TextToSpeech from './pages/ch5/TextToSpeech';
import TextToSpeechChat from './pages/ch5/TextToSpeechChat';
import TextToSpeechChatStream from './pages/ch5/TextToSpeechChatStream';
import SpeechToText from './pages/ch5/SpeechToText';
import SpeechToTextChat from './pages/ch5/SpeechToTextChat';
import SpeechToTextChatVoice from './pages/ch5/SpeechToTextChatVoice';
// Chapter 6
import DateTime from './pages/ch6/DateTime';
import CustomerInquiry from './pages/ch6/CustomerInquiry';
import Recommendation from './pages/ch6/Recommendation';
import AccessSystem from './pages/ch6/AccessSystem';
// Chapter 7
import TextEmbedding from './pages/ch7/TextEmbedding';
import HotelEmbedding from './pages/ch7/HotelEmbedding';
import ChatPgvector from './pages/ch7/ChatPgvector';
import ChatJdbc from './pages/ch7/ChatJdbc';
// Chapter 8
import EtlPipeline from './pages/ch8/EtlPipeline';
import RagChat from './pages/ch8/RagChat';
import RagChatPromptTemplate from './pages/ch8/RagChatPromptTemplate';
import RaaRagChat from './pages/ch8/RaaRagChat';
import CqtRagChat from './pages/ch8/CqtRagChat';
import RqtRagChat from './pages/ch8/RqtRagChat';
import TqtRagChat from './pages/ch8/TqtRagChat';
import MqeRagChat from './pages/ch8/MqeRagChat';
// Chapter 9
import McpWebmvcChat from './pages/ch9/McpWebmvcChat';
import McpWebmvcChatStream from './pages/ch9/McpWebmvcChatStream';
// Setting Pages
import Intellij from './pages/setting/Intellij';
import SpringAI from './pages/setting/SpringAI';
import PostgreSQL from './pages/setting/PostgreSQL';
import OpenAI from './pages/setting/OpenAI';
import Gemini from './pages/setting/Gemini';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          
          {/* Chapter 1 */}
          <Route path="ch1">
            <Route index element={<Chapter1Index />} />
            <Route path="desc" element={<ChapterDesc />} />
            <Route path="1_chat" element={<Chat />} />
            <Route path="2_chat_stream" element={<ChatStream />} />
            <Route path="3_chat_few_shot" element={<ChatFewShot />} />
            <Route path="4_chat_chain_of_thought" element={<ChatChainOfThought />} />
            <Route path="5_chat_memory" element={<ChatMemory />} />
          </Route>

          {/* Chapter 2 */}
          <Route path="ch2">
            <Route index element={<Chapter2Index />} />
            <Route path="desc" element={<ChapterDesc />} />
            <Route path="1_prompt_template" element={<PromptTemplate />} />
            <Route path="2_list_output" element={<ListOutput />} />
            <Route path="3_map_output" element={<MapOutput />} />
            <Route path="4_bean_output" element={<BeanOutput />} />
            <Route path="5_parameterized_type_reference" element={<ParameterizedTypeReference />} />
          </Route>

          {/* Chapter 3 */}
          <Route path="ch3">
            <Route index element={<Chapter3Index />} />
            <Route path="desc" element={<ChapterDesc />} />
            <Route path="1_advisor" element={<Advisor />} />
            <Route path="2_advisor_stream" element={<AdvisorStream />} />
            <Route path="3_recursive_advisors" element={<RecursiveAdvisors />} />
          </Route>

          {/* Chapter 4 */}
          <Route path="ch4">
            <Route index element={<Chapter4Index />} />
            <Route path="desc" element={<ChapterDesc />} />
            <Route path="1_generate_image_url" element={<GenerateImageUrl />} />
            <Route path="2_generate_image" element={<GenerateImage />} />
            <Route path="3_image_analysis" element={<ImageAnalysis />} />
            <Route path="4_video_analysis" element={<VideoAnalysis />} />
          </Route>

          {/* Chapter 5 */}
          <Route path="ch5">
            <Route index element={<Chapter5Index />} />
            <Route path="desc" element={<ChapterDesc />} />
            <Route path="1_text_to_speech" element={<TextToSpeech />} />
            <Route path="2_text_to_speech_chat" element={<TextToSpeechChat />} />
            <Route path="3_text_to_speech_chat_stream" element={<TextToSpeechChatStream />} />
            <Route path="4_speech_to_text" element={<SpeechToText />} />
            <Route path="5_speech_to_text_chat" element={<SpeechToTextChat />} />
            <Route path="6_speech_to_text_chat_voice" element={<SpeechToTextChatVoice />} />
          </Route>

          {/* Chapter 6 */}
          <Route path="ch6">
            <Route index element={<Chapter6Index />} />
            <Route path="desc" element={<ChapterDesc />} />
            <Route path="1_date_time" element={<DateTime />} />
            <Route path="2_customer_inquiry" element={<CustomerInquiry />} />
            <Route path="3_recommendation" element={<Recommendation />} />
            <Route path="4_access_system" element={<AccessSystem />} />
          </Route>

          {/* Chapter 7 */}
          <Route path="ch7">
            <Route index element={<Chapter7Index />} />
            <Route path="desc" element={<ChapterDesc />} />
            <Route path="1_text_embedding" element={<TextEmbedding />} />
            <Route path="2_hotel_embedding" element={<HotelEmbedding />} />
            <Route path="3_chat_pgvector" element={<ChatPgvector />} />
            <Route path="4_chat_jdbc" element={<ChatJdbc />} />
          </Route>

          {/* Chapter 8 */}
          <Route path="ch8">
            <Route index element={<Chapter8Index />} />
            <Route path="desc" element={<ChapterDesc />} />
            <Route path="1_etl_pipeline" element={<EtlPipeline />} />
            <Route path="2_rag_chat" element={<RagChat />} />
            <Route path="3_rag_chat_prompt_template" element={<RagChatPromptTemplate />} />
            <Route path="4_raa_rag_chat" element={<RaaRagChat />} />
            <Route path="5_cqt_rag_chat" element={<CqtRagChat />} />
            <Route path="6_rqt_rag_chat" element={<RqtRagChat />} />
            <Route path="7_tqt_rag_chat" element={<TqtRagChat />} />
            <Route path="8_mqe_rag_chat" element={<MqeRagChat />} />
          </Route>

          {/* Chapter 9 */}
          <Route path="ch9">
            <Route index element={<Chapter9Index />} />
            <Route path="desc" element={<ChapterDesc />} />
            <Route path="1_mcp_webmvc_chat" element={<McpWebmvcChat />} />
            <Route path="2_mcp_webmvc_chat_stream" element={<McpWebmvcChatStream />} />
          </Route>

          {/* Setting Pages */}
          <Route path="setting/intellij" element={<Intellij />} />
          <Route path="setting/springai" element={<SpringAI />} />
          <Route path="setting/postgresql" element={<PostgreSQL />} />
          <Route path="setting/openai" element={<OpenAI />} />
          <Route path="setting/gemini" element={<Gemini />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
