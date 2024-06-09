export default interface PrescriberModel {
  id: string;
  firstName: string;
  lastName: string;
  name?: string;
  gender: 'male' | 'female';
  registrationNo: string;
  specialty: string;
  photo?: string;
  phoneNumber: string;
  email: string;
  address: string;
  recordedOn: string;
  expiredOn: string;
}
