# API 연동 TODO

현재 프론트엔드 UI만 구현 중이며, 백엔드 API는 추후 구현 예정입니다.

## 구현 예정 API 목록

각 챕터별로 필요한 API 엔드포인트를 아래에 정리합니다.

### Chapter 1: Chat
- [ ] POST `/api/ch1/chat` - 기본 채팅
- [ ] POST `/api/ch1/chat/stream` - 스트리밍 채팅
- [ ] POST `/api/ch1/chat/few-shot` - Few-shot 채팅
- [ ] POST `/api/ch1/chat/chain-of-thought` - Chain of Thought 채팅
- [ ] POST `/api/ch1/chat/memory` - 메모리 포함 채팅

### Chapter 2: Prompt Template
- [ ] POST `/api/ch2/prompt-template` - 프롬프트 템플릿
- [ ] POST `/api/ch2/list-output` - 리스트 출력
- [ ] POST `/api/ch2/map-output` - 맵 출력
- [ ] POST `/api/ch2/bean-output` - 빈 출력
- [ ] POST `/api/ch2/parameterized-type-reference` - 파라미터화된 타입 참조

### Chapter 3: Advisors
- [ ] POST `/api/ch3/advisor` - 어드바이저
- [ ] POST `/api/ch3/advisor/stream` - 스트리밍 어드바이저
- [ ] POST `/api/ch3/recursive-advisors` - 재귀 어드바이저

### Chapter 4: Multimodality
- [ ] POST `/api/ch4/generate-image-url` - 이미지 URL 생성
- [ ] POST `/api/ch4/generate-image` - 이미지 생성
- [ ] POST `/api/ch4/image-analysis` - 이미지 분석
- [ ] POST `/api/ch4/video-analysis` - 비디오 분석

### Chapter 5: Speech
- [ ] POST `/api/ch5/text-to-speech` - 텍스트-음성 변환
- [ ] POST `/api/ch5/text-to-speech-chat` - 채팅용 텍스트-음성
- [ ] POST `/api/ch5/text-to-speech-chat-stream` - 스트리밍 텍스트-음성
- [ ] POST `/api/ch5/speech-to-text` - 음성-텍스트 변환
- [ ] POST `/api/ch5/speech-to-text-chat` - 채팅용 음성-텍스트
- [ ] POST `/api/ch5/speech-to-text-chat-voice` - 음성 입력 채팅

### Chapter 6: Tools
- [ ] POST `/api/ch6/date-time` - 날짜/시간 도구
- [ ] POST `/api/ch6/customer-inquiry` - 고객 문의
- [ ] POST `/api/ch6/recommendation` - 추천 시스템
- [ ] POST `/api/ch6/access-system` - 접근 시스템

### Chapter 7: Embedding
- [ ] POST `/api/ch7/text-embedding` - 텍스트 임베딩
- [ ] POST `/api/ch7/hotel-embedding` - 호텔 임베딩
- [ ] POST `/api/ch7/chat-pgvector` - PGVector 채팅
- [ ] POST `/api/ch7/chat-jdbc` - JDBC 채팅

### Chapter 8: RAG
- [ ] POST `/api/ch8/etl-pipeline` - ETL 파이프라인
- [ ] POST `/api/ch8/rag-chat` - RAG 채팅
- [ ] POST `/api/ch8/rag-chat-prompt-template` - 프롬프트 템플릿 RAG
- [ ] POST `/api/ch8/raa-rag-chat` - RAA RAG 채팅
- [ ] POST `/api/ch8/cqt-rag-chat` - CQT RAG 채팅
- [ ] POST `/api/ch8/rqt-rag-chat` - RQT RAG 채팅
- [ ] POST `/api/ch8/tqt-rag-chat` - TQT RAG 채팅
- [ ] POST `/api/ch8/mqe-rag-chat` - MQE RAG 채팅

### Chapter 9: MCP
- [ ] POST `/api/ch9/mcp-webmvc-chat` - MCP WebMVC 채팅
- [ ] POST `/api/ch9/mcp-webmvc-chat-stream` - 스트리밍 MCP WebMVC 채팅

## 참고사항

- API 클라이언트는 `src/api/client.ts`에 정의되어 있습니다.
- 백엔드 API 구현 후 `vite.config.ts`의 프록시 설정을 활성화하세요.
- 각 페이지 컴포넌트에서 API 호출 시 `apiClient`를 사용하세요.

