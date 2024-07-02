interface IMeta {
  success: 1 | 0;
  status: boolean;
  error?: string | null;
  errors?: object;
  code: ResponseCode;
  message: string;
}
export interface IResponse<T> {
  meta: IMeta;
  data: T;
}
