import React from 'react';
import { Outlet, useParams, useLocation } from 'react-router-dom';
import Chapter1Fragment from './ch1/Chapter1Fragment';
import Chapter2Fragment from './ch2/Chapter2Fragment';
import Chapter3Fragment from './ch3/Chapter3Fragment';
import Chapter4Fragment from './ch4/Chapter4Fragment';
import Chapter5Fragment from './ch5/Chapter5Fragment';
import Chapter6Fragment from './ch6/Chapter6Fragment';
import Chapter7Fragment from './ch7/Chapter7Fragment';
import Chapter8Fragment from './ch8/Chapter8Fragment';
import Chapter9Fragment from './ch9/Chapter9Fragment';

const Chapter = () => {
  const { chapterId } = useParams<{ chapterId: string }>();
  const location = useLocation();

  // 챕터별 fragments 컴포넌트 매핑
  const fragmentComponents: Record<string, () => React.JSX.Element> = {
    ch1: Chapter1Fragment,
    ch2: Chapter2Fragment,
    ch3: Chapter3Fragment,
    ch4: Chapter4Fragment,
    ch5: Chapter5Fragment,
    ch6: Chapter6Fragment,
    ch7: Chapter7Fragment,
    ch8: Chapter8Fragment,
    ch9: Chapter9Fragment,
  };

  const FragmentComponent = chapterId ? fragmentComponents[chapterId] : null;

  // 현재 경로가 챕터 인덱스(/ch1, /ch2 등)인지 확인
  // 하위 경로(/ch1/desc, /ch1/1_chat 등)가 있으면 Outlet 표시
  const isIndexPath = location.pathname === `/${chapterId}`;

  // index 경로이고 FragmentComponent가 있으면 fragments 표시, 아니면 Outlet 표시
  if (isIndexPath && FragmentComponent) {
    return <FragmentComponent />;
  }

  return <Outlet />;
};

export default Chapter;

