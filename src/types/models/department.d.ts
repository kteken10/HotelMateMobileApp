import ServiceModel from './service';

export default interface DepartmentModel {
  id: string;
  name: string;
  code: string;
  type?: string;
  services: ServiceModel[];
  createdAt: string;
  updatedAt: string;
  active?: boolean;
}
