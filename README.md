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

### 기존 (Spring Boot)
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

### 기존 프로젝트 실행
```bash
./run_edu.sh
```

### React 프로젝트 (준비 중)
```bash
npm install
npm start
```

## 프로젝트 구조

```
├── src/                    # 기존 Spring Boot 소스
│   ├── main/
│   │   ├── java/
│   │   └── resources/
│   └── test/
└── frontend/               # React 프로젝트 (예정)
    ├── src/
    ├── public/
    └── package.json
```

## 진행 상황

- [x] GitHub 리포지토리 생성
- [ ] React 프로젝트 초기화
- [ ] 컴포넌트 구조 설계
- [ ] API 연동
- [ ] 각 챕터별 구현

## 라이선스

MIT License
