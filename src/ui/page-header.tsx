import React from 'react';
import { type TextStyle} from 'react-native';
import { View } from './view';
import {Text} from './text'
import { capitalizeFirstLetter } from '../utils/string';
interface Props {
  title?: string;
  message?: string;
  phoneNumber?: string;
  lastMessage?: string;
  titleClassName?: string
  className:string;
  subtitle?: string;
  icon

}
export default function PageHeader({
  title = '',
  message = '',
 
 className,
  titleClassName,
  icon
 
}: Props) {
  return (
    <View
      className={`${className} flex flex-1`}>
      <View className='flex-row'>
        <Text
          className={`${titleClassName}  text-3xl font-bold  text-center`}
        >
          {title}
        </Text>

        <View className='ml-auto'>
         {icon}
        </View>

      </View>

      {message?  <Text
        className='text-xm text-center mt-4'
      >
        {capitalizeFirstLetter(message)}
      </Text>:null}
     
     




    </View>
  );
}

