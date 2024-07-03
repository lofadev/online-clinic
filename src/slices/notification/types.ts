type NotificationType = 'success' | 'info' | 'warning' | 'error';

export interface NotificationParams {
  description: string;
  type: NotificationType;
  message: string;
}

export type NotificationState = {
  notif: NotificationParams | undefined;
};
