import './Chapter.css';

const Chapter6 = () => {
  return (
    <div className="chapter">
      <div className="chapter-header">
        <span className="chapter-badge">Chapter 6</span>
        <h1>RAG (Retrieval-Augmented Generation)</h1>
      </div>
      
      <section className="chapter-section">
        <h2>🎯 학습 목표</h2>
        <ul>
          <li>RAG의 개념과 필요성 이해하기</li>
          <li>RAG 시스템의 작동 원리 배우기</li>
          <li>벡터 데이터베이스와 임베딩 이해하기</li>
          <li>RAG 활용 사례 및 구현 방법 알아보기</li>
        </ul>
      </section>

      <section className="chapter-section">
        <h2>📚 RAG란?</h2>
        <p>
          RAG(Retrieval-Augmented Generation)는 외부 지식 베이스에서 관련 정보를 
          검색(Retrieve)하여 AI 모델의 응답 생성(Generation)을 향상시키는 기술입니다.
        </p>
        <div className="info-box">
          <h3>RAG가 필요한 이유</h3>
          <ul>
            <li><strong>최신 정보:</strong> 모델 학습 이후의 새로운 정보 활용</li>
            <li><strong>전문 지식:</strong> 특정 도메인의 깊이 있는 지식 제공</li>
            <li><strong>정확성:</strong> 실제 문서 기반 답변으로 환각 감소</li>
            <li><strong>추적 가능성:</strong> 답변의 출처를 명확히 제시</li>
          </ul>
        </div>
      </section>

      <section className="chapter-section">
        <h2>⚙️ RAG 작동 원리</h2>
        <div className="process-flow vertical">
          <div className="process-step">
            <div className="step-number">1</div>
            <div className="step-content">
              <h4>질문 입력</h4>
              <p>사용자가 질문을 입력</p>
              <div className="example">"우리 회사의 2023년 매출은 얼마인가요?"</div>
            </div>
          </div>
          <div className="process-arrow vertical">↓</div>
          <div className="process-step">
            <div className="step-number">2</div>
            <div className="step-content">
              <h4>임베딩 생성</h4>
              <p>질문을 벡터로 변환</p>
              <div className="example">[0.234, -0.891, 0.456, ...]</div>
            </div>
          </div>
          <div className="process-arrow vertical">↓</div>
          <div className="process-step">
            <div className="step-number">3</div>
            <div className="step-content">
              <h4>관련 문서 검색</h4>
              <p>벡터 데이터베이스에서 유사한 문서 찾기</p>
              <div className="example">재무보고서, 실적 발표 자료 등</div>
            </div>
          </div>
          <div className="process-arrow vertical">↓</div>
          <div className="process-step">
            <div className="step-number">4</div>
            <div className="step-content">
              <h4>컨텍스트 구성</h4>
              <p>검색된 문서를 프롬프트에 포함</p>
              <div className="example">"다음 정보를 참고하여 답변해 주세요: [문서 내용]"</div>
            </div>
          </div>
          <div className="process-arrow vertical">↓</div>
          <div className="process-step">
            <div className="step-number">5</div>
            <div className="step-content">
              <h4>응답 생성</h4>
              <p>LLM이 컨텍스트 기반으로 답변 생성</p>
              <div className="example">"2023년 매출은 500억 원입니다. (출처: 2023 연간보고서)"</div>
            </div>
          </div>
        </div>
      </section>

      <section className="chapter-section">
        <h2>🔢 임베딩과 벡터 데이터베이스</h2>
        <div className="grid-2">
          <div className="card">
            <h3>임베딩 (Embedding)</h3>
            <p>텍스트를 의미를 담은 숫자 벡터로 변환</p>
            <div className="example">
              <strong>텍스트:</strong> "고양이"<br/>
              <strong>벡터:</strong> [0.2, 0.8, -0.3, ...]<br/><br/>
              유사한 의미의 단어는 가까운 벡터값을 가짐<br/>
              "고양이" ≈ "cat" ≈ "야옹이"
            </div>
          </div>
          <div className="card">
            <h3>벡터 데이터베이스</h3>
            <p>벡터 간 유사도 검색에 최적화된 DB</p>
            <div className="example">
              <strong>대표적인 벡터 DB:</strong>
              <ul className="small-list">
                <li>Pinecone</li>
                <li>Weaviate</li>
                <li>Qdrant</li>
                <li>Chroma</li>
                <li>FAISS</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="chapter-section">
        <h2>🏗️ RAG 시스템 구축 단계</h2>
        <div className="build-steps">
          <div className="build-step">
            <h4>Step 1: 데이터 준비</h4>
            <p>문서 수집 및 전처리 (PDF, 웹페이지, 데이터베이스 등)</p>
          </div>
          <div className="build-step">
            <h4>Step 2: 청킹 (Chunking)</h4>
            <p>문서를 적절한 크기의 조각으로 분할</p>
            <div className="example">
              문단 단위, 문장 단위, 또는 고정 토큰 수로 분할
            </div>
          </div>
          <div className="build-step">
            <h4>Step 3: 임베딩 생성</h4>
            <p>각 청크를 벡터로 변환</p>
            <div className="example">
              OpenAI Embeddings, Sentence Transformers 등 사용
            </div>
          </div>
          <div className="build-step">
            <h4>Step 4: 벡터 저장</h4>
            <p>생성된 벡터를 벡터 데이터베이스에 저장</p>
          </div>
          <div className="build-step">
            <h4>Step 5: 검색 및 생성</h4>
            <p>사용자 질문에 대해 관련 문서 검색 후 응답 생성</p>
          </div>
        </div>
      </section>

      <section className="chapter-section">
        <h2>💼 실전 활용 사례</h2>
        <div className="use-case-grid">
          <div className="use-case-card">
            <h4>📖 기업 문서 검색</h4>
            <p>
              내부 문서, 매뉴얼, 정책 등을 RAG로 구축하여 
              직원들의 질문에 즉시 답변
            </p>
            <div className="benefit">
              <strong>효과:</strong> 검색 시간 90% 단축
            </div>
          </div>
          <div className="use-case-card">
            <h4>🎓 교육 플랫폼</h4>
            <p>
              교재, 강의 자료를 기반으로 학생 질문에 
              맞춤형 설명 제공
            </p>
            <div className="benefit">
              <strong>효과:</strong> 학습 효율 향상
            </div>
          </div>
          <div className="use-case-card">
            <h4>💬 고객 지원</h4>
            <p>
              제품 매뉴얼, FAQ를 활용한 
              24/7 자동 고객 응대
            </p>
            <div className="benefit">
              <strong>효과:</strong> 고객 만족도 증가
            </div>
          </div>
          <div className="use-case-card">
            <h4>📊 리서치</h4>
            <p>
              논문, 보고서 데이터베이스에서 
              관련 연구 자동 검색 및 요약
            </p>
            <div className="benefit">
              <strong>효과:</strong> 연구 속도 향상
            </div>
          </div>
        </div>
      </section>

      <section className="chapter-section">
        <h2>🛠️ RAG 최적화 팁</h2>
        <div className="tips-list">
          <div className="tip-item">
            <h4>1. 적절한 청크 크기</h4>
            <p>너무 작으면 맥락 손실, 너무 크면 관련성 저하</p>
            <div className="recommendation">권장: 300-500 토큰</div>
          </div>
          <div className="tip-item">
            <h4>2. 하이브리드 검색</h4>
            <p>벡터 검색 + 키워드 검색 조합</p>
            <div className="recommendation">정확도와 재현율 모두 향상</div>
          </div>
          <div className="tip-item">
            <h4>3. 리랭킹 (Re-ranking)</h4>
            <p>검색된 문서를 관련성 순으로 재정렬</p>
            <div className="recommendation">최상위 결과의 품질 개선</div>
          </div>
          <div className="tip-item">
            <h4>4. 메타데이터 활용</h4>
            <p>날짜, 카테고리 등의 메타데이터로 필터링</p>
            <div className="recommendation">검색 정확도 향상</div>
          </div>
        </div>
      </section>

      <section className="chapter-section">
        <h2>⚠️ 주의사항</h2>
        <div className="warning-box">
          <ul>
            <li><strong>품질 관리:</strong> 소스 문서의 품질이 답변 품질에 직접 영향</li>
            <li><strong>비용:</strong> 임베딩 생성과 벡터 저장에 비용 발생</li>
            <li><strong>업데이트:</strong> 문서 변경 시 벡터 재생성 필요</li>
            <li><strong>개인정보:</strong> 민감한 정보 처리 시 보안 주의</li>
          </ul>
        </div>
      </section>

      <section className="chapter-section">
        <h2>🔮 다음 단계</h2>
        <p>
          다음 챕터에서는 파인튜닝에 대해 학습합니다.
          특정 작업이나 도메인에 맞게 AI 모델을 최적화하는 방법을 배워봅시다.
        </p>
      </section>
    </div>
  );
};

export default Chapter6;
