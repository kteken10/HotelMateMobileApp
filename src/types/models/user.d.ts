import DepartmentModel from './department';

export const userInfoTypes = ['email', 'phone', 'landline', 'fax'] as const;
export interface UserInfo {
  type: (typeof userInfoTypes)[number];
  value: string;
}

export const userRoles = [
  'admin',
  'doctor',
  'user',
  'cashier',
  'nurse',
] as const;
export type UserRole = (typeof userRoles)[number];

export default interface UserModel {
  id: string;
  roles: UserRole[];
  department: DepartmentModel;
  firstName: string;
  lastName: string;
  prefix?: string;
  suffix?: string;
  name?: string;
  email: string;
  phoneNumber: string;
  photo?: string;
  language: string;
  notificationsSms?: boolean;
  notificationsEmail?: boolean;
  contacts: UserInfo[];
  createdAt: string;
  active?: boolean;
}
