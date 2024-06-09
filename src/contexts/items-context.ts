import React, {  createContext } from 'react';

interface ItemsContextProps {
    genderItems: { label: string, icon: string }[];
    setGenderItems: React.Dispatch<React.SetStateAction<{ label: string, icon: string }[]>>;
    userMaritalStatus : { label:string , icon:string }[];
    setUserMaritalStatus : React.Dispatch<React.SetStateAction<{ label:string , icon:string }[]>>;
    userEmail: string;
    setUserEmail: React.Dispatch<React.SetStateAction<string>>;
    userPhoneNumber: string;
    setUserPhoneNumber: React.Dispatch<React.SetStateAction<string>>;
    userGender: string;
    setUserGender: React.Dispatch<React.SetStateAction<string>>;
  }
  
   const ItemsContext = createContext<ItemsContextProps>({
    genderItems: [],
    setGenderItems: () => {},
    userMaritalStatus : [],
    setUserMaritalStatus : () => {},
    userEmail: '',
    setUserEmail: () => {},
    userPhoneNumber: '',
    setUserPhoneNumber: () => {},
    userGender: '',
    setUserGender: () => {},
   
    
  });

 export default ItemsContext;