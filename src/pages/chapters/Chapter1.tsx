import './Chapter.css';

const Chapter1 = () => {
  return (
    <div className="chapter">
      <div className="chapter-header">
        <span className="chapter-badge">Chapter 1</span>
        <h1>AI 소개 (Introduction to AI)</h1>
      </div>
      
      <section className="chapter-section">
        <h2>🎯 학습 목표</h2>
        <ul>
          <li>인공지능의 기본 개념 이해하기</li>
          <li>AI의 발전 역사와 주요 이정표 알아보기</li>
          <li>현대 AI 기술의 응용 분야 탐색하기</li>
          <li>AI가 우리 일상에 미치는 영향 파악하기</li>
        </ul>
      </section>

      <section className="chapter-section">
        <h2>📚 인공지능이란?</h2>
        <p>
          인공지능(Artificial Intelligence, AI)은 인간의 지능을 모방하여 학습, 추론, 문제 해결 등의 
          작업을 수행할 수 있는 컴퓨터 시스템을 의미합니다.
        </p>
        <div className="info-box">
          <h3>AI의 핵심 요소</h3>
          <ul>
            <li><strong>학습(Learning):</strong> 데이터로부터 패턴을 찾고 지식을 습득</li>
            <li><strong>추론(Reasoning):</strong> 논리적 사고를 통한 결론 도출</li>
            <li><strong>인식(Perception):</strong> 이미지, 음성 등의 정보 이해</li>
            <li><strong>자연어 처리:</strong> 인간의 언어 이해 및 생성</li>
          </ul>
        </div>
      </section>

      <section className="chapter-section">
        <h2>🚀 AI의 발전 역사</h2>
        <div className="timeline">
          <div className="timeline-item">
            <div className="timeline-year">1950s</div>
            <div className="timeline-content">
              <h4>AI의 탄생</h4>
              <p>앨런 튜링의 튜링 테스트, 다트머스 회의에서 "인공지능" 용어 탄생</p>
            </div>
          </div>
          <div className="timeline-item">
            <div className="timeline-year">1980s</div>
            <div className="timeline-content">
              <h4>전문가 시스템</h4>
              <p>규칙 기반 AI 시스템의 상업적 성공</p>
            </div>
          </div>
          <div className="timeline-item">
            <div className="timeline-year">2010s</div>
            <div className="timeline-content">
              <h4>딥러닝 혁명</h4>
              <p>이미지 인식, 음성 인식에서 인간 수준 달성</p>
            </div>
          </div>
          <div className="timeline-item">
            <div className="timeline-year">2020s</div>
            <div className="timeline-content">
              <h4>생성형 AI 시대</h4>
              <p>GPT, DALL-E 등 대규모 언어 모델의 등장</p>
            </div>
          </div>
        </div>
      </section>

      <section className="chapter-section">
        <h2>💡 AI의 응용 분야</h2>
        <div className="grid-2">
          <div className="card">
            <h3>🏥 의료 분야</h3>
            <p>질병 진단, 신약 개발, 개인 맞춤 치료</p>
          </div>
          <div className="card">
            <h3>🚗 자율주행</h3>
            <p>자동차, 드론, 로봇의 자율 주행 시스템</p>
          </div>
          <div className="card">
            <h3>🎨 창작 활동</h3>
            <p>이미지 생성, 음악 작곡, 글쓰기 지원</p>
          </div>
          <div className="card">
            <h3>💼 비즈니스</h3>
            <p>고객 서비스, 데이터 분석, 의사결정 지원</p>
          </div>
        </div>
      </section>

      <section className="chapter-section">
        <h2>🔮 다음 단계</h2>
        <p>
          다음 챕터에서는 AI의 기초 개념과 실제 채팅 AI를 활용하는 방법을 학습합니다.
          ChatGPT와 같은 대화형 AI의 작동 원리를 이해하고, 효과적으로 활용하는 방법을 배워봅시다.
        </p>
      </section>
    </div>
  );
};

export default Chapter1;
