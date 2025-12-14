import './Chapter.css';

const Chapter9 = () => {
  return (
    <div className="chapter">
      <div className="chapter-header">
        <span className="chapter-badge">Chapter 9</span>
        <h1>실전 프로젝트 (Practical Projects)</h1>
      </div>
      
      <section className="chapter-section">
        <h2>🎯 학습 목표</h2>
        <ul>
          <li>실제 문제를 AI로 해결하는 경험 쌓기</li>
          <li>프로젝트 기획부터 구현까지 전 과정 이해하기</li>
          <li>다양한 AI 기술을 통합적으로 활용하기</li>
          <li>포트폴리오로 활용 가능한 프로젝트 완성하기</li>
        </ul>
      </section>

      <section className="chapter-section">
        <h2>🚀 프로젝트 기획 프로세스</h2>
        <div className="process-flow vertical">
          <div className="process-step">
            <div className="step-number">1</div>
            <div className="step-content">
              <h4>문제 정의</h4>
              <p>해결하고자 하는 실제 문제 명확히 하기</p>
              <div className="example">
                "고객 문의 응대에 시간이 너무 많이 소요된다"
              </div>
            </div>
          </div>
          <div className="process-arrow vertical">↓</div>
          <div className="process-step">
            <div className="step-number">2</div>
            <div className="step-content">
              <h4>AI 솔루션 선택</h4>
              <p>문제에 적합한 AI 기술 결정</p>
              <div className="example">
                챗봇 + RAG (FAQ 문서 활용)
              </div>
            </div>
          </div>
          <div className="process-arrow vertical">↓</div>
          <div className="process-step">
            <div className="step-number">3</div>
            <div className="step-content">
              <h4>데이터 준비</h4>
              <p>필요한 데이터 수집 및 정리</p>
              <div className="example">
                FAQ, 과거 상담 기록, 제품 정보
              </div>
            </div>
          </div>
          <div className="process-arrow vertical">↓</div>
          <div className="process-step">
            <div className="step-number">4</div>
            <div className="step-content">
              <h4>프로토타입 개발</h4>
              <p>MVP(최소 기능 제품) 구현</p>
              <div className="example">
                기본 질문 답변 기능만 구현
              </div>
            </div>
          </div>
          <div className="process-arrow vertical">↓</div>
          <div className="process-step">
            <div className="step-number">5</div>
            <div className="step-content">
              <h4>테스트 및 개선</h4>
              <p>실제 사용자 피드백 반영</p>
              <div className="example">
                정확도 측정, 프롬프트 최적화
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="chapter-section">
        <h2>💼 추천 프로젝트 아이디어</h2>
        <div className="project-grid">
          <div className="project-card beginner">
            <div className="difficulty">초급</div>
            <h3>1. 학습 도우미 챗봇</h3>
            <div className="project-desc">
              <p>특정 과목이나 주제에 대한 학습을 도와주는 AI 챗봇</p>
              <div className="tech-stack">
                <strong>활용 기술:</strong> ChatGPT API, 프롬프트 엔지니어링
              </div>
              <div className="features">
                <strong>주요 기능:</strong>
                <ul>
                  <li>개념 설명</li>
                  <li>문제 풀이 도움</li>
                  <li>퀴즈 생성</li>
                  <li>학습 자료 요약</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="project-card beginner">
            <div className="difficulty">초급</div>
            <h3>2. 이메일 자동 답장</h3>
            <div className="project-desc">
              <p>수신 이메일을 분석하고 초안 답장을 생성하는 도구</p>
              <div className="tech-stack">
                <strong>활용 기술:</strong> GPT-4, 프롬프트 템플릿
              </div>
              <div className="features">
                <strong>주요 기능:</strong>
                <ul>
                  <li>이메일 의도 파악</li>
                  <li>적절한 톤으로 답장 생성</li>
                  <li>다국어 지원</li>
                  <li>템플릿 커스터마이징</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="project-card intermediate">
            <div className="difficulty">중급</div>
            <h3>3. 문서 검색 및 요약 시스템</h3>
            <div className="project-desc">
              <p>대량의 문서에서 정보를 찾고 요약하는 RAG 시스템</p>
              <div className="tech-stack">
                <strong>활용 기술:</strong> RAG, 벡터 DB, Embeddings
              </div>
              <div className="features">
                <strong>주요 기능:</strong>
                <ul>
                  <li>의미 기반 검색</li>
                  <li>자동 요약</li>
                  <li>출처 표시</li>
                  <li>다중 문서 통합 분석</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="project-card intermediate">
            <div className="difficulty">중급</div>
            <h3>4. 코드 리뷰 어시스턴트</h3>
            <div className="project-desc">
              <p>코드를 분석하고 개선점을 제안하는 AI 도구</p>
              <div className="tech-stack">
                <strong>활용 기술:</strong> GPT-4, 파인튜닝 (선택)
              </div>
              <div className="features">
                <strong>주요 기능:</strong>
                <ul>
                  <li>버그 탐지</li>
                  <li>코드 최적화 제안</li>
                  <li>베스트 프랙티스 적용</li>
                  <li>보안 취약점 분석</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="project-card advanced">
            <div className="difficulty">고급</div>
            <h3>5. 맞춤형 콘텐츠 생성 플랫폼</h3>
            <div className="project-desc">
              <p>사용자 요구에 맞는 블로그, SNS 콘텐츠를 자동 생성</p>
              <div className="tech-stack">
                <strong>활용 기술:</strong> GPT-4, DALL-E, 멀티모달 AI
              </div>
              <div className="features">
                <strong>주요 기능:</strong>
                <ul>
                  <li>텍스트 콘텐츠 생성</li>
                  <li>이미지 생성</li>
                  <li>SEO 최적화</li>
                  <li>다양한 플랫폼 형식 지원</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="project-card advanced">
            <div className="difficulty">고급</div>
            <h3>6. AI 기반 고객 지원 시스템</h3>
            <div className="project-desc">
              <p>통합 고객 지원을 위한 종합 AI 솔루션</p>
              <div className="tech-stack">
                <strong>활용 기술:</strong> RAG, 파인튜닝, 멀티모달
              </div>
              <div className="features">
                <strong>주요 기능:</strong>
                <ul>
                  <li>24/7 자동 응대</li>
                  <li>티켓 자동 분류</li>
                  <li>감정 분석</li>
                  <li>에스컬레이션 자동화</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="chapter-section">
        <h2>🛠️ 프로젝트 구현 예시</h2>
        <div className="implementation-example">
          <h4>프로젝트: FAQ 챗봇 (RAG 활용)</h4>
          
          <div className="impl-step">
            <h5>Step 1: 필요한 도구 준비</h5>
            <div className="code-example">
              • OpenAI API 키 발급<br/>
              • Pinecone (벡터 DB) 계정 생성<br/>
              • Python 개발 환경 설정
            </div>
          </div>

          <div className="impl-step">
            <h5>Step 2: FAQ 데이터 준비</h5>
            <div className="code-example">
              # faq_data.json<br/>
              {"{"}
                <br/>&nbsp;&nbsp;"question": "배송 기간은 얼마나 걸리나요?",
                <br/>&nbsp;&nbsp;"answer": "일반 배송은 2-3일, 빠른 배송은 1일 소요됩니다."
                <br/>{"}"}
            </div>
          </div>

          <div className="impl-step">
            <h5>Step 3: 임베딩 생성 및 저장</h5>
            <div className="code-example">
              1. FAQ를 임베딩으로 변환<br/>
              2. Pinecone에 저장<br/>
              3. 메타데이터(카테고리 등) 함께 저장
            </div>
          </div>

          <div className="impl-step">
            <h5>Step 4: 챗봇 로직 구현</h5>
            <div className="code-example">
              사용자 질문 → 임베딩 변환 → 유사 FAQ 검색<br/>
              → GPT에 컨텍스트 제공 → 답변 생성
            </div>
          </div>

          <div className="impl-step">
            <h5>Step 5: 테스트 및 개선</h5>
            <div className="code-example">
              • 다양한 질문으로 테스트<br/>
              • 정확도 측정 (답변이 FAQ 기반인지)<br/>
              • 프롬프트 튜닝으로 품질 향상
            </div>
          </div>
        </div>
      </section>

      <section className="chapter-section">
        <h2>📊 성공 지표 정의</h2>
        <div className="metrics-grid">
          <div className="metric-card">
            <h4>정확도 (Accuracy)</h4>
            <p>올바른 답변을 제공한 비율</p>
            <div className="target">목표: 90% 이상</div>
          </div>
          <div className="metric-card">
            <h4>응답 시간</h4>
            <p>질문부터 답변까지 소요 시간</p>
            <div className="target">목표: 3초 이내</div>
          </div>
          <div className="metric-card">
            <h4>사용자 만족도</h4>
            <p>사용자 피드백 점수</p>
            <div className="target">목표: 4.5/5.0</div>
          </div>
          <div className="metric-card">
            <h4>비용 효율성</h4>
            <p>쿼리당 API 비용</p>
            <div className="target">목표: $0.01 이하</div>
          </div>
        </div>
      </section>

      <section className="chapter-section">
        <h2>✅ 프로젝트 체크리스트</h2>
        <div className="project-checklist">
          <h4>완성도 높은 프로젝트를 위한 확인사항</h4>
          <div className="checklist-category">
            <h5>기능적 측면</h5>
            <ul>
              <li>☐ 핵심 기능이 정상 작동하는가?</li>
              <li>☐ 에러 처리가 적절한가?</li>
              <li>☐ 엣지 케이스를 고려했는가?</li>
              <li>☐ 성능이 만족스러운가?</li>
            </ul>
          </div>
          <div className="checklist-category">
            <h5>사용자 경험</h5>
            <ul>
              <li>☐ 직관적이고 사용하기 쉬운가?</li>
              <li>☐ 응답이 충분히 빠른가?</li>
              <li>☐ 명확한 피드백을 제공하는가?</li>
            </ul>
          </div>
          <div className="checklist-category">
            <h5>윤리 및 안전</h5>
            <ul>
              <li>☐ 개인정보가 안전하게 처리되는가?</li>
              <li>☐ 편향이나 차별적 요소가 없는가?</li>
              <li>☐ 유해 콘텐츠 필터링이 되는가?</li>
            </ul>
          </div>
          <div className="checklist-category">
            <h5>문서화</h5>
            <ul>
              <li>☐ README가 명확한가?</li>
              <li>☐ 코드에 적절한 주석이 있는가?</li>
              <li>☐ 사용 방법이 설명되어 있는가?</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="chapter-section">
        <h2>🎓 학습한 내용 복습</h2>
        <div className="review-grid">
          <div className="review-card">
            <h4>Chapter 1-2</h4>
            <p>AI 기초와 채팅</p>
            <div className="application">
              기본적인 대화형 인터페이스 구현
            </div>
          </div>
          <div className="review-card">
            <h4>Chapter 3-4</h4>
            <p>프롬프트 엔지니어링</p>
            <div className="application">
              효과적인 프롬프트로 품질 향상
            </div>
          </div>
          <div className="review-card">
            <h4>Chapter 5</h4>
            <p>멀티모달 AI</p>
            <div className="application">
              이미지와 텍스트 통합 활용
            </div>
          </div>
          <div className="review-card">
            <h4>Chapter 6</h4>
            <p>RAG</p>
            <div className="application">
              외부 지식 베이스 활용
            </div>
          </div>
          <div className="review-card">
            <h4>Chapter 7</h4>
            <p>파인튜닝</p>
            <div className="application">
              특화된 작업을 위한 최적화
            </div>
          </div>
          <div className="review-card">
            <h4>Chapter 8</h4>
            <p>AI 윤리와 안전</p>
            <div className="application">
              책임감 있는 AI 개발
            </div>
          </div>
        </div>
      </section>

      <section className="chapter-section">
        <h2>🌟 다음 단계</h2>
        <div className="next-steps">
          <h4>학습을 마친 후...</h4>
          <ol>
            <li>
              <strong>프로젝트 시작:</strong> 위의 아이디어 중 하나를 선택하여 직접 구현해 보세요.
            </li>
            <li>
              <strong>커뮤니티 참여:</strong> AI 개발자 커뮤니티에서 경험을 공유하고 배우세요.
            </li>
            <li>
              <strong>최신 기술 학습:</strong> AI는 빠르게 발전합니다. 지속적으로 새로운 기술을 학습하세요.
            </li>
            <li>
              <strong>포트폴리오 구축:</strong> 완성한 프로젝트를 GitHub에 공유하세요.
            </li>
            <li>
              <strong>실무 적용:</strong> 회사나 개인 업무에 AI를 활용해 보세요.
            </li>
          </ol>
        </div>
      </section>

      <section className="chapter-section celebration">
        <h2>🎉 축하합니다!</h2>
        <div className="celebration-box">
          <p className="celebration-message">
            AI 교육 플랫폼의 모든 챕터를 완료하셨습니다!<br/>
            이제 여러분은 AI를 실전에서 활용할 준비가 되었습니다.
          </p>
          <div className="achievement">
            <h4>획득한 역량</h4>
            <div className="skills">
              <span className="skill-badge">AI 기초 이해</span>
              <span className="skill-badge">프롬프트 엔지니어링</span>
              <span className="skill-badge">RAG 구현</span>
              <span className="skill-badge">멀티모달 AI 활용</span>
              <span className="skill-badge">AI 윤리 인식</span>
              <span className="skill-badge">실전 프로젝트 기획</span>
            </div>
          </div>
          <p className="final-message">
            계속해서 배우고, 실험하고, 창조하세요.<br/>
            AI와 함께하는 여러분의 여정을 응원합니다! 🚀
          </p>
        </div>
      </section>
    </div>
  );
};

export default Chapter9;
