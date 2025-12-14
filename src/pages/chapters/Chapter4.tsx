import './Chapter.css';

const Chapter4 = () => {
  return (
    <div className="chapter">
      <div className="chapter-header">
        <span className="chapter-badge">Chapter 4</span>
        <h1>고급 프롬프팅 (Advanced Prompting)</h1>
      </div>
      
      <section className="chapter-section">
        <h2>🎯 학습 목표</h2>
        <ul>
          <li>프롬프트 체이닝 기법 익히기</li>
          <li>복잡한 작업을 위한 구조화된 프롬프트 설계</li>
          <li>조건부 로직과 반복 작업 활용</li>
          <li>프롬프트 최적화 및 디버깅 방법</li>
        </ul>
      </section>

      <section className="chapter-section">
        <h2>🔗 프롬프트 체이닝</h2>
        <p>
          프롬프트 체이닝은 복잡한 작업을 여러 단계로 나누어 각 단계의 출력을 
          다음 단계의 입력으로 사용하는 기법입니다.
        </p>
        <div className="chain-example">
          <div className="chain-step">
            <div className="step-header">Step 1: 정보 수집</div>
            <div className="step-content">
              "다음 주제에 대한 핵심 정보 5가지를 나열해 주세요: 양자 컴퓨팅"
            </div>
          </div>
          <div className="chain-arrow">↓</div>
          <div className="chain-step">
            <div className="step-header">Step 2: 구조화</div>
            <div className="step-content">
              "위의 5가지 정보를 논리적 순서로 재배열하고, 각 정보 간의 관계를 설명해 주세요."
            </div>
          </div>
          <div className="chain-arrow">↓</div>
          <div className="chain-step">
            <div className="step-header">Step 3: 콘텐츠 생성</div>
            <div className="step-content">
              "이제 재배열된 정보를 바탕으로 800자 분량의 교육용 글을 작성해 주세요."
            </div>
          </div>
        </div>
      </section>

      <section className="chapter-section">
        <h2>🏗️ 구조화된 프롬프트 템플릿</h2>
        <div className="template-box">
          <h4>전문적인 프롬프트 구조</h4>
          <div className="template-content">
            <div className="template-section">
              <strong>[역할]</strong><br/>
              당신은 [분야]의 전문가입니다.
            </div>
            <div className="template-section">
              <strong>[맥락]</strong><br/>
              [상황 설명 및 배경 정보]
            </div>
            <div className="template-section">
              <strong>[작업]</strong><br/>
              다음 작업을 수행해 주세요:<br/>
              1. [세부 작업 1]<br/>
              2. [세부 작업 2]<br/>
              3. [세부 작업 3]
            </div>
            <div className="template-section">
              <strong>[제약조건]</strong><br/>
              - [제약사항 1]<br/>
              - [제약사항 2]
            </div>
            <div className="template-section">
              <strong>[출력 형식]</strong><br/>
              [원하는 형식 지정]
            </div>
          </div>
        </div>
      </section>

      <section className="chapter-section">
        <h2>🎛️ 조건부 프롬프팅</h2>
        <div className="grid-2">
          <div className="card">
            <h3>If-Then 패턴</h3>
            <div className="example">
              "만약 사용자가 초보자라면 기본 개념부터 설명하고,<br/>
              중급자라면 심화 내용을, <br/>
              전문가라면 최신 연구 동향을 포함해 주세요."
            </div>
          </div>
          <div className="card">
            <h3>다중 시나리오 처리</h3>
            <div className="example">
              "다음 코드를 분석하고:<br/>
              - 에러가 있다면 수정 방법 제시<br/>
              - 최적화 가능하다면 개선안 제안<br/>
              - 완벽하다면 대안적 접근법 설명"
            </div>
          </div>
        </div>
      </section>

      <section className="chapter-section">
        <h2>🔍 프롬프트 최적화 기법</h2>
        <div className="optimization-list">
          <div className="optimization-item">
            <h4>1. 반복적 개선</h4>
            <p>초기 프롬프트로 결과를 확인하고, 피드백을 반영하여 점진적으로 개선</p>
            <div className="example">
              v1: "마케팅 전략 알려줘"<br/>
              v2: "소셜 미디어 마케팅 전략을 알려줘"<br/>
              v3: "인스타그램을 활용한 패션 브랜드의 마케팅 전략을 3가지 제시하고, 
              각 전략의 예상 효과를 설명해 주세요"
            </div>
          </div>
          <div className="optimization-item">
            <h4>2. 토큰 효율성</h4>
            <p>불필요한 단어를 제거하되 명확성은 유지</p>
            <div className="example">
              ❌ "제가 궁금한 것은 말이죠, 혹시 가능하시다면..."<br/>
              ✅ "다음 질문에 답해 주세요:"
            </div>
          </div>
          <div className="optimization-item">
            <h4>3. 예시 활용</h4>
            <p>원하는 출력 형식의 예시를 제공하여 정확도 향상</p>
          </div>
        </div>
      </section>

      <section className="chapter-section">
        <h2>⚡ 고급 활용 사례</h2>
        <div className="use-case">
          <h4>복잡한 분석 작업</h4>
          <div className="code-example">
            당신은 데이터 분석 전문가입니다.<br/><br/>
            
            첨부된 판매 데이터를 분석하여 다음을 수행해 주세요:<br/><br/>
            
            1. 데이터 개요<br/>
            - 전체 기간, 제품 카테고리, 주요 메트릭 요약<br/><br/>
            
            2. 트렌드 분석<br/>
            - 시간별, 카테고리별 판매 추이<br/>
            - 이상치 및 특이사항 식별<br/><br/>
            
            3. 인사이트 도출<br/>
            - 3가지 주요 발견사항<br/>
            - 각 발견사항에 대한 비즈니스 시사점<br/><br/>
            
            4. 액션 플랜<br/>
            - 우선순위가 높은 개선 방안 3가지<br/><br/>
            
            출력 형식: 마크다운, 시각화가 필요한 부분은 표로 정리
          </div>
        </div>
      </section>

      <section className="chapter-section">
        <h2>🔮 다음 단계</h2>
        <p>
          다음 챕터에서는 멀티모달 AI에 대해 학습합니다.
          텍스트뿐만 아니라 이미지, 음성 등 다양한 형태의 데이터를 처리하는 AI 기술을 배워봅시다.
        </p>
      </section>
    </div>
  );
};

export default Chapter4;
