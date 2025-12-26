import React from 'react';
import { useParams } from 'react-router-dom';

const ChapterDesc = () => {
  const { chapterId } = useParams<{ chapterId: string }>();

  // 각 챕터별 설명 데이터 (edu의 desc.html 참고)
  const chapterData: Record<string, { title: string; items: { name: string; description: string | React.JSX.Element }[] }> = {
    ch1: {
      title: '1. Chat Completion',
      items: [
        {
          name: '1. Chat (Zero-Shot Prompting)',
          description: 'Zero-Shot Prompting은 사용자가 전달한 Prompt만을 기반으로 LLM이 응답을 생성하는 방식입니다. 사전 예시(Example)나 추가 힌트를 제공하지 않기 때문에 모델은 내장된 사전 학습 지식만으로 문제를 해석하고 처리합니다.',
        },
        {
          name: '2. Chat Stream',
          description: '사용자 Prompt를 모델에 전달한 뒤, 응답을 한 번에 반환하는 것이 아니라 Reactive Streams(Project Reactor) 기반으로 스트리밍하는 방식입니다.',
        },
        {
          name: '3. Chat (Few-Shot Prompting)',
          description: '모델이 특정 작업을 더 정확하게 수행하도록 여러 개의 예시(Input/Output Pair)를 Prompt에 포함하는 방식입니다.',
        },
        {
          name: '4. Chat (Chain-of-Thought Prompting)',
          description: 'LLM이 문제를 해결하는 과정에서 중간 추론 과정을 스스로 단계적으로 전개하도록 유도하는 Prompting 방식입니다.',
        },
        {
          name: '5. Chat Memory',
          description: 'LLM과의 대화 맥락을 메모리에 저장하고, 후속 요청 시 이를 다시 불러와 지속적이고 자연스러운 콘텍스트 기반 대화를 가능하게 하는 기능입니다.',
        },
      ],
    },
    ch2: {
      title: '2. Prompt Template & Structured Output Converter',
      items: [
        {
          name: '1. Prompt Template',
          description: 'Prompt Template은 사용자가 입력한 자연어 문장, 간단한 명령, 파라미터 등을 기반으로 구조화된 프롬프트(Prompt String) 를 동적으로 생성하는 기능입니다. Spring AI는 템플릿 변수 바인딩을 통해 안정적이고 재사용 가능한 Prompt를 만들 수 있도록 지원합니다.',
        },
        {
          name: '2. ListOutputConverter',
          description: 'LLM이 "쉼표로 구분된 리스트" 형태의 문자열을 반환할 때, 이를 Java의 List<String> 또는 기타 List 타입으로 파싱하는 Output Converter입니다.',
        },
        {
          name: '3. MapOutputConverter',
          description: 'LLM이 Key–Value 기반의 구조적 응답을 하도록 유도하고 JSON-like Key/Value 응답을 파싱, 해당 응답을 Java의 Map<String, Object> 형태로 변환하는 Converter입니다.',
        },
        {
          name: '4. BeanOutputConverter',
          description: '지정된 Java 클래스(POJO)를 기반으로 LLM이 JSON 응답을 생성하도록 하고, 그 JSON을 지정된 Java Bean 객체로 변환하는 Converter입니다.',
        },
        {
          name: '5. ParameterizedType',
          description: 'BeanOutputConverter보다 더 복잡하거나 제네릭 기반의 구조적 타입을 변환할 때 사용하는 방식입니다. 예를 들어 List<UserInfo>, Map<String, List<Item>> 같은 복잡한 타입을 안전하게 파싱할 수 있습니다.',
        },
      ],
    },
    ch3: {
      title: '3. Advisor API',
      items: [
        {
          name: '1. Advisor',
          description: (
            <>
              다양한 Advisor를 이용하여 LLM과 소통 합니다.
              <ul>
                <li>SimpleLoggerAdvisor: 개발자 console에 log를출력</li>
                <li>SimpleLoggerAdvisorLow: 특정 파일에 질의 내용과 응답 내용만 log로 저장</li>
                <li>SimpleLoggerAdvisorHigh: 특정 파일에 LLM과 연동 될때 사용되는 메시지를 log로 저장</li>
                <li>SafeGuardAdvisor: 특정 문자가 입력 되면 진행을 중지</li>
                <li>CheckCharSizeAdvisor: 입렫 되는 단어의 크기에 따라 진행을 중지</li>
              </ul>
            </>
          ),
        },
        {
          name: '2. Advisor: Stream',
          description: '다양한 Advisor를 Reactive Streams을 이용하여 LLM과 소통 합니다.',
        },
        {
          name: '3. Recursive Advisors',
          description: 'Recursive Advisor는 특정 조건이 충족될 때까지 LLM을 재귀적 또는 반복적으로 호출하여 추가적인 후처리, 품질 향상, 검증 루프 등을 구성할 수 있는 고급 제어 메커니즘입니다.',
        },
      ],
    },
    ch4: {
      title: '4. Multimodality API - Generating with Pictures',
      items: [
        {
          name: '1. Generate Image for URL',
          description: '사용자가 입력한 Prompt를 기반으로 이미지 생성 모델을 호출하여, 생성된 결과물을 URL 형태로 반환받는 방식입니다.',
        },
        {
          name: '2. Generate Image',
          description: 'Prompt 기반 이미지 생성은 동일하지만, 생성된 이미지를 Binary 파일(Base64 또는 Blob) 로 직접 받아서 화면에 렌더링하는 방식입니다.',
        },
        {
          name: '3. Image Analysis',
          description: '사용자가 업로드하거나 선택한 이미지와 함께 Prompt를 LLM 또는 Vision Model에 전달하여 이미지의 내용, 상황, 요소 분석 등 다양한 비전 기반 인식 작업을 수행합니다.',
        },
        {
          name: '4. Video Analysis',
          description: '카메라 또는 동영상 스트림에서 캡처한 이미지를 LLM에 전송하여 영상의 특정 프레임에 대한 분석을 수행하는 방식입니다.',
        },
      ],
    },
    ch5: {
      title: '5. Multimodality API - Audio and Speech',
      items: [
        {
          name: '1. Text to Speech',
          description: '사용자가 입력한 텍스트를 LLM 기반 음성 합성 모델로 전달하여 해당 문장을 자연스러운 음성 데이터(Audio) 로 변환해 반환하는 기능입니다.',
        },
        {
          name: '2. Text to Speech: Chat',
          description: '사용자 입력 텍스트를 먼저 LLM에 전달하여 답변을 생성하고, 생성된 텍스트 응답을 다시 음성으로 변환하여 사용자에게 제공하는 방식입니다.',
        },
        {
          name: '3. Text to Speech: Chat Stream',
          description: '사용자 텍스트를 LLM에 전달하여 생성된 응답을 실시간 스트리밍(Streaming) 방식으로 음성 변환하여 전달하는 기능입니다.',
        },
        {
          name: '4. Speech to Text',
          description: '사용자가 말한 음성 입력(Audio)을 텍스트로 변환하여 Prompt 형태로 시스템에 전달하는 기능입니다.',
        },
        {
          name: '5. Speech to Text: Chat',
          description: (
            <>
              사용자의 음성을 텍스트로 변환한 뒤, 그 텍스트를 LLM에 전달해 생성된 답변을 다시 사용자에게 제공하는 방식입니다.
              <br />
              프로세스 흐름
              <br />
              Speech → STT → Text
              <br />
              Text → LLM → Text 응답
            </>
          ),
        },
        {
          name: '6. Speech to Text: Chat Voice',
          description: (
            <>
              사용자 음성을 텍스트로 변환한 후 LLM에 전달하여 답변을 생성하고, 그 응답을 텍스트 + 음성 두 가지 형태로 모두 제공하는 방식입니다.
              <br />
              프로세스 흐름
              <br />
              Speech → STT → Text
              <br />
              Text → LLM → Text 응답
              <br />
              Text 응답 → TTS → Audio 응답
            </>
          ),
        },
      ],
    },
    ch6: {
      title: '6. Tool Calling',
      items: [
        {
          name: '1. Date Time',
          description: (
            <>
              다양한 Tools를 이용하여 LLM과 소통 합니다.
              <ul>
                <li>DateTimeTools: 현재 시간 데이터를 만들어 줍니다.</li>
                <li>CurrentWeatherTools: 현재 날씨 데이터를 경도와 위도를 기반으로 만들어 줍니다.</li>
                <li>ForecastWeatherTools: 앞으로 5일간의 날씨 예보를 정보를 경도와 위도를 기반으로 만들어 줍니다.</li>
              </ul>
            </>
          ),
        },
        {
          name: '2. Customer Inquiry',
          description: (
            <>
              고객 정보를 Tool을 이용해서 LLM과 연동 하여 조회 합니다. ToolCallResultConverter
              <ul>
                <li>CustomerTools: 고객정보를 Customer 객체 타입을 기반으로 JSON 형식으로 리턴 합니다.</li>
                <li>CustomerStringTools: 고객정보를 Customer 객체 타입을 기반으로 String 형식으로 리턴 합니다.</li>
                <li>
                  CustomerToolCallResultConverter: Tool에서 만들어진 데이터를 JSON 또는 String으로 변환해 줍니다.
                </li>
              </ul>
            </>
          ),
        },
        {
          name: '3. Recommendation',
          description: 'ToolContext를 이용하여 특정 ID를 기반으로 고객의 구매 목록을 기반으로 제품에 대한 추천 시스템 입니다.',
        },
        {
          name: '4. Access System',
          description: '카메라를 통해 사원증을 인식 하여 사원증에 있는 ID Number를 기반으로 출업 허가 하는 시스템 입니다.',
        },
      ],
    },
    ch7: {
      title: '7. Embedding Model',
      items: [
        {
          name: '1. Text Embedding',
          description: (
            <>
              사전에 준비된 텍스트 데이터를 Embedding 모델을 통해 고차원 벡터(Vector Representation) 로 변환하고,
              <br />
              변환된 벡터를 Vector Store에 저장한 뒤,
              <br />
              사용자의 질문을 Embedding하여 유사도 검색(Semantic Search)으로 관련 문서를 조회하는 방식입니다.
            </>
          ),
        },
        {
          name: '2. Hotel Data Embedding',
          description: (
            <>
              호텔 이름, 위치, 편의시설, 가격, 리뷰 등 호텔 관련 멀티필드 데이터를 Embedding하여
              <br />
              Vector Store에 저장한 뒤,
              <br />
              사용자의 검색 요구(예: "호텔 입실 시간은")에 대해 의미 기반 검색을 수행합니다.
            </>
          ),
        },
        {
          name: '3. Chat Memory PGvector',
          description: (
            <>
              사용자와 LLM의 대화 내역을 실시간 Embedding하여 PGVector(PostgreSQL Vector Extension)에 저장하고,
              <br />
              후속 대화에서 유사한 이전 대화를 검색해 콘텍스트로 활용하는 방식입니다.
            </>
          ),
        },
        {
          name: '4. Chat Memory JDBC',
          description: (
            <>
              사용자와 LLM의 대화 흐름을 관계형 데이터베이스(JDBC) 기반으로 저장하는 방식입니다.
              <br />
              Embedding 없이 텍스트 그대로 저장하여 대화 이력 관리가 필요한 경우에 사용합니다.
            </>
          ),
        },
      ],
    },
    ch8: {
      title: '8. RAG(Retrieval-Augmented Generation)',
      items: [
        {
          name: '1. ETL Pipeline',
          description: (
            <>
              사용자가 업로드한 파일(TXT, PDF, DOC 등)을 처리하여 Vector Store에 저장하거나 삭제하는 기능입니다.
              <br />
              각 파일의 타입을 지정하여 데이터 구분 및 관리가 가능합니다.
            </>
          ),
        },
        {
          name: '2. RAG Chat',
          description: (
            <>
              Vector Store에 저장된 데이터 기반으로 LLM과 대화하며,
              <br />
              QuestionAnswerAdvisor를 활용하여 RAG(Retrieval-Augmented Generation) 기반 질문 응답을 수행합니다.
            </>
          ),
        },
        {
          name: '3. RAG Chat: template',
          description: (
            <>
              RAG Chat 기능에 PromptTemplate을 적용하여,
              <br />
              검색된 문서를 기반으로 LLM이 생성한 답변을 지정된 형식으로 가공하여 전달합니다.
            </>
          ),
        },
        {
          name: '4. Retrieval Augmentation Advisor',
          description: (
            <>
              RetrievalAugmentationAdvisor를 사용하여,
              <br />
              Vector Store에 정확한 검색 결과가 없어도 LLM이 유연하게 대화를 이어갈 수 있도록 지원합니다.
            </>
          ),
        },
        {
          name: '5. Compression Query Transformer',
          description: (
            <>
              CompressionQueryTransformer는 대화 기록과 후속 질문을 압축하여
              <br />
              대화 핵심을 포착한 독립적인 쿼리로 재구성한 후 LLM과 대화할 수 있도록 합니다.
            </>
          ),
        },
        {
          name: '6. Rewrite Query Transformer',
          description: (
            <>
              RewriteQueryTransformer는 사용자의 질문이 장황하거나 모호할 때,
              <br />
              질문을 명확하게 재작성하여 LLM이 정확히 이해하고 응답할 수 있도록 합니다.
            </>
          ),
        },
        {
          name: '7. Translation Query Transformer',
          description:
            'TranslationQueryTransformer는 사용자의 질문을 특정 언어로 번역하여(입력 언어 → 지정 언어로 자동 변환) LLM과 다국어 대화를 가능하게 하는 기능입니다.',
        },
        {
          name: '8. Multi Query Expander',
          description: (
            <>
              MultiQueryExpander는 사용자의 질문을 다양한 변형(Query Expansion)으로 만들어
              <br />
              LLM과 대화할 수 있도록 확장하는 기능입니다.
            </>
          ),
        },
      ],
    },
    ch9: {
      title: '9. MCP(Model Context Protocol)',
      items: [
        {
          name: '1. MVC Chat',
          description: (
            <>
              사용자의 질문을 다양한 MCP(Multi-Channel Processing) 서버와 연동하여 LLM과 대화할 수 있도록 지원하는 기능입니다.
              <br />
              기술 특징
              <br />
              사용자 요청 → MCP 서버 → LLM 전달 → 응답 수신
              <br />
              여러 채널/서버와 연동 가능 → 분산 처리 환경에 적합
              <br />
              Spring MVC 기반 Web/REST 컨트롤러와 자연스럽게 통합
              <br />
              대규모 멀티채널 챗봇, 고객지원 시스템에 활용
            </>
          ),
        },
        {
          name: '2. MVC Chat Stream',
          description: 'Moe',
        },
        {
          name: '3. Semi Project',
          description: 'Dooley',
        },
      ],
    },
  };

  const data = chapterData[chapterId || ''] || {
    title: `Chapter ${chapterId}`,
    items: [],
  };

  return (
    <>
      <h4>{data.title}</h4>
      <p>The .table-bordered class adds borders on all sides of the table and the cells:</p>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>File Name</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          {data.items.map((item, index) => (
            <tr key={index}>
              <td>{item.name}</td>
              <td>{item.description}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default ChapterDesc;
