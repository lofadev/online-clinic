import { FC } from 'react';

import DetailMainFooter, { PropsDetailMainFooter } from './DetailMainFooter';
import { MainFooterStyle } from './style';

const listDataMainFooter: PropsDetailMainFooter[] = [
  {
    id: 1,
    title: 'DMMオンラインクリニック　お問い合わせ',
    children: [{ id: 1, content: 'お問い合わせ', path: '/path1' }],
  },
  {
    id: 2,
    title: 'DMMオンラインクリニック　規約',
    children: [
      { id: 1, content: '特定商法取引法に基づく表記', path: '/path2' },
      { id: 2, content: '受診支援サービス 利用規約', path: '/path3' },
      { id: 3, content: '受診支援サービス プライバシーポリシー', path: '/path4' },
      {
        id: 4,
        content: '福利厚生サービス 利用規約',
        path: '/path5',
      },
      {
        id: 5,
        content: '提携医療法人',
        path: '/path6',
      },
    ],
  },
  {
    id: 3,
    title: 'お得な情報',
    children: [
      {
        id: 1,
        content: 'メールマガジン',
        subContent: 'お得な情報を無料でお届けします。',
        path: '/path7',
      },
      {
        id: 2,
        content: 'DMMアフィリエイト',
        subContent: 'DMMの商品を紹介して広告収入をゲット！',
        path: '/path8',
      },
    ],
  },
];

const MainFooter: FC = () => {
  return (
    <MainFooterStyle>
      {listDataMainFooter.length && listDataMainFooter.map((data) => <DetailMainFooter {...data} key={data.id} />)}
    </MainFooterStyle>
  );
};

export default MainFooter;
