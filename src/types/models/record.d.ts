import { ServiceRequest } from 'fhir/r5';
import DoctorModel from './doctor';

export type RecordEmergencyContact = {
  name: string;
  relationship:
    | 'mother'
    | 'father'
    | 'sister'
    | 'brother'
    | 'wife'
    | 'husband'
    | 'friend'
    | 'daughter'
    | 'son'
    | 'other';
  phoneNumber: string;
  email?: string;
};

export type RecordInsuranceInfo = {
  insuranceCompany: string;
  insuranceNumber: string;
  insuranceType: 'health' | 'life' | 'car' | 'home' | 'other';
  policyDate: string;
};

export type RecordCondition = {
  name: string;
  severity: 'mild' | 'moderate' | 'severe';
  recordedOn: string;
};

export type RecordAllergy = {
  name: string;
  severity: 'mild' | 'moderate' | 'severe';
  recordedOn: string;
};

export type RecordFamilyHistory = {
  name: string;
  gender: 'male' | 'female';
  relationship: 'mother' | 'father' | 'sister' | 'brother' | 'other';
  conditions: {
    name: string;
    severity: 'mild' | 'moderate' | 'severe';
    recordedOn: string;
  }[];
};

export type RecordPrescriptionMedicationDosage = {
  qty: number;
  days: number;
  times: number;
  from: string;
  to: string;
};

export type RecordPrescriptionMedication = {
  name: string;
  qty: number;
  dosage: RecordPrescriptionMedicationDosage[];
  additionalInstructions?: string;
};

export type RecordPrescription = {
  name: string;
  number: string;
  type: string;
  recordedOn: string;
  doctor: DoctorModel;
  medications: RecordPrescriptionMedication[];
};

export type RecordVitalSign = {
  name: string;
  value: string;
  recordedOn: string;
};

export type RecordConsultation = {
  id: string;
  doctor: DoctorModel;
  reason: string;
  date: string;
  recordedOn: string;
  status: ServiceRequest['status'];
  symptoms?: {
    code: string;
    name: string;
    description: string;
    severity: 'mild' | 'moderate' | 'severe';
    recordedOn: string;
  }[];
  diagnosis?: {
    code: string;
    name: string;
  }[];
  files?: {
    name: string;
    url: string;
    type: string;
  }[];
};

export type RecordMedication = {
  name: string;
  dosage: string;
  frequency: string;
  recordedOn: string;
};

export type RecordImmunization = {
  name: string;
  number: string;
  date: string;
};

export type RecordProcedure = {
  name: string;
  date: string;
};

export type RecordResult = {
  exam: string;
  output: string;
  date: string;
};

export default interface RecordModel {
  id: string;
  firstName: string;
  lastName: string;
  birthdate: string;
  gender: 'male' | 'female';
  phoneNumber: string;
  fixedNumber?: string;
  email?: string;
  address?: string;
  photo?: string;
  locale?: string;
  recordedOn: string;
  expiredOn: string;
  maritalStatus?: 'single' | 'married' | 'divorced' | 'widowed';
  primaryDoctor?: DoctorModel;
  emergencyContacts?: RecordEmergencyContact[];
  insuranceInfo?: RecordInsuranceInfo[];
  conditions?: RecordCondition[];
  allergies?: RecordAllergy[];
  familyHistory?: RecordFamilyHistory[];
  prescriptions?: RecordPrescription[];
  vitalSigns?: RecordVitalSign[];
  consultations?: RecordConsultation[];
  medications?: RecordMedication[];
  immunizations?: RecordImmunization[];
  procedures?: RecordProcedure[];
  results?: RecordResult[];
}
