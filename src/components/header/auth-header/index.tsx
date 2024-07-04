import { translations } from 'locales/translations';
import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import RoutesName from 'routes/constant';
import styled from 'styled-components';

const HeaderStyled = styled.header`
  background-color: #13c4ce;
  color: #fff;
  padding: 16px 20px;
  > ul {
    display: flex;
    align-items: center;
    width: 860px;
    margin: 0 auto;
    li {
      font-weight: 700;
      font-size: 10px;
      margin-right: 20px;
      display: flex;
      align-items: center;

      span {
        font-size: 14px;
        margin: 0 4px;
      }
    }
  }
`;

const PasswordChangeStyled = styled.div`
  margin-left: auto;
  a span {
    font-size: 10px !important;
    font-weight: 700;
    cursor: pointer;
  }
`;

type AuthHeaderProps = {
  first_name: string;
  last_name: string;
  medical_number?: number;
};

export const AuthHeader: FC<AuthHeaderProps> = ({ first_name, last_name, medical_number }) => {
  const { t } = useTranslation();
  const { userInfomation } = translations;
  return (
    <HeaderStyled>
      <ul>
        <li>
          <span>{first_name && last_name ? `${first_name} ${last_name} ` : ''}</span>
          {t(userInfomation.my_page)}
        </li>
        <li>
          {t(userInfomation.medical_number)}
          <span>{medical_number && medical_number}</span>
        </li>
        <PasswordChangeStyled>
          <Link to={RoutesName.CHANGE}>
            <span>{t(userInfomation.change_password)}</span>
          </Link>
        </PasswordChangeStyled>
      </ul>
    </HeaderStyled>
  );
};
