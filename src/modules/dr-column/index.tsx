import EvoBanner from 'components/evo-banner/EvoBanner';
import Pagination from 'components/pagination/Pagination';
import DrColumn from 'components/page/dr-column';
import { DrColumnStyled, ListContentDrColumn, PaginationStyled } from './styled';
import { listDataDrColumn } from './constant';

export const DrColumnPage: React.FC = () => {
  return (
    <DrColumnStyled>
      <EvoBanner title="Dr.コラム" />
      <ListContentDrColumn>
        {listDataDrColumn.length && listDataDrColumn.map((item) => <DrColumn {...item} key={item.id} />)}
      </ListContentDrColumn>
      <PaginationStyled>
        <Pagination />
      </PaginationStyled>
    </DrColumnStyled>
  );
};
export default DrColumnPage;
