import Loading from 'components/loading/Loading';
import { notification } from 'antd';
import { BROADCAST_CHANNEL } from 'constant';
import React, { useEffect } from 'react';
import AppRoutes from 'routes';
import { useAuth } from 'slices/auth';
import { useBroadcast } from 'slices/broadcast';
import { useNotification } from 'slices/notification';
import { STORAGE, getLocalStorage } from 'utils/storage';

export const App: React.FC = () => {
  const [loading, setLoading] = React.useState(true);
  const { notif } = useNotification();

  const { getMe } = useAuth();
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
        description: notif.description,
        message: notif.message,
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
          // handle Logout
        }
      });
    }
  }, [boardcastChannel]);

  if (loading) {
    return <Loading />;
  }
  return <AppRoutes />;
};
