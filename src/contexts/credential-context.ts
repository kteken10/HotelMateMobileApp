import { createContext } from 'react';
type CredentialContextProps={
   
    phoneNumber:string;
   
    setPhoneNumber:(phoneNumber:string)=>void;
   
}

export const CredentialContext=createContext<CredentialContextProps>({
   
    phoneNumber:'',
   
    setPhoneNumber:()=>{},
   

})

