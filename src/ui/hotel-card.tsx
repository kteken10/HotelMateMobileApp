import React from 'react';
import { Text, TouchableOpacity, Image } from '.';

interface Chambre {
  id?: number;
  name: string;
  active: boolean;
  prix_par_nuit: string;
  description: string;
  image_path: any;
}

export const ChambreHotelCard = ({ name, image_path, active, prix_par_nuit }: Chambre) => {
         
  
  return (
    <TouchableOpacity className='w-full h-58 border bg-white border-neutral-100 mb-4 px-2 py-6 rounded-2xl '>
      <Image source={image_path} style={{ height: 160 }} /> 
      <Text className='text-charcoal-400 mt-4'>{name}</Text>
      <Text className='ml-auto' font='LTSaeada-ExtraLight'>{prix_par_nuit} FCFA/nuit</Text> 
    </TouchableOpacity>
  );
};
