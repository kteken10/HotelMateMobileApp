import React, { useEffect, useState } from 'react';
import { TouchableOpacity, View, Text, ScrollView } from '../../ui';
import { HeaderTop } from '../../ui/drawer-top';
import axios from 'axios';
import { ChambreHotelCard } from '../../ui/hotel-card';
import { Import } from 'iconsax-react-native';
import { ChambreHotels } from '../../api/fakedata';

interface Chambre {
  id:string;
  name: string;
  active: boolean;
  prix_par_nuit: string;
  description: string;
  image_path: string;
  navigation:any
  stars:number
}

interface ReservationProps {
  navigation:any
}

export const Reservation = ({navigation}: ReservationProps) => {
  const [selectedButton, setSelectedButton] = useState<string | null>(null);
  const [chambres, setChambres] = useState<Chambre[]>([]);

  useEffect(() => {
    axios.get('https://sx99c93m-5000.use2.devtunnels.ms/chambres')
      .then(response => {
        setChambres(response.data);
      })
      .catch(error => {
        console.error('Une erreur est survenue lors de la récupération des chambres :', error);
      });
  }, []);

  const handleButtonPress = (buttonName: string) => {
    setSelectedButton(buttonName);
  };

  return (
    <View className='flex flex-1 '>
      <HeaderTop title='Reservation'/>
      <View className='flex-row bg-white mt-6 justify-between mx-4 rounded-3xl py-1 px-1'>
        <TouchableOpacity
          className={selectedButton === 'Standard' ? 'bg-neutral-300 py-2 items-center  rounded-3xl w-1/3' : 'items-center py-2 w-1/3 '}
          onPress={() => handleButtonPress('Standard')}
        >
          <Text className=''>Standard</Text>
        </TouchableOpacity>  
        <TouchableOpacity
          className={selectedButton === 'Suite' ? 'bg-neutral-300 py-2 items-center   rounded-3xl w-1/3' : 'items-center py-2 w-1/3 '}
          onPress={() => handleButtonPress('Suite')}
        >
          <Text className=''>Deluxe</Text>
        </TouchableOpacity>
        <TouchableOpacity
          className={selectedButton === 'Room' ? 'bg-neutral-300 py-2 items-center  rounded-3xl w-1/3' : 'items-center py-2 w-1/3 '}
          onPress={() => handleButtonPress('Room')}
        >
          <Text className=''>Suite</Text>
        </TouchableOpacity>
      </View>
      <ScrollView className='mt-4 mx-4'>
        {ChambreHotels.map(chambre => (
          <ChambreHotelCard
          className='px-2 py-6'
          imageClassName='w-1/2'
            key={chambre.id}
            onClick={()=>{
              navigation.navigate('ReservationDetail', {
                Chambreid: chambre.id,
              })
            }}
            {...chambre}
          />
        ))}
      </ScrollView>
    </View>
  );
};
