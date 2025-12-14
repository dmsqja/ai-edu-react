import './Chapter.css';

const Chapter8 = () => {
  return (
    <div className="chapter">
      <div className="chapter-header">
        <span className="chapter-badge">Chapter 8</span>
        <h1>AI 윤리와 안전 (AI Ethics and Safety)</h1>
      </div>
      
      <section className="chapter-section">
        <h2>🎯 학습 목표</h2>
        <ul>
          <li>AI 윤리의 중요성과 핵심 원칙 이해하기</li>
          <li>AI 사용 시 발생할 수 있는 위험 인식하기</li>
          <li>책임감 있는 AI 활용 방법 배우기</li>
          <li>AI 안전 가이드라인 익히기</li>
        </ul>
      </section>

      <section className="chapter-section">
        <h2>🤝 AI 윤리란?</h2>
        <p>
          AI 윤리는 인공지능을 개발하고 활용할 때 지켜야 할 도덕적, 
          사회적 원칙과 가치를 다루는 분야입니다.
        </p>
        <div className="info-box">
          <h3>AI 윤리가 중요한 이유</h3>
          <ul>
            <li><strong>사회적 영향:</strong> AI가 개인과 사회에 미치는 광범위한 영향</li>
            <li><strong>편향과 차별:</strong> 잘못된 AI는 기존 편견을 강화할 수 있음</li>
            <li><strong>프라이버시:</strong> 개인정보 보호와 데이터 활용의 균형</li>
            <li><strong>책임 소재:</strong> AI의 결정에 대한 책임 문제</li>
          </ul>
        </div>
      </section>

      <section className="chapter-section">
        <h2>⚖️ AI 윤리의 핵심 원칙</h2>
        <div className="principles-grid">
          <div className="principle-card">
            <h3>1️⃣ 공정성 (Fairness)</h3>
            <p>모든 사용자를 차별 없이 공평하게 대우</p>
            <div className="example">
              <strong>예시:</strong><br/>
              ❌ 성별, 인종에 따라 다른 결과 제공<br/>
              ✅ 객관적 기준으로 모두에게 동등한 기회 제공
            </div>
          </div>
          <div className="principle-card">
            <h3>2️⃣ 투명성 (Transparency)</h3>
            <p>AI의 작동 방식과 결정 과정을 이해 가능하게</p>
            <div className="example">
              <strong>예시:</strong><br/>
              ❌ "AI가 그렇게 판단했습니다"<br/>
              ✅ "다음 요인을 고려하여 결정했습니다: A, B, C"
            </div>
          </div>
          <div className="principle-card">
            <h3>3️⃣ 책임성 (Accountability)</h3>
            <p>AI의 결정과 행동에 대한 책임 명확화</p>
            <div className="example">
              <strong>예시:</strong><br/>
              AI 오류 발생 시 개발자/운영자의 책임 인정 및 보상
            </div>
          </div>
          <div className="principle-card">
            <h3>4️⃣ 프라이버시 (Privacy)</h3>
            <p>개인정보 보호와 데이터 보안</p>
            <div className="example">
              <strong>예시:</strong><br/>
              최소한의 필요 데이터만 수집, 안전한 저장 및 처리
            </div>
          </div>
          <div className="principle-card">
            <h3>5️⃣ 안전성 (Safety)</h3>
            <p>AI가 해를 끼치지 않도록 보장</p>
            <div className="example">
              <strong>예시:</strong><br/>
              유해 콘텐츠 생성 방지, 안전 장치 구현
            </div>
          </div>
          <div className="principle-card">
            <h3>6️⃣ 인간 중심 (Human-Centric)</h3>
            <p>인간의 가치와 복지를 최우선으로</p>
            <div className="example">
              <strong>예시:</strong><br/>
              AI는 도구이며, 최종 판단은 인간이 수행
            </div>
          </div>
        </div>
      </section>

      <section className="chapter-section">
        <h2>⚠️ AI 사용 시 위험 요소</h2>
        <div className="risk-list">
          <div className="risk-item high">
            <h4>🔴 높은 위험</h4>
            <ul>
              <li><strong>편향과 차별:</strong> 학습 데이터의 편향이 결과에 반영</li>
              <li><strong>프라이버시 침해:</strong> 개인정보 무단 수집 및 유출</li>
              <li><strong>허위 정보:</strong> 잘못된 정보 생성 및 확산 (환각)</li>
              <li><strong>악의적 사용:</strong> 사기, 딥페이크, 사이버 공격 등</li>
            </ul>
          </div>
          <div className="risk-item medium">
            <h4>🟡 중간 위험</h4>
            <ul>
              <li><strong>과의존:</strong> AI에 지나치게 의존하여 비판적 사고 감소</li>
              <li><strong>일자리 대체:</strong> 자동화로 인한 일자리 감소</li>
              <li><strong>불투명성:</strong> 블랙박스 AI의 결정 과정 이해 어려움</li>
              <li><strong>저작권 문제:</strong> AI 생성 콘텐츠의 소유권 논란</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="chapter-section">
        <h2>✅ 책임감 있는 AI 활용 가이드</h2>
        <div className="guide-grid">
          <div className="guide-card">
            <h4>개발자/운영자</h4>
            <ul>
              <li>다양한 데이터셋으로 학습하여 편향 최소화</li>
              <li>정기적인 모델 평가 및 모니터링</li>
              <li>투명한 문서화 및 제한사항 명시</li>
              <li>사용자 피드백 수렴 및 개선</li>
              <li>안전 장치 및 필터링 시스템 구현</li>
            </ul>
          </div>
          <div className="guide-card">
            <h4>사용자</h4>
            <ul>
              <li>AI 결과를 맹신하지 않고 검증</li>
              <li>민감한 개인정보 입력 자제</li>
              <li>AI 생성 콘텐츠의 출처 명시</li>
              <li>윤리적 목적으로만 사용</li>
              <li>문제 발견 시 즉시 보고</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="chapter-section">
        <h2>🛡️ AI 안전 체크리스트</h2>
        <div className="checklist-box">
          <h4>AI 활용 전 확인사항</h4>
          <div className="checklist">
            <div className="checklist-item">
              <input type="checkbox" id="check1" />
              <label htmlFor="check1">이 AI가 내 업무/목적에 적합한가?</label>
            </div>
            <div className="checklist-item">
              <input type="checkbox" id="check2" />
              <label htmlFor="check2">개인정보나 기밀정보를 입력하지 않았는가?</label>
            </div>
            <div className="checklist-item">
              <input type="checkbox" id="check3" />
              <label htmlFor="check3">AI 생성 결과를 사실 확인했는가?</label>
            </div>
            <div className="checklist-item">
              <input type="checkbox" id="check4" />
              <label htmlFor="check4">편향되거나 차별적인 내용이 없는가?</label>
            </div>
            <div className="checklist-item">
              <input type="checkbox" id="check5" />
              <label htmlFor="check5">저작권이나 법적 문제가 없는가?</label>
            </div>
            <div className="checklist-item">
              <input type="checkbox" id="check6" />
              <label htmlFor="check6">윤리적으로 문제가 없는가?</label>
            </div>
          </div>
        </div>
      </section>

      <section className="chapter-section">
        <h2>📚 실제 사례</h2>
        <div className="case-studies">
          <div className="case negative">
            <h4>❌ 부정적 사례</h4>
            <div className="case-item">
              <strong>채용 AI의 성별 편향</strong>
              <p>
                특정 기업의 AI 채용 시스템이 여성 지원자를 차별하는 것으로 밝혀져 
                폐기된 사례. 과거 남성 위주 채용 데이터로 학습된 결과.
              </p>
            </div>
            <div className="case-item">
              <strong>얼굴 인식 오류</strong>
              <p>
                특정 인종에서 인식률이 현저히 낮은 문제가 발견됨. 
                다양성이 부족한 학습 데이터가 원인.
              </p>
            </div>
          </div>
          <div className="case positive">
            <h4>✅ 긍정적 사례</h4>
            <div className="case-item">
              <strong>의료 AI의 공정성 개선</strong>
              <p>
                다양한 인구 집단의 데이터로 학습하여 모든 환자에게 
                공평한 진단 정확도를 제공하는 AI 시스템 개발.
              </p>
            </div>
            <div className="case-item">
              <strong>투명한 AI 설명</strong>
              <p>
                대출 승인 AI가 결정 이유를 명확히 설명하여 
                사용자의 이해와 신뢰를 높인 사례.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="chapter-section">
        <h2>🌍 글로벌 AI 규제 동향</h2>
        <div className="regulations">
          <div className="regulation-item">
            <h4>🇪🇺 EU AI Act</h4>
            <p>위험도에 따른 AI 시스템 분류 및 규제</p>
          </div>
          <div className="regulation-item">
            <h4>🇺🇸 미국 AI 권리 장전</h4>
            <p>AI 사용에 대한 시민의 권리 보호</p>
          </div>
          <div className="regulation-item">
            <h4>🇰🇷 한국 인공지능 윤리기준</h4>
            <p>인간 중심의 AI 개발 및 활용 원칙</p>
          </div>
        </div>
      </section>

      <section className="chapter-section">
        <h2>💡 실천 가이드</h2>
        <div className="action-box">
          <h4>오늘부터 실천할 수 있는 것들</h4>
          <ol>
            <li>AI 사용 시 항상 결과를 검증하고 비판적으로 사고하기</li>
            <li>개인정보나 민감 정보를 AI에 입력하지 않기</li>
            <li>AI 생성 콘텐츠임을 명시하기</li>
            <li>편향되거나 부적절한 출력을 발견하면 보고하기</li>
            <li>AI를 보조 도구로만 사용하고 최종 판단은 직접 하기</li>
            <li>AI 윤리와 안전에 대해 지속적으로 학습하기</li>
          </ol>
        </div>
      </section>

      <section className="chapter-section">
        <h2>🔮 다음 단계</h2>
        <p>
          마지막 챕터에서는 지금까지 배운 내용을 활용한 실전 프로젝트를 진행합니다.
          실제 문제를 해결하며 AI 활용 능력을 완성해봅시다.
        </p>
      </section>
    </div>
  );
};

export default Chapter8;
