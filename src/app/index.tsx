import { notification } from 'antd';
import Loading from 'components/loading/Loading';
import { BROADCAST_CHANNEL } from 'constant';
import { translations } from 'locales/translations';
import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import AppRoutes from 'routes';
import { useAuth } from 'slices/auth';
import { useBroadcast } from 'slices/broadcast';
import { useError } from 'slices/errors';
import { useNotification } from 'slices/notification';
import { STORAGE, getLocalStorage } from 'utils/storage';

export const App: React.FC = () => {
  const [loading, setLoading] = React.useState(true);
  const { notif, setNotif } = useNotification();
  const { error } = useError();

  const { t } = useTranslation();
  const { errors } = translations;
  const { getMe, logout } = useAuth();
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
      notification[notif.type]({
        message: notif.message,
        description: notif.description,
        duration: 2,
      });
    }
  }, [notif]);

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
      let resultError: string = '';
      const responseData = error.response?.data as any;

      if (responseData?.meta.error) {
        resultError = t(errors[responseData.meta.error]);
      } else if (responseData?.meta.errors) {
        resultError = Object.values(responseData.meta.errors)
          .map((d: any) => t(errors[d]))
          .join('\n');
      }

      setNotif({
        type: 'error',
        message: t(errors.title),
        description: <p>{resultError}</p>,
      });
    }
  }, [error]);

  if (loading) {
    return <Loading />;
  }
  return <AppRoutes />;
};
