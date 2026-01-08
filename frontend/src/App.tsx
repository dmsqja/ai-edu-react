import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import Layout from './components/Layout';
import Home from './pages/Home';
import ChapterDesc from './pages/ChapterDesc';
// Chapter Index Pages (즉시 로드 - 챕터 메인 페이지)
import Chapter1Index from './pages/ch1';
import Chapter2Index from './pages/ch2';
import Chapter3Index from './pages/ch3';
import Chapter4Index from './pages/ch4';
import Chapter5Index from './pages/ch5';
import Chapter6Index from './pages/ch6';
import Chapter7Index from './pages/ch7';
import Chapter8Index from './pages/ch8';
import Chapter9Index from './pages/ch9';

// Chapter 1 - Lazy Loading
const Chat = lazy(() => import('./pages/ch1/Chat'));
const ChatStream = lazy(() => import('./pages/ch1/ChatStream'));
const ChatFewShot = lazy(() => import('./pages/ch1/ChatFewShot'));
const ChatChainOfThought = lazy(() => import('./pages/ch1/ChatChainOfThought'));
const ChatMemory = lazy(() => import('./pages/ch1/ChatMemory'));

// Chapter 2 - Lazy Loading
const PromptTemplate = lazy(() => import('./pages/ch2/PromptTemplate'));
const ListOutput = lazy(() => import('./pages/ch2/ListOutput'));
const MapOutput = lazy(() => import('./pages/ch2/MapOutput'));
const BeanOutput = lazy(() => import('./pages/ch2/BeanOutput'));
const ParameterizedTypeReference = lazy(() => import('./pages/ch2/ParameterizedTypeReference'));

// Chapter 3 - Lazy Loading
const Advisor = lazy(() => import('./pages/ch3/Advisor'));
const AdvisorStream = lazy(() => import('./pages/ch3/AdvisorStream'));
const RecursiveAdvisors = lazy(() => import('./pages/ch3/RecursiveAdvisors'));

// Chapter 4 - Lazy Loading
const GenerateImageUrl = lazy(() => import('./pages/ch4/GenerateImageUrl'));
const GenerateImage = lazy(() => import('./pages/ch4/GenerateImage'));
const ImageAnalysis = lazy(() => import('./pages/ch4/ImageAnalysis'));
const VideoAnalysis = lazy(() => import('./pages/ch4/VideoAnalysis'));

// Chapter 5 - Lazy Loading
const TextToSpeech = lazy(() => import('./pages/ch5/TextToSpeech'));
const TextToSpeechChat = lazy(() => import('./pages/ch5/TextToSpeechChat'));
const TextToSpeechChatStream = lazy(() => import('./pages/ch5/TextToSpeechChatStream'));
const SpeechToText = lazy(() => import('./pages/ch5/SpeechToText'));
const SpeechToTextChat = lazy(() => import('./pages/ch5/SpeechToTextChat'));
const SpeechToTextChatVoice = lazy(() => import('./pages/ch5/SpeechToTextChatVoice'));

// Chapter 6 - Lazy Loading
const DateTime = lazy(() => import('./pages/ch6/DateTime'));
const CustomerInquiry = lazy(() => import('./pages/ch6/CustomerInquiry'));
const Recommendation = lazy(() => import('./pages/ch6/Recommendation'));
const AccessSystem = lazy(() => import('./pages/ch6/AccessSystem'));

// Chapter 7 - Lazy Loading
const TextEmbedding = lazy(() => import('./pages/ch7/TextEmbedding'));
const HotelEmbedding = lazy(() => import('./pages/ch7/HotelEmbedding'));
const ChatPgvector = lazy(() => import('./pages/ch7/ChatPgvector'));
const ChatJdbc = lazy(() => import('./pages/ch7/ChatJdbc'));

// Chapter 8 - Lazy Loading
const EtlPipeline = lazy(() => import('./pages/ch8/EtlPipeline'));
const RagChat = lazy(() => import('./pages/ch8/RagChat'));
const RagChatPromptTemplate = lazy(() => import('./pages/ch8/RagChatPromptTemplate'));
const RaaRagChat = lazy(() => import('./pages/ch8/RaaRagChat'));
const CqtRagChat = lazy(() => import('./pages/ch8/CqtRagChat'));
const RqtRagChat = lazy(() => import('./pages/ch8/RqtRagChat'));
const TqtRagChat = lazy(() => import('./pages/ch8/TqtRagChat'));
const MqeRagChat = lazy(() => import('./pages/ch8/MqeRagChat'));

// Chapter 9 - Lazy Loading
const McpWebmvcChat = lazy(() => import('./pages/ch9/McpWebmvcChat'));
const McpWebmvcChatStream = lazy(() => import('./pages/ch9/McpWebmvcChatStream'));

// Setting Pages - Lazy Loading
const Intellij = lazy(() => import('./pages/setting/Intellij'));
const SpringAI = lazy(() => import('./pages/setting/SpringAI'));
const PostgreSQL = lazy(() => import('./pages/setting/PostgreSQL'));
const OpenAI = lazy(() => import('./pages/setting/OpenAI'));
const Gemini = lazy(() => import('./pages/setting/Gemini'));

import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={
        <div className="container text-center mt-5">
          <div className="spinner-border text-primary" role="status">
            <span className="sr-only">Loading...</span>
          </div>
          <h3 className="mt-3">Loading...</h3>
        </div>
      }>
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
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
