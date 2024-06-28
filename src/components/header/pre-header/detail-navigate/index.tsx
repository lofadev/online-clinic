import { FC } from 'react';
import { useHistory } from 'react-router-dom';
import { ContentDetailNav, DetailNavigateStyles, ImageStyle } from './styled';

export type PropsDetailNavigate = {
  id: number;
  content: string;
  path?: string;
  disable?: boolean;
};
const DetailNavigate: FC<PropsDetailNavigate> = (props) => {
  const { id, content, path, disable } = props;
  const history = useHistory();
  const handleClick = () => {
    if (path && !disable) {
      history.push(path);
    }
  };
  return (
    <DetailNavigateStyles key={id} className={disable ? 'disable' : ''} onClick={handleClick}>
      <ContentDetailNav>{content}</ContentDetailNav>
      {!disable && (
        <ImageStyle src="https://clinic.dmm.com/img/icon/ico_arrow_black.svg?id=2490df8f31d876b77b30" alt="arrow" />
      )}
    </DetailNavigateStyles>
  );
};
export default DetailNavigate;
