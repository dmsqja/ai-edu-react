import './Chapter.css';

const Chapter2 = () => {
  return (
    <div className="chapter">
      <div className="chapter-header">
        <span className="chapter-badge">Chapter 2</span>
        <h1>AI 기초와 채팅 (AI Basics and Chat)</h1>
      </div>
      
      <section className="chapter-section">
        <h2>🎯 학습 목표</h2>
        <ul>
          <li>대화형 AI의 작동 원리 이해하기</li>
          <li>ChatGPT 등 채팅 AI 활용법 익히기</li>
          <li>효과적인 질문 방법 배우기</li>
          <li>AI와의 대화에서 주의할 점 알아보기</li>
        </ul>
      </section>

      <section className="chapter-section">
        <h2>💬 대화형 AI란?</h2>
        <p>
          대화형 AI(Conversational AI)는 자연어로 사용자와 대화할 수 있는 인공지능 시스템입니다.
          ChatGPT, Claude, Gemini 등이 대표적인 예시입니다.
        </p>
        <div className="info-box">
          <h3>대화형 AI의 특징</h3>
          <ul>
            <li><strong>자연스러운 대화:</strong> 인간과 유사한 방식으로 소통</li>
            <li><strong>문맥 이해:</strong> 이전 대화 내용을 기억하고 활용</li>
            <li><strong>다양한 작업:</strong> 질문 응답, 글쓰기, 번역, 코딩 등</li>
            <li><strong>학습 능력:</strong> 대규모 데이터로 학습된 지식 활용</li>
          </ul>
        </div>
      </section>

      <section className="chapter-section">
        <h2>🔧 작동 원리</h2>
        <div className="process-flow">
          <div className="process-step">
            <div className="step-number">1</div>
            <h4>입력 처리</h4>
            <p>사용자의 텍스트를 토큰으로 분해</p>
          </div>
          <div className="process-arrow">→</div>
          <div className="process-step">
            <div className="step-number">2</div>
            <h4>문맥 분석</h4>
            <p>이전 대화와 현재 질문의 의미 파악</p>
          </div>
          <div className="process-arrow">→</div>
          <div className="process-step">
            <div className="step-number">3</div>
            <h4>응답 생성</h4>
            <p>학습된 패턴을 바탕으로 답변 생성</p>
          </div>
          <div className="process-arrow">→</div>
          <div className="process-step">
            <div className="step-number">4</div>
            <h4>출력</h4>
            <p>자연스러운 텍스트로 변환하여 제공</p>
          </div>
        </div>
      </section>

      <section className="chapter-section">
        <h2>✨ 효과적인 질문 방법</h2>
        <div className="grid-2">
          <div className="card success">
            <h3>✅ 좋은 질문</h3>
            <ul>
              <li>구체적이고 명확한 질문</li>
              <li>필요한 정보와 맥락 제공</li>
              <li>원하는 답변의 형식 지정</li>
              <li>단계적으로 세분화된 질문</li>
            </ul>
            <div className="example">
              <strong>예시:</strong> "파이썬으로 웹 크롤링을 하려고 합니다. BeautifulSoup 라이브러리를 
              사용해서 뉴스 제목을 가져오는 코드를 작성해 주세요."
            </div>
          </div>
          <div className="card warning">
            <h3>❌ 피해야 할 질문</h3>
            <ul>
              <li>너무 모호하거나 광범위한 질문</li>
              <li>맥락 없는 짧은 질문</li>
              <li>여러 질문을 한 번에 섞어서</li>
              <li>비현실적이거나 불가능한 요청</li>
            </ul>
            <div className="example">
              <strong>예시:</strong> "코딩 좀 가르쳐줘" (너무 모호함)
            </div>
          </div>
        </div>
      </section>

      <section className="chapter-section">
        <h2>⚠️ 주의사항</h2>
        <div className="warning-box">
          <h3>AI 사용 시 알아두어야 할 점</h3>
          <ul>
            <li><strong>정확성 검증:</strong> AI의 답변이 항상 정확한 것은 아니므로 중요한 정보는 확인 필요</li>
            <li><strong>개인정보 보호:</strong> 민감한 개인정보나 기밀 정보 입력 금지</li>
            <li><strong>최신 정보:</strong> AI의 학습 데이터는 특정 시점까지만 반영됨</li>
            <li><strong>창의적 활용:</strong> AI를 보조 도구로 활용하되, 최종 판단은 사람이</li>
          </ul>
        </div>
      </section>

      <section className="chapter-section">
        <h2>🔮 다음 단계</h2>
        <p>
          다음 챕터에서는 프롬프트 엔지니어링에 대해 학습합니다.
          AI로부터 원하는 결과를 얻기 위한 효과적인 프롬프트 작성 기법을 배워봅시다.
        </p>
      </section>
    </div>
  );
};

export default Chapter2;
