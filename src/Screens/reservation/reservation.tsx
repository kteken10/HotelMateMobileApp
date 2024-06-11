import React, { useEffect, useState } from 'react';
import { TouchableOpacity, View, Text, ScrollView } from '../../ui';
import { HeaderTop } from '../../ui/drawer-top';
import axios from 'axios';
import { ChambreHotelCard } from '../../ui/hotel-card';
import { Import } from 'iconsax-react-native';
import { ChambreHotels } from '../../api/fakedata';

interface Chambre {
  id: number;
  name: string;
  active: boolean;
  prix_par_nuit: string;
  description: string;
  image_path: string;
}

interface ReservationProps {}

export const Reservation = ({}: ReservationProps) => {
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
    <View className='flex flex-1 bg-white'>
      <HeaderTop title='Reservation'/>
      <View style={{ flexDirection: 'row', backgroundColor: 'bg-neutral-200', marginTop: 6, justifyContent: 'space-between', marginHorizontal: 4, borderRadius: 20, paddingVertical: 10, paddingHorizontal: 10 }}>
        <TouchableOpacity
          style={selectedButton === 'Standard' ? { backgroundColor: 'white', paddingVertical: 10, alignItems: 'center', borderRadius: 20, width: '33%' } : { alignItems: 'center', paddingVertical: 10, width: '33%' }}
          onPress={() => handleButtonPress('Standard')}
        >
          <Text style={selectedButton === 'Standard' ? {} : {}} tx='standard'/>
        </TouchableOpacity>  
        <TouchableOpacity
          style={selectedButton === 'Suite' ? { backgroundColor: 'white', paddingVertical: 10, alignItems: 'center', borderRadius: 20, width: '33%' } : { alignItems: 'center', paddingVertical: 10, width: '33%' }}
          onPress={() => handleButtonPress('Suite')}
        >
          <Text style={selectedButton === 'Suite' ? {} : {}} tx='deluxe'/>
        </TouchableOpacity>
        <TouchableOpacity
          style={selectedButton === 'Room' ? { backgroundColor: 'white', paddingVertical: 10, alignItems: 'center', borderRadius: 20, width: '33%' } : { alignItems: 'center', paddingVertical: 10, width: '33%' }}
          onPress={() => handleButtonPress('Room')}
        >
          <Text style={selectedButton === 'Room' ? {} : {}} tx='suite'/>
        </TouchableOpacity>
      </View>
      
      <ScrollView className='mt-4 mx-4'>
        {ChambreHotels.map(chambre => (
          <ChambreHotelCard
            key={chambre.id}
            {...chambre}
          />
        ))}
      </ScrollView>
    </View>
  );
};
