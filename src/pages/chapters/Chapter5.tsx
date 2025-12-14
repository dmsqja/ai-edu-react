import './Chapter.css';

const Chapter5 = () => {
  return (
    <div className="chapter">
      <div className="chapter-header">
        <span className="chapter-badge">Chapter 5</span>
        <h1>멀티모달 AI (Multimodal AI)</h1>
      </div>
      
      <section className="chapter-section">
        <h2>🎯 학습 목표</h2>
        <ul>
          <li>멀티모달 AI의 개념과 중요성 이해하기</li>
          <li>이미지, 음성, 텍스트를 결합한 AI 활용법 배우기</li>
          <li>대표적인 멀티모달 모델 알아보기</li>
          <li>실전 활용 사례 탐색하기</li>
        </ul>
      </section>

      <section className="chapter-section">
        <h2>🎨 멀티모달 AI란?</h2>
        <p>
          멀티모달 AI는 텍스트, 이미지, 음성, 비디오 등 여러 종류의 데이터를 
          동시에 이해하고 처리할 수 있는 인공지능 시스템입니다.
        </p>
        <div className="info-box">
          <h3>멀티모달의 장점</h3>
          <ul>
            <li><strong>풍부한 이해:</strong> 다양한 형태의 정보를 종합적으로 분석</li>
            <li><strong>자연스러운 상호작용:</strong> 인간과 유사한 방식으로 소통</li>
            <li><strong>창의적 생성:</strong> 텍스트로 이미지 생성, 이미지로 텍스트 생성 등</li>
            <li><strong>실세계 적용:</strong> 복잡한 실제 상황에 효과적으로 대응</li>
          </ul>
        </div>
      </section>

      <section className="chapter-section">
        <h2>🔄 모달리티 종류</h2>
        <div className="grid-2">
          <div className="card">
            <h3>📝 텍스트</h3>
            <p>자연어 처리, 번역, 요약, 생성</p>
            <ul className="small-list">
              <li>문서 분석</li>
              <li>대화 시스템</li>
              <li>코드 생성</li>
            </ul>
          </div>
          <div className="card">
            <h3>🖼️ 이미지</h3>
            <p>시각 정보 인식 및 생성</p>
            <ul className="small-list">
              <li>객체 탐지</li>
              <li>이미지 생성</li>
              <li>스타일 변환</li>
            </ul>
          </div>
          <div className="card">
            <h3>🎵 음성</h3>
            <p>음성 인식 및 합성</p>
            <ul className="small-list">
              <li>음성 인식(STT)</li>
              <li>음성 합성(TTS)</li>
              <li>감정 분석</li>
            </ul>
          </div>
          <div className="card">
            <h3>🎬 비디오</h3>
            <p>동영상 분석 및 생성</p>
            <ul className="small-list">
              <li>행동 인식</li>
              <li>비디오 요약</li>
              <li>자막 생성</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="chapter-section">
        <h2>🚀 대표적인 멀티모달 모델</h2>
        <div className="model-list">
          <div className="model-item">
            <h4>GPT-4 Vision (GPT-4V)</h4>
            <p className="model-desc">텍스트와 이미지를 함께 이해하고 처리</p>
            <div className="model-features">
              <strong>주요 기능:</strong>
              <ul>
                <li>이미지 내용 설명 및 분석</li>
                <li>차트와 그래프 해석</li>
                <li>시각적 질문 답변</li>
                <li>OCR 및 문서 이해</li>
              </ul>
            </div>
          </div>
          <div className="model-item">
            <h4>DALL-E 3</h4>
            <p className="model-desc">텍스트 설명으로 고품질 이미지 생성</p>
            <div className="model-features">
              <strong>주요 기능:</strong>
              <ul>
                <li>창의적 이미지 생성</li>
                <li>정확한 텍스트 렌더링</li>
                <li>스타일 조정 및 변형</li>
                <li>프롬프트 이해도 향상</li>
              </ul>
            </div>
          </div>
          <div className="model-item">
            <h4>Gemini Pro Vision</h4>
            <p className="model-desc">구글의 멀티모달 AI 모델</p>
            <div className="model-features">
              <strong>주요 기능:</strong>
              <ul>
                <li>다중 이미지 동시 처리</li>
                <li>긴 형태의 비디오 이해</li>
                <li>복잡한 추론 능력</li>
                <li>코드와 수학 문제 해결</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="chapter-section">
        <h2>💡 실전 활용 사례</h2>
        <div className="use-case-grid">
          <div className="use-case-card">
            <h4>🏥 의료 진단</h4>
            <p>의료 영상(X-ray, MRI)을 분석하고 환자 기록과 결합하여 진단 보조</p>
            <div className="example">
              <strong>예:</strong> "이 X-ray 이미지를 분석하고, 환자의 증상 기록을 
              고려하여 가능성 있는 진단을 제시해 주세요."
            </div>
          </div>
          <div className="use-case-card">
            <h4>📚 교육</h4>
            <p>학생이 업로드한 수학 문제 이미지를 보고 단계별 풀이 제공</p>
            <div className="example">
              <strong>예:</strong> "이 수학 문제를 풀이하고, 각 단계를 초등학생이 
              이해할 수 있도록 설명해 주세요."
            </div>
          </div>
          <div className="use-case-card">
            <h4>🎨 디자인</h4>
            <p>텍스트 설명을 바탕으로 로고, 일러스트, 마케팅 자료 생성</p>
            <div className="example">
              <strong>예:</strong> "친환경 화장품 브랜드의 미니멀한 로고를 
              녹색과 흰색을 주로 사용하여 디자인해 주세요."
            </div>
          </div>
          <div className="use-case-card">
            <h4>🛒 전자상거래</h4>
            <p>제품 이미지를 분석하여 자동 상품 설명 생성</p>
            <div className="example">
              <strong>예:</strong> "이 가방 이미지를 보고 매력적인 상품 설명을 
              작성해 주세요. 소재, 크기, 용도를 포함해 주세요."
            </div>
          </div>
        </div>
      </section>

      <section className="chapter-section">
        <h2>🎯 멀티모달 프롬프팅 팁</h2>
        <div className="tips-box">
          <h4>효과적인 이미지 + 텍스트 프롬프트</h4>
          <div className="tip-item">
            <strong>1. 구체적인 질문:</strong>
            <div className="example">
              ❌ "이 이미지 뭐야?"<br/>
              ✅ "이 이미지에서 주요 건축 양식의 특징을 3가지 설명해 주세요."
            </div>
          </div>
          <div className="tip-item">
            <strong>2. 맥락 제공:</strong>
            <div className="example">
              "이 차트는 2023년 분기별 매출 데이터입니다. 
              가장 큰 변화가 있는 분기를 찾고 가능한 원인을 분석해 주세요."
            </div>
          </div>
          <div className="tip-item">
            <strong>3. 출력 형식 지정:</strong>
            <div className="example">
              "이 레시피 이미지를 보고 재료 목록을 표로, 
              조리 순서를 번호 매긴 목록으로 정리해 주세요."
            </div>
          </div>
        </div>
      </section>

      <section className="chapter-section">
        <h2>⚠️ 한계와 주의사항</h2>
        <div className="warning-box">
          <ul>
            <li><strong>환각(Hallucination):</strong> 이미지에 없는 내용을 생성할 수 있음</li>
            <li><strong>편향:</strong> 학습 데이터의 편향이 결과에 반영될 수 있음</li>
            <li><strong>개인정보:</strong> 얼굴이나 개인정보가 포함된 이미지 업로드 주의</li>
            <li><strong>저작권:</strong> 생성된 이미지의 상업적 사용 시 라이선스 확인 필요</li>
          </ul>
        </div>
      </section>

      <section className="chapter-section">
        <h2>🔮 다음 단계</h2>
        <p>
          다음 챕터에서는 RAG(Retrieval-Augmented Generation)에 대해 학습합니다.
          외부 지식을 활용하여 AI의 답변 품질을 향상시키는 기술을 배워봅시다.
        </p>
      </section>
    </div>
  );
};

export default Chapter5;
