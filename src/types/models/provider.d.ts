export default interface ProviderModel {
  id: string;
  name: string;
  photo?: string;
  city: string;
  address: string;
  poBox: string;
  email: string;
  contacts: string[];
  openingHours: { open: string; close: string }[][];
  services: { department: string; services: string[] }[];
}
