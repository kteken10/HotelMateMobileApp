import React from 'react';
import { View } from '../../ui';
import { HeaderTop } from '../../ui/drawer-top';
import { ChambreHotelCard } from '../../ui/hotel-card';
import { ChambreHotels } from '../../api/fakedata';


export const ReservationDetail = ({ route }) => {
    const { Chambreid } = route.params; 

   
    const chambre = ChambreHotels.find(chambre => chambre.id === Chambreid);

  
    
    return (
        <View className='flex flex-1  '>
            {/* <HeaderTop title='ReservationDetail'/> */}
            <ChambreHotelCard
            className=' mt-5'
            list_show={false}
                name={chambre.name}
                imageClassName='w-full'
                active={chambre.active}
                prix_par_nuit={chambre.prix_par_nuit}
                description={chambre.description}
                image_path={chambre.image_path}
                onClick={() => {
                   
                }}
            />
        </View>
    );
}
