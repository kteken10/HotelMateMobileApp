import React, { useEffect, useState } from 'react';
import { View, Text } from '../../ui';
import { ChambreHotels } from '../../api/fakedata';
import { colors } from '../../theme';
import { CustomAlert } from '../../ui';
import { SButton } from '../../ui/button';
import { ReservationForm } from '../../ui/reservation-form';
import DateInput from '../../ui/date-input';
import { ChambreHotelCard } from '../../ui/hotel-card';
import { Archive, Camera, Car, Hospital, MoneyAdd, Wifi } from 'iconsax-react-native';

export const ReservationDetail = ({ route }) => {
    const { Chambreid } = route.params; 
    const [isReservationFormVisible, setIsReservationFormVisible] = useState(false);
    const [checkInDate, setCheckInDate] = useState<Date>();
    const [checkOutDate, setCheckOutDate] = useState<Date>();
    const [daysDifference, setDaysDifference] = useState<number>(0);
    const [priceNight, setPriceNight] = useState(0)
    const [amount, setAmount] = useState(0);

    const calculateDifference = (checkInDate: Date, checkOutDate: Date) => {
        if (checkInDate && checkOutDate) {
            const difference_ms = checkOutDate.getTime() - checkInDate.getTime();
            const difference_days = Math.ceil(difference_ms / (1000 * 3600 * 24));
            setDaysDifference(difference_days);
        }
    };

    const calculateAmount = (difference_day: number, price_night: number): number => {
       
       
       
        const total_amount = difference_day * price_night;
        setAmount(total_amount);
        return total_amount;
    };
  
    useEffect(() => {
        calculateDifference(checkInDate, checkOutDate);
        console.log(priceNight)
    }, [ checkOutDate]);

    useEffect(() => {
        if (daysDifference > 0) { 
            const chambre = ChambreHotels.find(chambre => chambre.id === Chambreid);
            if (chambre) {
                setPriceNight(parseInt(chambre.prix_par_nuit.replace(/\D/g, ''),10));
               
                calculateAmount(daysDifference, priceNight);
            }
        }
    }, [daysDifference]);

    const chambre = ChambreHotels.find(chambre => chambre.id === Chambreid);

    return (
        <View className='flex flex-1'>
            <ChambreHotelCard
                className=' mt-5'
                stars={chambre.stars}
                list_show={false}
                name={chambre.name}
                imageClassName='w-full h-72'
                active={chambre.active}
                prix_par_nuit={chambre.prix_par_nuit}
                description={chambre.description}
                image_path={chambre.image_path}
                onClick={() => {}}
            />
            <View className='bg-white bottom-5 h-full'>
                <Text className='mx-4'>Amenities</Text>
                <View className='mt-2'>
                    <View className='flex-row w-full justify-between px-4'>
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
                        onChange={(value) => setCheckInDate(value)}
                        value={checkInDate}
                        label='checkIn'
                    />
                    <DateInput
                        onChange={(value) => setCheckOutDate(value)}
                        value={checkOutDate}
                        label='checkOut'
                    />
                </View>
                <View className='flex-row mt-4 mx-4'>
                    <Archive
                        color={colors.primary[700]}
                        size={40}
                        variant='Bulk'
                        style={{ marginRight: 4 }}
                    />
                    <SButton
                        title={'Book now'}
                        titleClassName='text-white'
                        onPress={() => setIsReservationFormVisible(true)}
                        className='bg-primary-700 flex-1'
                    />
                </View>
                <CustomAlert 
                    isModalVisible={isReservationFormVisible}
                    title='Reservation Form'
                    onClose={() => { setIsReservationFormVisible(false) }}
                    twtitleClassName="text-primary-50 text-lg laptop:text-2xl font-medium laptop:leading-7"
                    twmodalClassName="bg-white py-4"
                >
                    <ReservationForm amount={amount} />
                </CustomAlert>
            </View>
        </View>
    );
}
