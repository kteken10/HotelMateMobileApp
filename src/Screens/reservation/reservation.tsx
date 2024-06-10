import React, { useState } from 'react';
import { TouchableOpacity, View, Text } from '../../ui';
import { HeaderTop } from '../../ui/drawer-top';

interface ReservationProps { }

export const Reservation = ({}: ReservationProps) => {
  const [selectedButton, setSelectedButton] = useState<string | null>(null);

  const handleButtonPress = (buttonName: string) => {
    setSelectedButton(buttonName);
  };

  return (
    <View className='flex flex-1 bg-white '>
      <HeaderTop title='Reservation' />
      <View className='flex-row bg-neutral-200 mt-6 justify-between mx-4 rounded-3xl py-1 px-1'>
        <TouchableOpacity
          className={selectedButton === 'Standard' ? 'bg-white py-2 items-center  rounded-3xl w-1/3' : 'items-center py-2 w-1/3 '}
          onPress={() => handleButtonPress('Standard')}
        >
          <Text className=''>Standard</Text>
        </TouchableOpacity>  
        <TouchableOpacity
          className={selectedButton === 'Suite' ? 'bg-white py-2 items-center   rounded-3xl w-1/3' : 'items-center py-2 w-1/3 '}
          onPress={() => handleButtonPress('Suite')}
        >
          <Text className=''>Suite</Text>
        </TouchableOpacity>
        <TouchableOpacity
          className={selectedButton === 'Room' ? 'bg-white py-2 items-center  rounded-3xl w-1/3' : 'items-center py-2 w-1/3 '}
          onPress={() => handleButtonPress('Room')}
        >
          <Text className=''>Room</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
