/**
 * 백엔드 API 클라이언트
 * 
 * 스트리밍 응답과 일반 응답을 모두 지원하는 중앙화된 API 관리
 */

/**
 * 스트리밍 응답을 처리하는 함수
 * 
 * @param endpoint - API 엔드포인트 (예: '/ch1/stream')
 * @param body - 요청 본문 (FormData 또는 URLSearchParams)
 * @param onChunk - 스트리밍 데이터가 도착할 때마다 호출되는 콜백 함수
 * @param headers - 추가 헤더 (선택사항)
 * @returns 전체 응답 텍스트
 */
export const streamRequest = async (
  endpoint: string,
  body: FormData | URLSearchParams,
  onChunk: (text: string) => void,
  headers?: Record<string, string>
): Promise<string> => {
  try {
    const defaultHeaders: Record<string, string> = {};
    
    // URLSearchParams인 경우에만 Content-Type 설정
    if (body instanceof URLSearchParams) {
      defaultHeaders['Content-Type'] = 'application/x-www-form-urlencoded';
    }
    // FormData는 브라우저가 자동으로 Content-Type 설정

    const response = await fetch(endpoint, {
      method: 'POST',
      headers: { ...defaultHeaders, ...headers },
      body: body,
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const reader = response.body?.getReader();
    const decoder = new TextDecoder('utf-8');

    if (!reader) {
      throw new Error('Response body is not readable');
    }

    let fullText = '';
    while (true) {
      const { value, done } = await reader.read();
      if (done) break;
      
      const chunk = decoder.decode(value, { stream: true });
      fullText += chunk;
      
      // 실시간으로 콜백 호출
      onChunk(fullText);
    }

    return fullText;
  } catch (error) {
    console.error('Streaming request error:', error);
    throw error;
  }
};

/**
 * 일반 POST 요청 (스트리밍 없음)
 * 
 * @param endpoint - API 엔드포인트
 * @param body - 요청 본문
 * @param headers - 추가 헤더
 * @returns 응답 텍스트
 */
export const postRequest = async (
  endpoint: string,
  body: FormData | URLSearchParams | Record<string, any>,
  headers?: Record<string, string>
): Promise<string> => {
  try {
    const defaultHeaders: Record<string, string> = {};
    let requestBody: BodyInit;

    if (body instanceof FormData) {
      // FormData는 그대로 사용
      requestBody = body;
    } else if (body instanceof URLSearchParams) {
      defaultHeaders['Content-Type'] = 'application/x-www-form-urlencoded';
      requestBody = body;
    } else {
      defaultHeaders['Content-Type'] = 'application/json';
      requestBody = JSON.stringify(body);
    }

    const response = await fetch(endpoint, {
      method: 'POST',
      headers: { ...defaultHeaders, ...headers },
      body: requestBody,
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    return await response.text();
  } catch (error) {
    console.error('Post request error:', error);
    throw error;
  }
};

/**
 * GET 요청
 * 
 * @param endpoint - API 엔드포인트
 * @param headers - 추가 헤더
 * @returns 응답 텍스트
 */
export const getRequest = async (
  endpoint: string,
  headers?: Record<string, string>
): Promise<string> => {
  try {
    const response = await fetch(endpoint, {
      method: 'GET',
      headers: headers,
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    return await response.text();
  } catch (error) {
    console.error('Get request error:', error);
    throw error;
  }
};

/**
 * Blob 응답을 받는 POST 요청 (오디오, 이미지 등)
 * 
 * @param endpoint - API 엔드포인트
 * @param body - 요청 본문
 * @param headers - 추가 헤더
 * @returns Blob 응답
 */
export const postBlobRequest = async (
  endpoint: string,
  body: FormData | URLSearchParams,
  headers?: Record<string, string>
): Promise<Blob> => {
  try {
    const defaultHeaders: Record<string, string> = {};
    
    // URLSearchParams인 경우에만 Content-Type 설정
    if (body instanceof URLSearchParams) {
      defaultHeaders['Content-Type'] = 'application/x-www-form-urlencoded';
    }
    // FormData는 브라우저가 자동으로 Content-Type 설정

    const response = await fetch(endpoint, {
      method: 'POST',
      headers: { ...defaultHeaders, ...headers },
      body: body,
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    return await response.blob();
  } catch (error) {
    console.error('Blob request error:', error);
    throw error;
  }
};

export default {
  streamRequest,
  postRequest,
  getRequest,
  postBlobRequest,
};
