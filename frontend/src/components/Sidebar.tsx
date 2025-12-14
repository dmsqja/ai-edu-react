import { Link } from 'react-router-dom';

interface SidebarProps {
  currentPage: string | null;
}

const Sidebar = ({ currentPage }: SidebarProps) => {
  // Main menu (when on main page or special pages)
  if (currentPage === 'main' || currentPage === 'postgresql' || currentPage === 'openai' || 
      currentPage === 'gemini' || currentPage === 'springai' || currentPage === null) {
    return (
      <ul className="nav nav-pills flex-column" style={{ fontWeight: 'bold' }}>
        <li className="nav-item">
          <Link to="/ch1" className="btn btn-secondary btn-block mb-2" role="button" 
                style={{ fontWeight: 'bold', textAlign: 'left' }}>
            1. Chat Completion
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/ch2" className="btn btn-secondary btn-block mb-2" role="button" 
                style={{ fontWeight: 'bold', textAlign: 'left' }}>
            2. Prompt Template
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/ch3" className="btn btn-secondary btn-block mb-2" role="button" 
                style={{ fontWeight: 'bold', textAlign: 'left' }}>
            3. Advisors API
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/ch4" className="btn btn-secondary btn-block mb-2" role="button" 
                style={{ fontWeight: 'bold', textAlign: 'left' }}>
            4. Images and Vision
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/ch5" className="btn btn-secondary btn-block mb-2" role="button" 
                style={{ fontWeight: 'bold', textAlign: 'left' }}>
            5. Audio and Speech
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/ch6" className="btn btn-secondary btn-block mb-2" role="button" 
                style={{ fontWeight: 'bold', textAlign: 'left' }}>
            6. Tool Calling
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/ch7" className="btn btn-secondary btn-block mb-2" role="button" 
                style={{ fontWeight: 'bold', textAlign: 'left' }}>
            7. Embedding Model
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/ch8" className="btn btn-secondary btn-block mb-2" role="button" 
                style={{ fontWeight: 'bold', textAlign: 'left' }}>
            8. RAG
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/ch9" className="btn btn-secondary btn-block mb-2" role="button" 
                style={{ fontWeight: 'bold', textAlign: 'left' }}>
            9. MCP
          </Link>
        </li>
      </ul>
    );
  }

  // Chapter 1 menu
  if (currentPage === 'ch1') {
    return (
      <ul className="nav nav-pills flex-column" style={{ fontWeight: 'bold' }}>
        <li className="nav-item">
          <Link to="/ch1/desc" className="btn btn-warning btn-block mb-2" role="button" 
                style={{ fontWeight: 'bold', textAlign: 'left', fontSize: 'small' }}>
            Chapter1. Screen Description
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/ch1/1_chat" className="btn btn-primary btn-block mb-2" role="button" 
                style={{ fontWeight: 'bold', textAlign: 'left', fontSize: 'small' }}>
            1. Chat (Zero-Shot Prompting)
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/ch1/2_chat_stream" className="btn btn-primary btn-block mb-2" role="button" 
                style={{ fontWeight: 'bold', textAlign: 'left', fontSize: 'small' }}>
            2. Chat Stream
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/ch1/3_chat_few_shot" className="btn btn-primary btn-block mb-2" role="button" 
                style={{ fontWeight: 'bold', textAlign: 'left', fontSize: 'small' }}>
            3. Chat (Few-Shot Prompting)
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/ch1/4_chat_chain_of_thought" className="btn btn-primary btn-block mb-2" role="button" 
                style={{ fontWeight: 'bold', textAlign: 'left', fontSize: 'small' }}>
            4. Chat (Chain-of-Thought Prompting)
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/ch1/5_chat_memory" className="btn btn-primary btn-block mb-2" role="button" 
                style={{ fontWeight: 'bold', textAlign: 'left', fontSize: 'small' }}>
            5. Chat Memory
          </Link>
        </li>
      </ul>
    );
  }

  // Chapter 2 menu
  if (currentPage === 'ch2') {
    return (
      <ul className="nav nav-pills flex-column" style={{ fontWeight: 'bold' }}>
        <li className="nav-item">
          <Link to="/ch2/desc" className="btn btn-warning btn-block mb-2" role="button" 
                style={{ fontWeight: 'bold', textAlign: 'left', fontSize: 'small' }}>
            Chapter2. Screen Description
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/ch2/1_prompt_template" className="btn btn-primary btn-block mb-2" role="button" 
                style={{ fontWeight: 'bold', textAlign: 'left', fontSize: 'small' }}>
            1. Prompt Template
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/ch2/2_list_output" className="btn btn-primary btn-block mb-2" role="button" 
                style={{ fontWeight: 'bold', textAlign: 'left', fontSize: 'small' }}>
            2. ListOutputConverter
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/ch2/3_map_output" className="btn btn-primary btn-block mb-2" role="button" 
                style={{ fontWeight: 'bold', textAlign: 'left', fontSize: 'small' }}>
            3. MapOutputConverter
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/ch2/4_bean_output" className="btn btn-primary btn-block mb-2" role="button" 
                style={{ fontWeight: 'bold', textAlign: 'left', fontSize: 'small' }}>
            4. BeanOutputConverter
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/ch2/5_parameterized_type_reference" className="btn btn-primary btn-block mb-2" role="button" 
                style={{ fontWeight: 'bold', textAlign: 'left', fontSize: 'small' }}>
            5. ParameterizedType
          </Link>
        </li>
      </ul>
    );
  }

  // Chapter 3 menu
  if (currentPage === 'ch3') {
    return (
      <ul className="nav nav-pills flex-column" style={{ fontWeight: 'bold' }}>
        <li className="nav-item">
          <Link to="/ch3/desc" className="btn btn-warning btn-block mb-2" role="button" 
                style={{ fontWeight: 'bold', textAlign: 'left', fontSize: 'small' }}>
            Chapter3. Screen Description
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/ch3/1_advisor" className="btn btn-primary btn-block mb-2" role="button" 
                style={{ fontWeight: 'bold', textAlign: 'left', fontSize: 'small' }}>
            1. Advisor
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/ch3/2_advisor_stream" className="btn btn-primary btn-block mb-2" role="button" 
                style={{ fontWeight: 'bold', textAlign: 'left', fontSize: 'small' }}>
            2. Advisor: Stream
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/ch3/3_recursive_advisors" className="btn btn-primary btn-block mb-2" role="button" 
                style={{ fontWeight: 'bold', textAlign: 'left', fontSize: 'small' }}>
            3. Recursive Advisors
          </Link>
        </li>
      </ul>
    );
  }

  // Chapter 4 menu
  if (currentPage === 'ch4') {
    return (
      <ul className="nav nav-pills flex-column" style={{ fontWeight: 'bold' }}>
        <li className="nav-item">
          <Link to="/ch4/desc" className="btn btn-warning btn-block mb-2" role="button" 
                style={{ fontWeight: 'bold', textAlign: 'left', fontSize: 'small' }}>
            Chapter4. Screen Description
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/ch4/1_generate_image_url" className="btn btn-primary btn-block mb-2" role="button" 
                style={{ fontWeight: 'bold', textAlign: 'left', fontSize: 'small' }}>
            1. Generate Image for URL
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/ch4/2_generate_image" className="btn btn-primary btn-block mb-2" role="button" 
                style={{ fontWeight: 'bold', textAlign: 'left', fontSize: 'small' }}>
            2. Generate Image
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/ch4/3_image_analysis" className="btn btn-primary btn-block mb-2" role="button" 
                style={{ fontWeight: 'bold', textAlign: 'left', fontSize: 'small' }}>
            3. Image Analysis
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/ch4/4_video_analysis" className="btn btn-primary btn-block mb-2" role="button" 
                style={{ fontWeight: 'bold', textAlign: 'left', fontSize: 'small' }}>
            4. Video Analysis
          </Link>
        </li>
      </ul>
    );
  }

  // Chapter 5 menu
  if (currentPage === 'ch5') {
    return (
      <ul className="nav nav-pills flex-column" style={{ fontWeight: 'bold' }}>
        <li className="nav-item">
          <Link to="/ch5/desc" className="btn btn-warning btn-block mb-2" role="button" 
                style={{ fontWeight: 'bold', textAlign: 'left', fontSize: 'small' }}>
            Chapter5. Screen Description
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/ch5/1_text_to_speech" className="btn btn-primary btn-block mb-2" role="button" 
                style={{ fontWeight: 'bold', textAlign: 'left', fontSize: 'small' }}>
            1. Text to Speech
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/ch5/2_text_to_speech_chat" className="btn btn-primary btn-block mb-2" role="button" 
                style={{ fontWeight: 'bold', textAlign: 'left', fontSize: 'small' }}>
            2. Text to Speech: Chat
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/ch5/3_text_to_speech_chat_stream" className="btn btn-primary btn-block mb-2" role="button" 
                style={{ fontWeight: 'bold', textAlign: 'left', fontSize: 'small' }}>
            3. Text to Speech: Chat Stream
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/ch5/4_speech_to_text" className="btn btn-primary btn-block mb-2" role="button" 
                style={{ fontWeight: 'bold', textAlign: 'left', fontSize: 'small' }}>
            4. Speech to Text
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/ch5/5_speech_to_text_chat" className="btn btn-primary btn-block mb-2" role="button" 
                style={{ fontWeight: 'bold', textAlign: 'left', fontSize: 'small' }}>
            5. Speech to Text: Chat
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/ch5/6_speech_to_text_chat_voice" className="btn btn-primary btn-block mb-2" role="button" 
                style={{ fontWeight: 'bold', textAlign: 'left', fontSize: 'small' }}>
            6. Speech to Text: Chat Voice
          </Link>
        </li>
      </ul>
    );
  }

  // Chapter 6 menu
  if (currentPage === 'ch6') {
    return (
      <ul className="nav nav-pills flex-column" style={{ fontWeight: 'bold' }}>
        <li className="nav-item">
          <Link to="/ch6/desc" className="btn btn-warning btn-block mb-2" role="button" 
                style={{ fontWeight: 'bold', textAlign: 'left', fontSize: 'small' }}>
            Chapter6. Screen Description
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/ch6/1_date_time" className="btn btn-primary btn-block mb-2" role="button" 
                style={{ fontWeight: 'bold', textAlign: 'left', fontSize: 'small' }}>
            1. Date Time
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/ch6/2_customer_inquiry" className="btn btn-primary btn-block mb-2" role="button" 
                style={{ fontWeight: 'bold', textAlign: 'left', fontSize: 'small' }}>
            2. Customer Inquiry
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/ch6/3_recommendation" className="btn btn-primary btn-block mb-2" role="button" 
                style={{ fontWeight: 'bold', textAlign: 'left', fontSize: 'small' }}>
            3. Recommendation
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/ch6/4_access_system" className="btn btn-primary btn-block mb-2" role="button" 
                style={{ fontWeight: 'bold', textAlign: 'left', fontSize: 'small' }}>
            4. Access System
          </Link>
        </li>
      </ul>
    );
  }

  // Chapter 7 menu
  if (currentPage === 'ch7') {
    return (
      <ul className="nav nav-pills flex-column" style={{ fontWeight: 'bold' }}>
        <li className="nav-item">
          <Link to="/ch7/desc" className="btn btn-warning btn-block mb-2" role="button" 
                style={{ fontWeight: 'bold', textAlign: 'left', fontSize: 'small' }}>
            Chapter7. Screen Description
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/ch7/1_text_embedding" className="btn btn-primary btn-block mb-2" role="button" 
                style={{ fontWeight: 'bold', textAlign: 'left', fontSize: 'small' }}>
            1. Text Embedding
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/ch7/2_hotel_embedding" className="btn btn-primary btn-block mb-2" role="button" 
                style={{ fontWeight: 'bold', textAlign: 'left', fontSize: 'small' }}>
            2. Hotel Data Embedding
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/ch7/3_chat_pgvector" className="btn btn-primary btn-block mb-2" role="button" 
                style={{ fontWeight: 'bold', textAlign: 'left', fontSize: 'small' }}>
            3. Chat Memory pgvector
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/ch7/4_chat_jdbc" className="btn btn-primary btn-block mb-2" role="button" 
                style={{ fontWeight: 'bold', textAlign: 'left', fontSize: 'small' }}>
            4. Chat Memory JDBC
          </Link>
        </li>
      </ul>
    );
  }

  // Chapter 8 menu
  if (currentPage === 'ch8') {
    return (
      <ul className="nav nav-pills flex-column" style={{ fontWeight: 'bold' }}>
        <li className="nav-item">
          <Link to="/ch8/desc" className="btn btn-warning btn-block mb-2" role="button" 
                style={{ fontWeight: 'bold', textAlign: 'left', fontSize: 'small' }}>
            Chapter8. Screen Description
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/ch8/1_etl_pipeline" className="btn btn-primary btn-block mb-2" role="button" 
                style={{ fontWeight: 'bold', textAlign: 'left', fontSize: 'small' }}>
            1. ETL Pipeline
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/ch8/2_rag_chat" className="btn btn-primary btn-block mb-2" role="button" 
                style={{ fontWeight: 'bold', textAlign: 'left', fontSize: 'small' }}>
            2. RAG Chat
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/ch8/3_rag_chat_prompt_template" className="btn btn-primary btn-block mb-2" role="button" 
                style={{ fontWeight: 'bold', textAlign: 'left', fontSize: 'small' }}>
            3. RAG Chat: template
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/ch8/4_raa_rag_chat" className="btn btn-primary btn-block mb-2" role="button" 
                style={{ fontWeight: 'bold', textAlign: 'left', fontSize: 'small' }}>
            4. Retrieval Augmentation Advisor
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/ch8/5_cqt_rag_chat" className="btn btn-primary btn-block mb-2" role="button" 
                style={{ fontWeight: 'bold', textAlign: 'left', fontSize: 'small' }}>
            5. Compression Query Transformer
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/ch8/6_rqt_rag_chat" className="btn btn-primary btn-block mb-2" role="button" 
                style={{ fontWeight: 'bold', textAlign: 'left', fontSize: 'small' }}>
            6. Rewrite Query Transformer
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/ch8/7_tqt_rag_chat" className="btn btn-primary btn-block mb-2" role="button" 
                style={{ fontWeight: 'bold', textAlign: 'left', fontSize: 'small' }}>
            7. Translation Query Transformer
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/ch8/8_mqe_rag_chat" className="btn btn-primary btn-block mb-2" role="button" 
                style={{ fontWeight: 'bold', textAlign: 'left', fontSize: 'small' }}>
            8. Multi Query Expander
          </Link>
        </li>
      </ul>
    );
  }

  // Chapter 9 menu
  if (currentPage === 'ch9') {
    return (
      <ul className="nav nav-pills flex-column" style={{ fontWeight: 'bold' }}>
        <li className="nav-item">
          <Link to="/ch9/desc" className="btn btn-warning btn-block mb-2" role="button" 
                style={{ fontWeight: 'bold', textAlign: 'left', fontSize: 'small' }}>
            Chapter9. Screen Description
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/ch9/1_mcp_webmvc_chat" className="btn btn-primary btn-block mb-2" role="button" 
                style={{ fontWeight: 'bold', textAlign: 'left', fontSize: 'small' }}>
            1. MCP Chat
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/ch9/2_mcp_webmvc_chat_stream" className="btn btn-primary btn-block mb-2" role="button" 
                style={{ fontWeight: 'bold', textAlign: 'left', fontSize: 'small' }}>
            2. MCP Chat Stream
          </Link>
        </li>
      </ul>
    );
  }

  return null;
};

export default Sidebar;

