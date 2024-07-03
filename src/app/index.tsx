import Loading from 'components/loading/Loading';
import { BROADCAST_CHANNEL } from 'constant';
import { useEffect, useState } from 'react';
import AppRoutes from 'routes';
import { useAuth } from 'slices/auth';
import { useBroadcast } from 'slices/broadcast';
import { STORAGE, getLocalStorage } from 'utils/storage';

export const App: React.FC = () => {
  const [loading, setLoading] = useState(false);

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
