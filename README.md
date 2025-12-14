# AI 교육 플랫폼 (AI Education Platform)

Spring Boot + Thymeleaf 기반 AI 교육 플랫폼을 React로 전환한 프로젝트입니다.

## 📚 프로젝트 소개

9개 챕터로 구성된 체계적인 AI 학습 콘텐츠를 제공하는 교육 플랫폼입니다.
채팅, 프롬프트 엔지니어링, 멀티모달, RAG 등 최신 AI 기술을 다룹니다.

### 학습 챕터

1. **AI 소개** - 인공지능의 기본 개념과 발전 역사
2. **AI 기초와 채팅** - 대화형 AI의 작동 원리와 활용법
3. **프롬프트 엔지니어링** - 효과적인 프롬프트 작성 기법
4. **고급 프롬프팅** - 프롬프트 체이닝과 최적화
5. **멀티모달 AI** - 이미지, 음성, 텍스트를 결합한 AI
6. **RAG** - 검색 기반 생성 AI 시스템
7. **파인튜닝** - 특정 작업을 위한 모델 최적화
8. **AI 윤리와 안전** - 책임감 있는 AI 활용
9. **실전 프로젝트** - 실제 문제 해결 프로젝트

## 🚀 시작하기

### 필요 조건

- Node.js 18 이상
- npm 또는 yarn

### 설치 및 실행

```bash
# 의존성 설치
npm install

# 개발 서버 실행
npm run dev

# 빌드
npm run build

# 빌드된 결과 미리보기
npm run preview
```

## 🛠️ 기술 스택

- **React 19** - UI 라이브러리
- **TypeScript** - 타입 안전성
- **Vite** - 빌드 도구
- **React Router** - 클라이언트 라우팅
- **CSS3** - 스타일링

## 📂 프로젝트 구조

```
src/
├── components/        # 재사용 가능한 컴포넌트
├── layouts/          # 레이아웃 컴포넌트
│   └── MainLayout.tsx
├── pages/            # 페이지 컴포넌트
│   ├── Home.tsx
│   └── chapters/     # 챕터별 페이지
│       ├── Chapter1.tsx
│       ├── Chapter2.tsx
│       ├── ...
│       └── Chapter9.tsx
├── App.tsx           # 메인 앱 컴포넌트
└── main.tsx          # 진입점
```

## 🎨 주요 기능

- ✅ 9개 챕터로 구성된 체계적인 학습 과정
- ✅ 반응형 디자인 (모바일, 태블릿, 데스크톱 지원)
- ✅ 직관적인 네비게이션
- ✅ 풍부한 학습 콘텐츠와 예시
- ✅ 실전 프로젝트 가이드

## 📝 라이선스

MIT License

## 🤝 기여

프로젝트 개선을 위한 기여를 환영합니다!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request
