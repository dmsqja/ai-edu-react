import { useParams, Outlet } from 'react-router-dom';
import './Chapter.css';

const Chapter = () => {
  const { chapterId } = useParams<{ chapterId: string }>();

  const chapterNames: Record<string, string> = {
    ch1: 'Chapter 1: Chat',
    ch2: 'Chapter 2: Prompt Template',
    ch3: 'Chapter 3: Advisors',
    ch4: 'Chapter 4: Multimodality',
    ch5: 'Chapter 5: Speech',
    ch6: 'Chapter 6: Tools',
    ch7: 'Chapter 7: Embedding',
    ch8: 'Chapter 8: RAG',
    ch9: 'Chapter 9: MCP',
  };

  return (
    <div className="chapter">
      <h1>{chapterNames[chapterId || ''] || 'Chapter'}</h1>
      <Outlet />
    </div>
  );
};

export default Chapter;

