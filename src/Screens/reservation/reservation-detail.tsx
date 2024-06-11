import React from 'react';
import { View ,Text} from '../../ui';
import { HeaderTop } from '../../ui/drawer-top';
import { ChambreHotelCard } from '../../ui/hotel-card';
import { ChambreHotels } from '../../api/fakedata';
import { Wifi,Car, Glass, Camera, BookSquare, Archive, Hospital, Money, MoneyAdd} from 'iconsax-react-native';
import { colors } from '../../theme';
import { SButton } from '../../ui/button';


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
            <View className=' bg-white bottom-5 h-full'>
                <Text className='mx-4'>
                    Amenities
                </Text>
                <View className='mt-6 '>
               <View className='flex-row  w-full justify-between px-4'>
                <View className='flex-col items-center'>
                <Wifi color={colors.primary[700]} size={40} variant='Bulk' />
                 <Text className='text-sm'>Wifi</Text>
                </View>
                <View className='flex-col items-center'>
               <Car color={colors.primary[700]} size={40}  variant='Bulk'/>
               <Text className='text-sm'>Parking</Text>
               </View>

               <View className='flex-col items-center'>
              <Camera color={colors.primary[700]} size={40} variant='Bulk'/>
              <Text className='text-sm'>Recorder</Text>
              </View>
              <View className='flex-col items-center'>
             
              <Hospital color={colors.primary[700]} size={40} variant='Bulk'/>
              <Text className='text-sm'>Hospital</Text>
              </View>
              <View className='flex-col items-center'>
              <MoneyAdd color={colors.primary[700]} size={40} variant='Bulk'/>
             <Text className='text-sm'>Bank</Text>
               </View>
               </View>
               


                </View>

                <View className='flex-row mt-28 mx-4  '>
                     <Archive color={colors.primary[700]} size={40} variant='Bulk' style={{
                        marginRight:4
                     }}/>
                     <SButton title={'Book now'}
                     titleClassName='text-white'

                     className='bg-primary-700 flex-1'
                     />
                     

                </View>

            </View>
        </View>
    );
}
