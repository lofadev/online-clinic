import { Badge } from 'antd';
import { FC } from 'react';

import { useHistory } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { translations } from 'locales/translations';

import IconDetailHeader, { PropsIconDetail } from '../icon-detail-header';
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
  const { t } = useTranslation();
  const { header } = translations;

  const handleNavigate = () => {
    if (path && path !== 'user') {
      history.push(props?.path);
    }
  };

  return (
    <IconStyle onClick={handleNavigate} className={props?.children ? 'extendIcon' : 'nonExtendIcon'} key={id}>
      <Badge count={notice} offset={[-8, 13]} size="small">
        <ImageStyle src={icon} alt="icon" />
      </Badge>

      {children?.length && (
        <SecondIcon className="secondIcon">
          {children?.map((iconDetail) => <IconDetailHeader {...iconDetail} key={iconDetail.id} />)}

          {path === 'user' ? (
            <LogoutButton>
              <ImgLogout src="https://navismithapis-cdn.com/img/logout.svg" alt="icon" />

              <TextLogout>{t(header.account.logout)}</TextLogout>
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
