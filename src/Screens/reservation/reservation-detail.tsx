import React from 'react';
import { View ,Text} from '../../ui';
import { HeaderTop } from '../../ui/drawer-top';
import { ChambreHotelCard } from '../../ui/hotel-card';
import { ChambreHotels } from '../../api/fakedata';
import { Wifi,Car, Glass, Camera, BookSquare, Archive, Hospital, Money, MoneyAdd} from 'iconsax-react-native';
import { colors } from '../../theme';


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
            <View className=' bg-white '>
                <Text className='mx-4'>
                    Amenities
                </Text>
                <View className=''>
               <View className='flex-row  w-full justify-between px-4'>
               <Wifi color={colors.primary[700]} size={40} variant='Bulk' />
               <Car color={colors.primary[700]} size={40}  variant='Bulk'/>
              <Camera color={colors.primary[700]} size={40} variant='Bulk'/>
              {/* <Archive color={colors.primary[700]} size={40} variant='Bulk'/> */}
              <Hospital color={colors.primary[700]} size={40} variant='Bulk'/>
              <MoneyAdd color={colors.primary[700]} size={40} variant='Bulk'/>
            
               
               </View>


                </View>

            </View>
        </View>
    );
}
