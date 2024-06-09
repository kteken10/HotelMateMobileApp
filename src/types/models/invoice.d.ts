import { ExplanationOfBenefit, Invoice } from 'fhir/r4b';

import UserModel from './user';

export default interface InvoiceModel {
  id: string;
  number: string;
  issuedOn: string;
  status: Invoice['status'];
  items: ExplanationOfBenefit['item'];
  total?: number;
  doctor: UserModel;
}
