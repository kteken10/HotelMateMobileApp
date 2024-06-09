import React from "react";

import { ArrowDown2 as NArrowDown2, ProfileCircle as NProfileCircle} from "iconsax-react-native";
import { styled } from "nativewind";

import { View,Text ,TouchableOpacity } from ".";


interface Patient {
  prefix: string;
  name: string;
  gender: string;
  age: number;
}


interface DependantCardProps {
  patient: Patient;
  profileColor:string
  onDropPress?:()=>void
  className?:string;
  showIcon?:boolean
  onCardPress?:()=>void
  showSupp?:boolean
  showBorder?:boolean
  infoColor?:boolean
  dropColor?:boolean
}


const ProfileCircle=styled(NProfileCircle)
const ArrowDown2=styled(NArrowDown2)
export const DependantCard = ({ patient,profileColor,onDropPress ,showIcon=true ,className,onCardPress,showSupp=true,showBorder=true,infoColor,dropColor=false}: DependantCardProps) => {

  return (
    
    <TouchableOpacity 
    onPress={onCardPress}
    className={`${className} 
    flex flex-row 
     rounded-lg py-3 px-4 items-center
     ${showBorder?'border border-neutral-200':''}
      `}
    >
     
      <View className="flex flex-row w-2/3 items-center">
      <View 
      className=
      {`border border-neutral-300 w-10 h-10  self-center justify-center rounded-full items-center bg-neutral-200 mr-4`
    }
    >
       <ProfileCircle size={32}  variant="Bulk"  color={profileColor}/>
      
      
      </View>

      <View className="flex flex-col">
      <Text className={ ` ${infoColor? 'text-white':'text-black'}  text-lg font-medium `}
      >
        {patient.prefix} {patient.name}
        </Text>
      {showSupp?  <Text className="text-gray-500 text-sm ">{patient.gender} • {patient.age} years</Text>:null}
     


      </View>

      </View>

      <View className="flex w-1/3">

      {showIcon? 
      <TouchableOpacity className={`ml-auto w-6 h-6 ${dropColor ? 'bg-white/40':''} flex items-center rounded-md justify-center`} onPress={onDropPress}>
      <ArrowDown2  size={19} className= {`${dropColor ?'text-white':'text-black'}`}  />
      </TouchableOpacity>:null
     

      }

      </View>

    </TouchableOpacity>
  );
};
