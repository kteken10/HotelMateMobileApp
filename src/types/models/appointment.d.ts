import { Appointment } from 'fhir/r5';

import DoctorModel from './doctor';

export default interface AppointmentModel {
  id: string;
  date: string;
  doctor: DoctorModel;
  status: Appointment['status'];
  reasons: string;
  otherInfo?: string;
}
