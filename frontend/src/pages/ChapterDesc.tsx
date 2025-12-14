import { useParams } from 'react-router-dom';

const ChapterDesc = () => {
  const { chapterId } = useParams<{ chapterId: string }>();

  // 각 챕터별 설명 데이터 (기존 desc.html 참고)
  const chapterData: Record<string, { title: string; items: { name: string; description: string }[] }> = {
    ch1: {
      title: '1. Chat Completion',
      items: [
        { name: '1. Chat (Zero-Shot Prompting)', description: 'dfsaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa' },
        { name: '2. Chat Stream', description: 'Moe' },
        { name: '3. Chat (Few-Shot Prompting)', description: 'Dooley' },
        { name: '4. Chat (Chain-of-Thought Prompting)', description: 'Dooley' },
        { name: '5. Chat Memory', description: 'Dooley' },
      ],
    },
    // 다른 챕터들도 필요시 추가
  };

  const data = chapterData[chapterId || ''] || {
    title: `Chapter ${chapterId}`,
    items: [],
  };

  return (
    <>
      <h4>{data.title}</h4>
      <p>The .table-bordered class adds borders on all sides of the table and the cells:</p>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>File Name</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          {data.items.map((item, index) => (
            <tr key={index}>
              <td>{item.name}</td>
              <td>{item.description}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default ChapterDesc;
