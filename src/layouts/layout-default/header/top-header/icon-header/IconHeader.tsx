import { Badge } from 'antd';
import { FC } from 'react';

import { useHistory } from 'react-router-dom';

import IconDetailHeader, { PropsIconDetail } from '../icon-detail-header/IconDetailHeader';
import { IconStyle, ImageStyle, ImgLogout, LogoutButton, TextLogout, SecondIcon } from './style';

export type PropsIconHeader = {
  id: number;
  icon: string;
  notice: number;
  path: string;
  children?: PropsIconDetail[];
};

const IconHeader: FC<PropsIconHeader> = (props) => {
  const { id, icon, notice, path, children } = props;
  const history = useHistory();

  const handleNavigate = () => {
    if (path && path !== 'user') {
      history.push(props?.path);
    }
  };

  return (
    <IconStyle onClick={handleNavigate} className={props?.children ? 'extendIcon' : 'nonExtendIcon'} key={id}>
      <Badge count={notice} offset={[-13, 13]}>
        <ImageStyle src={icon} alt="icon" />
      </Badge>

      {children?.length && (
        <SecondIcon className="secondIcon">
          {children?.map((iconDetail) => <IconDetailHeader {...iconDetail} key={iconDetail.id} />)}

          {path === 'user' ? (
            <LogoutButton>
              <ImgLogout src="https://navismithapis-cdn.com/img/logout.svg" alt="icon" />

              <TextLogout>ログアウト</TextLogout>
            </LogoutButton>
          ) : (
            ''
          )}
        </SecondIcon>
      )}
    </IconStyle>
  );
};

export default IconHeader;
