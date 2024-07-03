import { IUserModel } from 'models';

/* --- STATE --- */
export interface AuthState {
  loading: boolean;
  error?: RepoErrorType | null;
  sendEmailConfirm: boolean;
  authenticated: boolean;
  step_register: number;
  temp_token: string;
  isVerifyEmail: boolean;
  registerEmail: string;
  user_profile: IUserModel | null;
  changePasswordSuccess: boolean;
  registerSuccess: boolean;
}

export enum RepoErrorType {
  RESPONSE_ERROR = 1,
  USER_NOT_FOUND = 2,
  USERNAME_EMPTY = 3,
  USER_HAS_NO_REPO = 4,
  GITHUB_RATE_LIMIT = 5,
}
