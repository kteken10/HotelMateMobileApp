export const notificationTypes = [
  'message',
  'task',
  'appointment',
  'password_change',
] as const;
export type NotificationType = (typeof notificationTypes)[number];

export default interface NotificationModel {
  id: string;
  type: NotificationType;
  by: {
    name?: string;
    photo?: string;
  };
  createdAt: string;
  readAt?: string;
}
