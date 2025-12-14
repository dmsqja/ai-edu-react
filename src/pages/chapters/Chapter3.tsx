import './Chapter.css';

const Chapter3 = () => {
  return (
    <div className="chapter">
      <div className="chapter-header">
        <span className="chapter-badge">Chapter 3</span>
        <h1>프롬프트 엔지니어링 (Prompt Engineering)</h1>
      </div>
      
      <section className="chapter-section">
        <h2>🎯 학습 목표</h2>
        <ul>
          <li>프롬프트 엔지니어링의 개념과 중요성 이해하기</li>
          <li>효과적인 프롬프트 작성 원칙 배우기</li>
          <li>다양한 프롬프트 패턴 익히기</li>
          <li>실전 프롬프트 예시 활용하기</li>
        </ul>
      </section>

      <section className="chapter-section">
        <h2>📝 프롬프트 엔지니어링이란?</h2>
        <p>
          프롬프트 엔지니어링은 AI 모델로부터 원하는 출력을 얻기 위해 입력(프롬프트)을 
          체계적으로 설계하고 최적화하는 기술입니다.
        </p>
        <div className="info-box">
          <h3>프롬프트 엔지니어링이 중요한 이유</h3>
          <ul>
            <li><strong>품질 향상:</strong> 더 정확하고 유용한 답변 획득</li>
            <li><strong>효율성:</strong> 반복 질문 없이 한 번에 원하는 결과 도출</li>
            <li><strong>일관성:</strong> 예측 가능하고 안정적인 출력 생성</li>
            <li><strong>창의성:</strong> AI의 잠재력을 최대한 활용</li>
          </ul>
        </div>
      </section>

      <section className="chapter-section">
        <h2>🎨 효과적인 프롬프트 작성 원칙</h2>
        <div className="grid-2">
          <div className="card">
            <h3>1️⃣ 명확성 (Clarity)</h3>
            <p>구체적이고 명확한 지시사항 제공</p>
            <div className="example">
              <strong>나쁜 예:</strong> "글 써줘"<br/>
              <strong>좋은 예:</strong> "500자 이내로 환경 보호의 중요성에 대한 설득력 있는 에세이를 작성해 주세요."
            </div>
          </div>
          <div className="card">
            <h3>2️⃣ 맥락 제공 (Context)</h3>
            <p>배경 정보와 상황 설명</p>
            <div className="example">
              <strong>예:</strong> "저는 초등학생을 가르치는 교사입니다. 
              학생들에게 광합성을 쉽게 설명할 수 있는 방법을 알려주세요."
            </div>
          </div>
          <div className="card">
            <h3>3️⃣ 형식 지정 (Format)</h3>
            <p>원하는 출력 형식 명시</p>
            <div className="example">
              <strong>예:</strong> "다음 내용을 3가지 핵심 포인트로 요약하고, 
              각 포인트는 한 문장으로 작성해 주세요."
            </div>
          </div>
          <div className="card">
            <h3>4️⃣ 역할 부여 (Role)</h3>
            <p>AI에게 특정 역할 지정</p>
            <div className="example">
              <strong>예:</strong> "당신은 경험 많은 프론트엔드 개발자입니다. 
              React 컴포넌트 최적화 방법을 설명해 주세요."
            </div>
          </div>
        </div>
      </section>

      <section className="chapter-section">
        <h2>🔄 프롬프트 패턴</h2>
        <div className="pattern-list">
          <div className="pattern-item">
            <h4>📌 Few-Shot Learning</h4>
            <p>예시를 제공하여 원하는 형식 학습</p>
            <div className="code-example">
              입력: "사과" → 출력: "Apple"<br/>
              입력: "바나나" → 출력: "Banana"<br/>
              입력: "포도" → 출력:
            </div>
          </div>
          <div className="pattern-item">
            <h4>🔗 Chain of Thought</h4>
            <p>단계별 사고 과정 유도</p>
            <div className="code-example">
              "다음 문제를 단계별로 풀이해 주세요:<br/>
              1. 먼저 주어진 정보를 정리하고<br/>
              2. 필요한 공식을 적용한 다음<br/>
              3. 계산 과정을 보여주고<br/>
              4. 최종 답을 제시해 주세요."
            </div>
          </div>
          <div className="pattern-item">
            <h4>🎭 Persona Pattern</h4>
            <p>특정 전문가 페르소나 활용</p>
            <div className="code-example">
              "당신은 20년 경력의 영양사입니다. 
              균형 잡힌 식단을 위한 1주일 식단표를 작성해 주세요."
            </div>
          </div>
        </div>
      </section>

      <section className="chapter-section">
        <h2>💡 실전 프롬프트 예시</h2>
        <div className="example-box">
          <h4>코딩 도움</h4>
          <p className="prompt-example">
            "파이썬으로 CSV 파일을 읽어서 데이터를 정리하는 코드가 필요합니다. 
            다음 요구사항을 만족하는 코드를 작성해 주세요:<br/>
            1. pandas 라이브러리 사용<br/>
            2. 결측치는 평균값으로 대체<br/>
            3. 중복 행 제거<br/>
            4. 주석을 포함하여 초보자도 이해할 수 있도록 작성"
          </p>
        </div>
        <div className="example-box">
          <h4>글쓰기 도움</h4>
          <p className="prompt-example">
            "블로그 독자층은 20-30대 IT 관심자입니다. 
            '클라우드 컴퓨팅의 미래'라는 주제로 1000자 분량의 블로그 글을 작성해 주세요. 
            톤은 친근하면서도 전문적이어야 하며, 실제 사례를 2-3개 포함해 주세요."
          </p>
        </div>
      </section>

      <section className="chapter-section">
        <h2>🔮 다음 단계</h2>
        <p>
          다음 챕터에서는 고급 프롬프팅 기법을 학습합니다.
          복잡한 작업을 위한 프롬프트 체이닝, 조건부 로직 등을 배워봅시다.
        </p>
      </section>
    </div>
  );
};

export default Chapter3;
