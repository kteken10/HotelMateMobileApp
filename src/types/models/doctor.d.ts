import ProviderModel from './provider';

export default interface DoctorModel {
  id: string;
  photo?: string;
  firstName: string;
  lastName: string;
  name?: string;
  specialty: string;
  orderNumber: string;
  provider: ProviderModel;
}
