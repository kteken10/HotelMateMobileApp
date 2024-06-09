import React, { createContext } from 'react'

 interface UserInfoContextProps {
//   firstName: string;
//   setFirstName: React.Dispatch<React.SetStateAction<string>>;
  phoneNumber: string[];
  setPhoneNumber: React.Dispatch<React.SetStateAction<string[]>>;
//   relationship: string;
//   setRelationship: React.Dispatch<React.SetStateAction<string>>;
//   gender: string;
//   setGender: React.Dispatch<React.SetStateAction<string>>;
  email: string[];
  setEmail: React.Dispatch<React.SetStateAction<string[]>>;
  addUserPhoneNumber: (newNumber: string) => void;
  removeUserPhoneNumber: (index: number) => void;
  updateUserPhoneNumber: (index: number, newNumber: string) => void;
  addUserEmail: (newEmail: string) => void;
  removeUserEmail: (index: number) => void;
  updateUserEmail: (index: number, newEmail: string) => void;
 }
 
 const UserInfoContext= createContext<UserInfoContextProps>({
//  firstName: '',
//  setFirstName: () => {},
 phoneNumber: [],
 setPhoneNumber: () => {},
//  relationship: '',
//  setRelationship: () => {},
//  gender: '',
//  setGender: () => {},
 email: [],
 setEmail: () => {},
 removeUserPhoneNumber: () => {},
 updateUserPhoneNumber: () => {},
 addUserPhoneNumber: () => {},
  addUserEmail: () => {},
  removeUserEmail: () => {},
  updateUserEmail: () => {},


 }) 

export default UserInfoContext;