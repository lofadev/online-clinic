import history from 'configs/history';
import { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import RoutesName from 'routes/constant';
import { useAuth } from 'slices';
import FormConfirm from './conponent/FormConfirm';
import FormSendMail from './conponent/FormSendMail';

export const ForgotPassword: React.FC = () => {
  const { sendEmailConfirm, changePasswordSuccess, resetChangePassword, resetSendMail } = useAuth();
  useEffect(() => {
    if (changePasswordSuccess) {
      history.push(RoutesName.TOP);
      resetChangePassword();
      resetSendMail();
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
