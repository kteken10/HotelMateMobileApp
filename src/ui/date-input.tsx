import React, { useState } from 'react';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import moment from 'moment';

import { View ,Text, TouchableOpacity} from '.';
import { CalendarDateIcon } from '../assets/icons';
import { capitalizeFirstLetter } from '../utils/string';
import BoxIcon from './box-icon';
interface Props {
  value?: Date;
  label?: string;
  isVisible?: boolean;
  onChange?: (value: Date) => void;
  name?: string;
  maximumDate?: Date;
  minimumDate?: Date;
  placeholder?: string;
  disabled?: boolean;
  className?:string;
  labelClassName?:string
 
}

export default function DateInput({
  
  value,
  onChange,
  isVisible,
  label,
  className,
  labelClassName,

  maximumDate,
  minimumDate,
  placeholder = moment().subtract(10, 'year').toDate().toLocaleDateString(),
  disabled = false,

}: Props) {
  const [show, setShow] = useState(isVisible);

  const handleConfirm = (date: Date) => {
    setShow(false);
    onChange?.(date);
  };

  const formatter = () => {
    if (value != null) {
      return value.toLocaleDateString();
    }
  };

  return (
    <View
    className='flex bg-white'>
     
      <Text font='LTSaeada-Medium'
      className= {`mobile:text-sm tablet:text-lg laptop:text-lg text-gray-500   font-medium ${labelClassName}`}>
      {capitalizeFirstLetter(label ?? '')}
            </Text>
      <View
      className={`flex-row  items-center border py-2 rounded-lg justify-between px-2 ${className} border-charcoal-100`}
      
      >
        <BoxIcon
        disabled={disabled}
        onPress={() => {
            setShow(true);
          }}>
          <CalendarDateIcon />
        </BoxIcon>
      <TouchableOpacity onPress={()=>{
        setShow(true)
      }}>
      <Text className='text-sm' style={{ color: value != null ? '#333333' : '#979797'}}>
      {value != null ? formatter() : placeholder}
      </Text>
      </TouchableOpacity>
      
             

      </View>
      <DateTimePickerModal
        mode="date"
        date={value}
        isVisible={show}
        onConfirm={handleConfirm}
        onCancel={() => {
          setShow(false);
        }}
        minimumDate={minimumDate}
        maximumDate={maximumDate}
      />
    </View>
  );
}