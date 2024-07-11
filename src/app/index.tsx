import { notification as noficationAnt } from 'antd';
import Loading from 'components/loading/Loading';
import { BROADCAST_CHANNEL } from 'constant';
import { translations } from 'locales/translations';
import React, { ReactNode, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import AppRoutes from 'routes';
import { useAuth } from 'slices/auth';
import { useBroadcast } from 'slices/broadcast';
import { useError } from 'slices/errors';
import { useNotification } from 'slices/notification';
import { STORAGE, getLocalStorage } from 'utils/storage';

export const App: React.FC = () => {
  const { t, i18n } = useTranslation();
  const { errors, notification, success } = translations;
  const [loading, setLoading] = React.useState(true);
  const { notif, setNotif, resetNotif } = useNotification();
  const { error } = useError();
  const { logout, getMe } = useAuth();
  const { setBroadcastChannel, boardcastChannel } = useBroadcast();

  useEffect(() => {
    const userToken = getLocalStorage(STORAGE.USER_TOKEN);

    if (userToken) {
      getMe();
    }

    const timer = setTimeout(() => setLoading(false), 3000);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  useEffect(() => {
    const broadcast = new BroadcastChannel('auth');
    setBroadcastChannel({ broadcast });

    return () => {
      broadcast.close();
    };
  }, []);

  useEffect(() => {
    if (notif) {
      noficationAnt[notif.type]({
        message: t(notification[notif.message]),
        description: typeof notif.description === 'string' ? t(success[notif.description]) : notif.description,
        duration: 2,
      });
      setTimeout(() => {
        resetNotif();
      }, 2000);
    }
  }, [notif, i18n.language]);

  useEffect(() => {
    if (boardcastChannel) {
      boardcastChannel.addEventListener('message', (event) => {
        const userToken = getLocalStorage(STORAGE.USER_TOKEN);
        if (event.data === BROADCAST_CHANNEL.LOGIN && userToken) {
          getMe();
        }
        if (event.data === BROADCAST_CHANNEL.LOGOUT) {
          logout();
        }
      });
    }
  }, [boardcastChannel]);

  useEffect(() => {
    if (error) {
      let resultError: string | ReactNode = '';
      const responseData = error.response?.data as any;

      if (responseData?.meta.error) {
        resultError = t(errors[responseData.meta.error]);
      } else if (responseData?.meta.errors) {
        resultError = Object.values(responseData.meta.errors).map((d: any) => <p>{t(errors[d])}</p>);
      }

      setNotif({
        type: 'error',
        message: 'failure',
        description: <p>{resultError}</p>,
      });
    }
  }, [error]);

  if (loading) {
    return <Loading />;
  }
  return <AppRoutes />;
};
