import axios from 'axios';

/**
 * API 클라이언트
 * 
 * TODO: 백엔드 API 구현 후 사용 예정
 * 현재는 프론트엔드 UI만 구현 중
 */
const apiClient = axios.create({
  baseURL: '/api', // 백엔드 API 엔드포인트 (구현 예정)
  headers: {
    'Content-Type': 'application/json',
  },
});

export default apiClient;

