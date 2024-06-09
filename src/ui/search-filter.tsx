import React from 'react';
import {  Filter, SearchNormal1 } from 'iconsax-react-native';
import { Input, TouchableOpacity, View } from '.';



type SearchFilter = {
  OnFilterPress?: ()=>void;
  showFilter?: boolean;
  inputClassName?: string;
  searchClassName?: string;
  onChange:(text:string)=>void;
  filterClassName:string

};
export const SearchFilter = ({
  OnFilterPress,
  showFilter = true,
  inputClassName,
  searchClassName,
  onChange,
  filterClassName
}: SearchFilter) => {
  return (
    <View
      className={`flex-row    items-center ${searchClassName}`}
    >
     
        <Input 
        className={` ${inputClassName}  `} 
        onChangeText={(text)=>{onChange(text)}}
        />
        {/* <SearchNormal1 color="black" size={19} /> */}
     
      {showFilter && (
        <TouchableOpacity
          className={`h-11 w-12 justify-center rounded-lg border border-white items-center ${filterClassName}` }
          onPress={OnFilterPress}
        >
          <Filter size={22} color="gray" variant="Outline" />
        </TouchableOpacity>
      )}
    </View>
  );
};
