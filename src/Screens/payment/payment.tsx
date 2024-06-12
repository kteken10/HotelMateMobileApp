import React from 'react';
import { View, Text, Image } from '../../ui';
import { SButton } from '../../ui/button';
import FlashMessage, { showMessage } from 'react-native-flash-message';

export const PaymentScreen = ({ route }) => {
    const { amount } = route.params;
    const taxRate = 0.1; // Taux de taxe de 10%
    const taxAmount = amount * taxRate;
    const totalAmount = amount + taxAmount;

    const handlePayNow = () => {
        // Effectuez ici les actions nécessaires pour le paiement

        // Affichez le message flash pour informer l'utilisateur
        showMessage({
            message: "Votre réservation a été prise en compte!",
            type: "success",
            duration: 3000,
            icon: "success",
        });
    };

    return (
        <View className='flex flex-1 px-4 py-4 bg-white'>
            <View className='mt-4'>
                <Image source={require('../../assets/images/keyce.png')} className={`rounded-xl h-28 w-1/4 ml-auto `} />
            </View>
            <View className='h-14 border-b border-neutral-300 mt-20'>
                <Text className=''>Payment Method</Text>
            </View>

            <View className='mt-4 border border-neutral-200 rounded-3xl'>
                <Image source={require('../../assets/images/payment.png')} className={`rounded-xl h-52 w-3/4 self-center `} />
            </View>

            <View className='flex-col mx-4 mt-10'>
                <View className='flex-row justify-between'>
                    <Text className='text-neutral-400'>Sous Total</Text>
                    <Text className='text-neutral-400'>{amount}Fcfa</Text>
                </View>
                <View className='flex-row '>
                    <Text className='text-neutral-400'>Tax</Text>
                    <Text className='text-neutral-400'>{taxAmount.toFixed(2)}Fcfa</Text>
                </View>

                <View className='flex-row justify-between'>
                    <Text className='' font='LTSaeada-Bold'>Total</Text>
                    <Text className=''>{totalAmount.toFixed(2)}Fcfa</Text>
                </View>
            </View>
            <View>
                <View className='flex-row mt-28 mx-4'>
                    <SButton
                        title={'Pay now'}
                        titleClassName='text-white'
                        className='bg-primary-700 flex-1 py-3'
                        onPress={handlePayNow}
                    />
                </View>
            </View>

           
            <FlashMessage position="top" />
        </View>
    );
};
