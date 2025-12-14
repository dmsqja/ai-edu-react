import { useParams } from 'react-router-dom';
import './ChapterDesc.css';

const ChapterDesc = () => {
  const { chapterId } = useParams<{ chapterId: string }>();

  return (
    <div className="chapter-desc">
      <div className="api-notice">
        <p>⚠️ <strong>참고:</strong> 현재 프론트엔드 UI만 구현 중입니다.</p>
        <p>백엔드 API는 추후 구현 예정입니다. (API_TODO.md 참고)</p>
      </div>
      <p>Chapter {chapterId} 설명 페이지입니다.</p>
      <p>각 챕터의 세부 내용이 여기에 표시됩니다.</p>
    </div>
  );
};

export default ChapterDesc;

