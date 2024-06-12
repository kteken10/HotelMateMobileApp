import React, { useRef, useState } from 'react';
import { View ,Text} from '../../ui';
import { HeaderTop } from '../../ui/drawer-top';
import { ChambreHotelCard } from '../../ui/hotel-card';
import { ChambreHotels } from '../../api/fakedata';
import { Wifi,Car,  Camera,  Archive, Hospital, MoneyAdd} from 'iconsax-react-native';
import { colors } from '../../theme';
import { CustomAlert } from '../../ui';
import { SButton } from '../../ui/button';
import { ReservationForm } from '../../ui/reservation-form';
import DateInput from '../../ui/date-input';



export const ReservationDetail = ({ route }) => {
    const { Chambreid } = route.params; 
    const [isReservationFormVisible,SetisReservationFormVisible]=useState(false)
    // const dynamicModalRef = useRef<BottomSheetModal>(null);
    // const openDynamicModal = () => {
    //     dynamicModalRef.current?.present(); 
    //   };

   
    const chambre = ChambreHotels.find(chambre => chambre.id === Chambreid);

  
    
    return (
        <View className='flex flex-1  '>
            {/* <HeaderTop title='ReservationDetail'/> */}
            <ChambreHotelCard
            className=' mt-5'
            list_show={false}
                name={chambre.name}
                imageClassName='w-full h-72'
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
                <View className='mt-2'>
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
               
                <View className='flex-row mt-4 justify-between mx-4'>
                   
                    <DateInput
      onChange={(value) => {
        // setDateOfBirth(value);
      }}
    //   value={dateOfBirth}
    //   label={capitalizeFirstLetter(t("date_of_birth"))}
    label='checkIn'
    />
                    <DateInput
      onChange={(value) => {
        // setDateOfBirth(value);
      }}
    //   value={dateOfBirth}
    //   label={capitalizeFirstLetter(t("date_of_birth"))}
    label='checkOut'
    />
        
                 

                </View>

                <View className='flex-row mt-4 mx-4  '>
                     <Archive color={colors.primary[700]} size={40} variant='Bulk' style={{
                        marginRight:4
                     }}/>
                     <SButton title={'Book now'}
                     titleClassName='text-white'
                     onPress={()=>SetisReservationFormVisible(true)}
                     className='bg-primary-700 flex-1'
                     />
                </View>
                <CustomAlert 
                 isModalVisible={isReservationFormVisible}
                 title='Reservation Form'
                 onClose={()=>{SetisReservationFormVisible(false)}} 
                 twtitleClassName="text-primary-50 text-lg laptop:text-2xl font-medium laptop:leading-7"
                 twmodalClassName="bg-white py-4"
                >
                <ReservationForm/>
                </CustomAlert>
              
            </View>
        </View>
    );
}
