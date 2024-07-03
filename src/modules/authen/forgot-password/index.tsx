import { Helmet } from 'react-helmet-async';
import { useAuth } from 'slices';

import { useHistory } from 'react-router-dom';
import { useEffect } from 'react';
import RoutesName from 'routes/constant';
import FormConfirm from './conponent/FormConfirm';
import FormSendMail from './conponent/FormSendMail';

export const ForgotPassword: React.FC = () => {
  const { sendEmailConfirm, changePasswordSuccess, resetChangePassword } = useAuth();
  const history = useHistory();
  useEffect(() => {
    if (changePasswordSuccess) {
      history.push(RoutesName.TOP);
      resetChangePassword();
    }
  }, [changePasswordSuccess]);
  return (
    <>
      <Helmet>
        <title>Login</title>
        <meta name="description" content="Login" />
      </Helmet>
      {!sendEmailConfirm ? <FormSendMail email="" /> : <FormConfirm secretCode="" newPassword="" confirmPassword="" />}
    </>
  );
};
