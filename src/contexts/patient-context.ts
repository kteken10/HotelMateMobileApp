import { Bundle, Patient } from 'fhir/r5';
import { createContext, useContext } from 'react';

const PatientContext = createContext<{
  patient: Patient | null;
  bundle: Bundle | null;
  expanded: boolean;
  setExpanded: React.Dispatch<React.SetStateAction<boolean>>;
  summary?: {
    medications: boolean;
    allergies: boolean;
    conditions: boolean;
    mentalHealth: boolean;
    immunizations: boolean;
    procedures: boolean;
    medicalDevices: boolean;
    results: boolean;
    pastHistoryOfIllnesses: boolean;
    socialHistory: boolean;
    functionalStatus: boolean;
    planOfCare: boolean;
    advanceDirectives: boolean;
    familyHistory: boolean;
  };
}>({
  patient: null,
  bundle: null,
  expanded: true,
  setExpanded: () => {},
});

export const usePatientContext = () => useContext(PatientContext);

export default PatientContext;