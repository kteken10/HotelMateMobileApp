import React, { createContext } from 'react';

export interface EmergencyContact {
  firstName: string;
  lastName: string;
  phoneNumber: string[];
  relationship: string;
  gender: string;
  email: string[];
}

interface EmergencyContextProps {
  EmergencyContactFirstName: string;
  setEmergencyContactFirstName: React.Dispatch<React.SetStateAction<string>>;
  EmergencyContactLastName: string;
  setEmergencyContactLastName: React.Dispatch<React.SetStateAction<string>>;
  EmergencyContactPhoneNumber: string[];
  setEmergencyContactPhoneNumber: React.Dispatch<React.SetStateAction<string[]>>;
  EmergencyContactEmail: string[];
  setEmergencyContactEmail: React.Dispatch<React.SetStateAction<string[]>>;
  EmergencyContactRelationship: string;
  setEmergencyContactRelationship: React.Dispatch<React.SetStateAction<string>>;
  EmergencyContactGender: string;
  setEmergencyContactGender: React.Dispatch<React.SetStateAction<string>>;
  emergencyContacts: EmergencyContact[];
  addEmergencyContact: (contact: EmergencyContact) => void;
  removeEmergencyContact: (index: number) => void; 
  updateEmergencyContact: (index: number | undefined, contact: EmergencyContact) => void;
  removePhoneNumber: (contactIndex: number, phoneIndex: number) => void;
  updatePhoneNumber: (contactIndex: number, phoneIndex: number, newNumber: string) => void; 
  removeEmail: (contactIndex: number, emailIndex: number) => void;
  updateEmail: (contactIndex: number, emailIndex: number, newEmail: string) => void;
}

const EmergencyContext = createContext<EmergencyContextProps>({
  EmergencyContactFirstName: '',
  setEmergencyContactFirstName: () => {},
  EmergencyContactLastName: '',
  setEmergencyContactLastName: () => {},
  EmergencyContactPhoneNumber: [],
  setEmergencyContactPhoneNumber: () => {},
  EmergencyContactEmail: [],
  setEmergencyContactEmail: () => {},
  EmergencyContactRelationship: '',
  setEmergencyContactRelationship: () => {},
  EmergencyContactGender: '',
  setEmergencyContactGender: () => {},
  emergencyContacts: [],
  addEmergencyContact: () => {},
  removeEmergencyContact: () => {},
  updateEmergencyContact: () => {},
  removePhoneNumber: () => {},
  updatePhoneNumber: () => {},
  removeEmail: () => {},
  updateEmail: () => {},
});

export default EmergencyContext;