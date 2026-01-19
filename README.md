# AI Education Platform - React Migration

Spring Boot + Thymeleaf 기반 AI 교육 플랫폼을 **React**로 전환하는 프로젝트입니다.

## 📚 프로젝트 개요

기존 서버 사이드 렌더링(Thymeleaf) 방식을 **React 기반 SPA**로 재구현하여 
현대적인 프론트엔드 개발 방식을 학습합니다.

> **Note**: 백엔드 소스코드는 비공개이며, 실행 가능한 JAR 파일만 제공됩니다.

### 📖 챕터 구성
- **Chapter 1**: Chat (기본 채팅, 스트리밍, Few-Shot, Chain of Thought, Memory)
- **Chapter 2**: Prompt Template (템플릿, 출력 구조화)
- **Chapter 3**: Advisors (어드바이저, 재귀 어드바이저)
- **Chapter 4**: Multimodality (이미지 생성/분석, 비디오 분석)
- **Chapter 5**: Speech (TTS, STT, 음성 채팅)
- **Chapter 6**: Tools (날짜/시간, 고객 조회, 추천, 접근 제어)
- **Chapter 7**: Embedding (텍스트/호텔 임베딩, 벡터 DB, ChatMemory)
- **Chapter 8**: RAG (ETL Pipeline, Query Transformation)
- **Chapter 9**: MCP (Model Context Protocol)

## 🛠 기술 스택

### 백엔드 (제공됨)
- Spring Boot (실행 파일만 제공)
- Spring AI
- RESTful API

### 프론트엔드 (구현 대상)
- **React 19.2.0** + **TypeScript**
- **Vite** (빌드 도구)
- **React Router 7.10.1**
- **Axios / Fetch API** (API 통신)

## 📋 필수 요구사항

### 프론트엔드 개발
- **Node.js**: v22.14.0 이상 (LTS 권장)

### 백엔드 실행 (선택)
- **Java Runtime**: JRE 17 이상 (JDK 불필요)

### 확인 방법
```bash
node --version   # v22.14.0
npm --version    # 10.9.0
java --version   # 17 이상 (백엔드 실행 시에만)
```

> **참고**: 
> - Node.js 설치 시 npm은 자동으로 설치됩니다.
> - 프론트엔드만 개발하려면 Node.js만 있으면 됩니다.
> - 백엔드는 JAR 파일로 제공되어 별도 빌드가 불필요합니다.

## 🚀 시작하기

### 1. 프로젝트 클론
```bash
git clone <repository-url>
cd 02_ai_edu_react
```

### 2. 백엔드 서버 실행
```bash
# 포트 80에서 실행
./start_backend.sh

# 종료
./stop_backend.sh

# 로그 확인
tail -f backend.log
```

### 3. 프론트엔드 개발 서버 실행
```bash
cd frontend

# 처음 실행 시 의존성 설치
npm install

# 개발 서버 시작 (http://localhost:5173)
npm run dev
```

### 4. 환경 설정
프론트엔드에서 백엔드 API URL을 설정합니다:

```bash
cd frontend
cp .env.example .env.development
```

`.env.development` 파일에서 필요시 수정:
```env
VITE_API_URL=http://localhost:80
```

## 📁 프로젝트 구조

```
├── edu-0.0.1-SNAPSHOT.jar        # 백엔드 실행 파일 (JAR)
├── start_backend.sh              # 백엔드 시작 스크립트
├── stop_backend.sh               # 백엔드 종료 스크립트
├── backend.log                   # 백엔드 로그 파일
│
└── frontend/                     # React 프론트엔드 (개발 대상)
    ├── src/
    │   ├── pages/               # 챕터별 페이지
    │   │   ├── ch1/            # Chapter 1 (Chat)
    │   │   ├── ch2/            # Chapter 2 (Prompt Template)
    │   │   ├── ch3/            # Chapter 3 (Advisors)
    │   │   ├── ch4/            # Chapter 4 (Multimodality)
    │   │   ├── ch5/            # Chapter 5 (Speech)
    │   │   ├── ch6/            # Chapter 6 (Tools)
    │   │   ├── ch7/            # Chapter 7 (Embedding)
    │   │   ├── ch8/            # Chapter 8 (RAG)
    │   │   └── ch9/            # Chapter 9 (MCP)
    │   ├── components/          # 공통 컴포넌트
    │   │   ├── ChatUI.tsx      # 채팅 UI
    │   │   ├── Layout.tsx      # 레이아웃
    │   │   └── Sidebar.tsx     # 사이드바
    │   ├── api/                 # API 클라이언트
    │   │   └── client.ts
    │   ├── App.tsx              # 메인 앱
    │   └── main.tsx             # 진입점
    ├── .env.example             # 환경변수 예시
    ├── .env.development         # 개발 환경 설정 (git 제외)
    ├── vite.config.ts           # Vite 설정
    ├── tsconfig.json            # TypeScript 설정
    └── package.json             # 의존성 관리
```

> **Note**: 
> - `edu/` 폴더(백엔드 소스)는 git에 포함되지 않습니다.
> - JAR 파일만 제공되어 별도 빌드 없이 실행 가능합니다.

## ✅ 구현 현황

### Thymeleaf → React 전환
- [x] React 프로젝트 초기화 (Vite + TypeScript)
- [x] 라우팅 설정 (React Router)
- [x] 레이아웃 및 사이드바 컴포넌트화
- [x] 공통 ChatUI 컴포넌트
- [x] **Chapter 1**: Chat 기능 (5개 페이지)
- [x] **Chapter 2**: Prompt Template (5개 페이지)
- [x] **Chapter 3**: Advisors (3개 페이지)
- [x] **Chapter 4**: Multimodality (4개 페이지)
- [x] **Chapter 5**: Speech (6개 페이지)
- [x] **Chapter 6**: Tools (4개 페이지)
- [x] **Chapter 7**: Embedding (4개 페이지)
- [x] **Chapter 8**: RAG (8개 페이지)
- [x] **Chapter 9**: MCP (2개 페이지)
- [x] 백엔드 API 연동 (Fetch API, Axios)
- [x] 환경변수 관리 (.env)
- [x] 프록시 설정 (Vite)

### 총 41개 페이지 완료 🎉

## 🔧 개발 가이드

### 프론트엔드 개발
```bash
cd frontend

# 개발 서버 (HMR 지원)
npm run dev

# 프로덕션 빌드
npm run build

# 빌드 결과 미리보기
npm run preview

# 린트 검사
npm run lint
```

### 프론트엔드 → 백엔드 구조
```
Frontend (React)          Backend (Spring Boot)
localhost:5173      →     localhost:80

/ch1/chat          ──→    /ch1/chat (API)
/ch2/template      ──→    /ch2/template (API)
...
```

Vite 프록시가 자동으로 백엔드로 요청을 전달합니다.

## 📝 API 문서

프론트엔드는 다음 백엔드 엔드포인트를 사용합니다:
- `/ch1/*` - Chat 관련 API
- `/ch2/*` - Prompt Template API
- `/ch3/*` - Advisors API
- `/ch4/*` - Multimodality API
- `/ch5/*` - Speech API
- `/ch6/*` - Tools API
- `/ch7/*` - Embedding API
- `/ch8/*` - RAG API
- `/ch9/*` - MCP API

상세 API 목록은 백엔드 소스의 컨트롤러를 참고하세요.

## 🐛 문제 해결

### 백엔드가 시작되지 않음
```bash
# 로그 확인
tail -f backend.log

# 포트 80이 사용 중인지 확인
lsof -i :80

# 다른 포트로 실행 (start_backend.sh 수정 필요)
```

### 포트 충돌 시
백엔드가 포트 80을 사용합니다. 다른 포트 사용 시:
1. `start_backend.sh`에서 포트 변경
2. `frontend/.env.development`에서 `VITE_API_URL` 수정

### Node.js 버전 문제
```bash
# nvm 사용 시
nvm install 22
nvm use 22

# 또는
nvm install --lts
nvm use --lts
```

### npm install 실패
```bash
# 캐시 삭제 후 재시도
npm cache clean --force
rm -rf node_modules package-lock.json
npm install
```

### CORS 에러
Vite 프록시가 설정되어 있어 CORS 문제가 발생하지 않아야 합니다.
만약 발생한다면:
1. 백엔드가 실행 중인지 확인
2. `vite.config.ts`의 프록시 설정 확인
3. 개발 서버 재시작

## 📚 학습 포인트

이 프로젝트를 통해 다음을 학습할 수 있습니다:

- ✅ **React + TypeScript** 기반 SPA 개발
- ✅ **React Router**를 활용한 라우팅
- ✅ **Component 설계** 및 재사용
- ✅ **API 통신** (Fetch, Axios)
- ✅ **State 관리** (useState, useRef, useEffect)
- ✅ **환경변수 관리**
- ✅ **Vite** 빌드 도구 사용
- ✅ **서버 사이드 렌더링 → SPA 전환** 경험

## 📄 라이선스

MIT License

---

## 💡 참고사항

- 백엔드 소스코드는 비공개입니다.
- JAR 파일로 제공되는 백엔드는 학습 목적으로만 사용하세요.
- 프론트엔드 코드는 자유롭게 수정하고 학습하실 수 있습니다.
