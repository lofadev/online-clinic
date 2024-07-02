/* --- STATE --- */

import { IAddress, IUserModel, PrefectureProps } from 'models/user.model';

export interface UserState {
  loading: boolean;
  prefectureList: PrefectureProps[];
  userProfile: Partial<IUserModel> | undefined;
  addresses: IAddress[] | undefined;
}

export enum RepoErrorType {
  RESPONSE_ERROR = 1,
  USER_NOT_FOUND = 2,
  USERNAME_EMPTY = 3,
  USER_HAS_NO_REPO = 4,
  GITHUB_RATE_LIMIT = 5,
}
