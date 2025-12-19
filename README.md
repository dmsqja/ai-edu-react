# AI Education Platform - React Migration

Spring Boot + Thymeleaf 기반 AI 교육 플랫폼을 React로 전환하는 프로젝트입니다.

## 프로젝트 개요

9개 챕터로 구성된 Spring AI 학습 콘텐츠를 React 기반 프론트엔드로 재구현합니다.

### 주요 기능
- Chapter 1: Chat (채팅 기능)
- Chapter 2: Prompt Template (프롬프트 템플릿)
- Chapter 3: Advisors (어드바이저)
- Chapter 4: Multimodality (멀티모달)
- Chapter 5: Speech (음성 처리)
- Chapter 6: Tools (도구/함수 호출)
- Chapter 7: Embedding (임베딩)
- Chapter 8: RAG (Retrieval Augmented Generation)
- Chapter 9: MCP (Model Context Protocol)

## 기술 스택

### 백엔드 (Spring Boot)
- Java
- Spring Boot
- Thymeleaf
- Spring AI

### 전환 예정 (React)
- React
- TypeScript (예정)
- React Router
- Axios / Fetch API

## 시작하기

### Spring Boot 프로젝트 실행
```bash
./run_edu_latest.sh
```

이 스크립트는 `edu/` 디렉토리에서 최신 소스를 빌드하고 실행합니다.

### React 프로젝트
```bash
cd frontend
npm install
npm run dev
```

프로젝트는 `http://localhost:5173`에서 실행됩니다.

## 프로젝트 구조

```
├── edu/                    # Spring Boot 소스 (최신 버전)
│   ├── src/
│   │   ├── main/
│   │   │   ├── java/
│   │   │   └── resources/
│   │   └── test/
│   ├── build.gradle
│   └── gradlew
└── frontend/               # React 프로젝트
    ├── src/
    ├── public/
    └── package.json
```

## 진행 상황

- [x] GitHub 리포지토리 생성
- [x] React 프로젝트 초기화
- [x] 컴포넌트 구조 설계
- [ ] 프론트엔드 UI 구현 (진행 중)
- [ ] API 연동 (백엔드 구현 후 예정)
- [ ] 각 챕터별 구현

## 주의사항

⚠️ **현재는 프론트엔드 UI만 구현 중입니다.**
- 백엔드 API는 아직 구현되지 않았습니다.
- API 연동은 백엔드 구현 후 진행 예정입니다.
- API 엔드포인트 목록은 `frontend/API_TODO.md`를 참고하세요.

## 라이선스

MIT License
