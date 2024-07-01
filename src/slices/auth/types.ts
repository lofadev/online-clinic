import { UserModel } from 'models';

/* --- STATE --- */
export interface AuthState {
  loading: boolean;
  error?: RepoErrorType | null;
  authenticated: boolean;
  user_profile: UserModel | null;
  step_register: number;
  temp_token: string;
  isVerifyEmail: boolean;
  registerEmail: string;
}

export enum RepoErrorType {
  RESPONSE_ERROR = 1,
  USER_NOT_FOUND = 2,
  USERNAME_EMPTY = 3,
  USER_HAS_NO_REPO = 4,
  GITHUB_RATE_LIMIT = 5,
}
