import { FC } from 'react';

import {
  BottomFooterStyle,
  ContentBottomFooter,
  CoppyRight,
  ItemContentBottomFooter,
  ItemContentBottomFooterNoneBorder,
} from './style';

const BottomFooter: FC = () => {
  return (
    <BottomFooterStyle>
      <ContentBottomFooter>
        <ItemContentBottomFooterNoneBorder href="/path1" target="_blank">
          会社概要
        </ItemContentBottomFooterNoneBorder>

        <ItemContentBottomFooter href="/path2" target="_blank">
          プレスリリース
        </ItemContentBottomFooter>

        <ItemContentBottomFooter href="/path3" target="_blank">
          会員規約
        </ItemContentBottomFooter>

        <ItemContentBottomFooter href="/path4" target="_blank">
          個人情報保護に関して
        </ItemContentBottomFooter>

        <ItemContentBottomFooter href="/path5" target="_blank">
          特定商取引法に基づく表示
        </ItemContentBottomFooter>

        <ItemContentBottomFooter href="/path6" target="_blank">
          事業提携・事業譲渡(M&A)
        </ItemContentBottomFooter>

        <ItemContentBottomFooter href="/path7" target="_blank">
          採用情報
        </ItemContentBottomFooter>
      </ContentBottomFooter>

      <CoppyRight>Copyright © since 1998 DMM All Rights Reserved.</CoppyRight>
    </BottomFooterStyle>
  );
};

export default BottomFooter;
