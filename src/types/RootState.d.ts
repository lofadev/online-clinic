import { GithubRepoFormState } from 'modules/HomePage/Features/GithubRepoForm/slice/types';
import { RouterState } from 'redux-first-history';
import { AppointmentState } from 'slices/appointment/types';
import { AuthState } from 'slices/auth/types';
import { BroadcastState } from 'slices/broadcast/types';
import { ErrorState } from 'slices/errors/types';
import { InvoiceState } from 'slices/invoice/types';
import { LoadingState } from 'slices/loading/types';
import { NotificationState } from 'slices/notification/types';
import { ServicesState } from 'slices/services/types';
import { ThemeState } from 'slices/theme/types';
import { UserState } from 'slices/user/types';

/*
  Because the redux-injectors injects your reducers asynchronously somewhere in your code
  You have to declare them here manually
  Properties are optional because they are injected when the components are mounted sometime in your application's life.
  So, not available always
*/
export interface RootState {
  theme: ThemeState;
  errors: ErrorState;
  loading: LoadingState;
  auth: AuthState;
  githubRepoForm: GithubRepoFormState;
  invoice: InvoiceState;
  broadcast: BroadcastState;
  router: RouterState;
  services: ServicesState;
  appointment: AppointmentState;
  user: UserState;
  notification: NotificationState;
}
