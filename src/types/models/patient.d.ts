import RecordModel from './record';

export default interface PatientModel {
  firstName: string;
  lastName: string;
  birthdate: string;
  phoneNumber: string;
  gender: string;
  email?: string;
  nidPassport?: string;
  photo?: string;
  maritalStatus?: string;
  notificationsSms?: boolean;
  notificationsEmail?: boolean;
  pin?: string;
  termsAccepted?: boolean;
  terms: object = {};
  confirmed?: boolean;
  consent: object = {};
  deleted?: boolean;
  deleteReason: object = {};
  dependant: RecordModel;
  records: RecordModel[];
}
