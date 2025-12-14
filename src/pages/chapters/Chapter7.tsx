import './Chapter.css';

const Chapter7 = () => {
  return (
    <div className="chapter">
      <div className="chapter-header">
        <span className="chapter-badge">Chapter 7</span>
        <h1>파인튜닝 (Fine-tuning)</h1>
      </div>
      
      <section className="chapter-section">
        <h2>🎯 학습 목표</h2>
        <ul>
          <li>파인튜닝의 개념과 필요성 이해하기</li>
          <li>파인튜닝 vs 프롬프트 엔지니어링 vs RAG 비교하기</li>
          <li>파인튜닝 방법론 배우기</li>
          <li>실전 파인튜닝 프로세스 알아보기</li>
        </ul>
      </section>

      <section className="chapter-section">
        <h2>🔧 파인튜닝이란?</h2>
        <p>
          파인튜닝(Fine-tuning)은 사전 학습된 AI 모델을 특정 작업이나 도메인에 맞게 
          추가 학습시켜 성능을 최적화하는 과정입니다.
        </p>
        <div className="info-box">
          <h3>파인튜닝이 필요한 경우</h3>
          <ul>
            <li><strong>특화된 작업:</strong> 특정 업무에 특화된 응답 스타일 필요</li>
            <li><strong>전문 용어:</strong> 도메인 특화 용어와 지식 활용</li>
            <li><strong>일관된 출력:</strong> 특정 형식이나 톤 유지</li>
            <li><strong>성능 개선:</strong> 특정 작업에서 더 높은 정확도 필요</li>
          </ul>
        </div>
      </section>

      <section className="chapter-section">
        <h2>⚖️ 접근 방법 비교</h2>
        <div className="comparison-table">
          <div className="comparison-header">
            <div className="comparison-cell">특성</div>
            <div className="comparison-cell">프롬프트</div>
            <div className="comparison-cell">RAG</div>
            <div className="comparison-cell">파인튜닝</div>
          </div>
          <div className="comparison-row">
            <div className="comparison-cell"><strong>구현 난이도</strong></div>
            <div className="comparison-cell">쉬움 ✅</div>
            <div className="comparison-cell">중간</div>
            <div className="comparison-cell">어려움</div>
          </div>
          <div className="comparison-row">
            <div className="comparison-cell"><strong>비용</strong></div>
            <div className="comparison-cell">낮음 ✅</div>
            <div className="comparison-cell">중간</div>
            <div className="comparison-cell">높음</div>
          </div>
          <div className="comparison-row">
            <div className="comparison-cell"><strong>업데이트</strong></div>
            <div className="comparison-cell">즉시 ✅</div>
            <div className="comparison-cell">빠름 ✅</div>
            <div className="comparison-cell">느림</div>
          </div>
          <div className="comparison-row">
            <div className="comparison-cell"><strong>특화 성능</strong></div>
            <div className="comparison-cell">낮음</div>
            <div className="comparison-cell">중간</div>
            <div className="comparison-cell">높음 ✅</div>
          </div>
          <div className="comparison-row">
            <div className="comparison-cell"><strong>최신 정보</strong></div>
            <div className="comparison-cell">불가</div>
            <div className="comparison-cell">가능 ✅</div>
            <div className="comparison-cell">불가</div>
          </div>
        </div>
      </section>

      <section className="chapter-section">
        <h2>📊 파인튜닝 유형</h2>
        <div className="grid-2">
          <div className="card">
            <h3>Full Fine-tuning</h3>
            <p>모델의 모든 파라미터를 업데이트</p>
            <div className="pros-cons">
              <div className="pros">
                <strong>장점:</strong>
                <ul className="small-list">
                  <li>최고의 성능</li>
                  <li>완전한 커스터마이징</li>
                </ul>
              </div>
              <div className="cons">
                <strong>단점:</strong>
                <ul className="small-list">
                  <li>높은 비용</li>
                  <li>많은 데이터 필요</li>
                  <li>긴 학습 시간</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="card">
            <h3>LoRA (Low-Rank Adaptation)</h3>
            <p>일부 파라미터만 효율적으로 업데이트</p>
            <div className="pros-cons">
              <div className="pros">
                <strong>장점:</strong>
                <ul className="small-list">
                  <li>낮은 비용</li>
                  <li>빠른 학습</li>
                  <li>적은 데이터로 가능</li>
                </ul>
              </div>
              <div className="cons">
                <strong>단점:</strong>
                <ul className="small-list">
                  <li>Full보다 성능 낮음</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="chapter-section">
        <h2>🔄 파인튜닝 프로세스</h2>
        <div className="process-flow vertical">
          <div className="process-step">
            <div className="step-number">1</div>
            <div className="step-content">
              <h4>데이터 수집</h4>
              <p>학습용 데이터셋 준비 (최소 수백~수천 개 예시)</p>
              <div className="example">
                입력-출력 쌍으로 구성<br/>
                {"{"}"prompt": "질문", "completion": "답변"{"}"}
              </div>
            </div>
          </div>
          <div className="process-arrow vertical">↓</div>
          <div className="process-step">
            <div className="step-number">2</div>
            <div className="step-content">
              <h4>데이터 전처리</h4>
              <p>데이터 정제 및 형식 통일</p>
              <div className="example">
                중복 제거, 품질 검증, 형식 변환
              </div>
            </div>
          </div>
          <div className="process-arrow vertical">↓</div>
          <div className="process-step">
            <div className="step-number">3</div>
            <div className="step-content">
              <h4>학습 설정</h4>
              <p>하이퍼파라미터 설정</p>
              <div className="example">
                학습률, 배치 크기, 에폭 수 등
              </div>
            </div>
          </div>
          <div className="process-arrow vertical">↓</div>
          <div className="process-step">
            <div className="step-number">4</div>
            <div className="step-content">
              <h4>모델 학습</h4>
              <p>파인튜닝 실행</p>
              <div className="example">
                OpenAI API, HuggingFace 등 활용
              </div>
            </div>
          </div>
          <div className="process-arrow vertical">↓</div>
          <div className="process-step">
            <div className="step-number">5</div>
            <div className="step-content">
              <h4>평가 및 반복</h4>
              <p>테스트 데이터로 성능 평가</p>
              <div className="example">
                필요시 데이터 추가 또는 파라미터 조정
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="chapter-section">
        <h2>💡 실전 활용 사례</h2>
        <div className="use-case-grid">
          <div className="use-case-card">
            <h4>🏥 의료 AI</h4>
            <p>의료 전문 용어와 진단 프로토콜을 학습하여 의료진 지원</p>
            <div className="example">
              환자 증상 → 가능한 진단 및 검사 제안
            </div>
          </div>
          <div className="use-case-card">
            <h4>⚖️ 법률 AI</h4>
            <p>법률 문서 분석 및 계약서 검토 자동화</p>
            <div className="example">
              계약서 → 리스크 포인트 식별 및 개선안 제시
            </div>
          </div>
          <div className="use-case-card">
            <h4>💰 금융 AI</h4>
            <p>금융 상품 추천 및 투자 조언 제공</p>
            <div className="example">
              고객 프로필 → 맞춤형 포트폴리오 제안
            </div>
          </div>
          <div className="use-case-card">
            <h4>🎓 교육 AI</h4>
            <p>학생 수준에 맞는 맞춤형 학습 자료 생성</p>
            <div className="example">
              학습 수준 → 적절한 난이도의 문제 및 설명
            </div>
          </div>
        </div>
      </section>

      <section className="chapter-section">
        <h2>📝 데이터 준비 가이드</h2>
        <div className="guide-box">
          <h4>고품질 학습 데이터 만들기</h4>
          <div className="guide-item">
            <strong>1. 충분한 양</strong>
            <p>최소 수백 개, 이상적으로는 수천 개의 예시</p>
          </div>
          <div className="guide-item">
            <strong>2. 다양성</strong>
            <p>다양한 시나리오와 엣지 케이스 포함</p>
          </div>
          <div className="guide-item">
            <strong>3. 일관성</strong>
            <p>동일한 형식과 품질 기준 유지</p>
          </div>
          <div className="guide-item">
            <strong>4. 품질</strong>
            <p>정확하고 유용한 답변으로 구성</p>
          </div>
          <div className="example">
            <strong>좋은 예시:</strong><br/>
            {"{"}
              <br/>&nbsp;&nbsp;"prompt": "고객이 배송 지연에 대해 불만을 제기했습니다.",
              <br/>&nbsp;&nbsp;"completion": "죄송합니다. 배송 지연으로 불편을 드려 죄송합니다. 
              현재 주문번호를 확인하여 배송 상태를 조회해 드리겠습니다. 
              또한 보상으로 다음 구매 시 사용 가능한 10% 할인 쿠폰을 제공해 드리겠습니다."
              <br/>{"}"}
          </div>
        </div>
      </section>

      <section className="chapter-section">
        <h2>⚠️ 주의사항</h2>
        <div className="warning-box">
          <ul>
            <li><strong>과적합:</strong> 학습 데이터에만 최적화되어 일반화 성능 저하 가능</li>
            <li><strong>데이터 품질:</strong> 잘못된 데이터로 학습하면 성능 오히려 악화</li>
            <li><strong>비용:</strong> 대규모 모델의 Full Fine-tuning은 매우 비쌀 수 있음</li>
            <li><strong>유지보수:</strong> 정기적인 재학습과 업데이트 필요</li>
            <li><strong>편향:</strong> 학습 데이터의 편향이 모델에 반영됨</li>
          </ul>
        </div>
      </section>

      <section className="chapter-section">
        <h2>🔮 다음 단계</h2>
        <p>
          다음 챕터에서는 AI 윤리와 안전에 대해 학습합니다.
          책임감 있는 AI 개발과 활용을 위한 중요한 원칙들을 배워봅시다.
        </p>
      </section>
    </div>
  );
};

export default Chapter7;
