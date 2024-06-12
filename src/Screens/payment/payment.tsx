import React from 'react';
import { View, Text, Image } from '../../ui';
import { SButton } from '../../ui/button';

export const PaymentScreen = ({ route }) => {
    const { amount } = route.params;
    const taxRate = 0.1; // Taux de taxe de 10%
    const taxAmount = amount * taxRate;
    const totalAmount = amount + taxAmount;

    return (
        <View className='flex flex-1 px-4 py-4 bg-white'>

            <View className='h-14 border-b border-neutral-300 mt-20'>
                <Text className=''>Payment Method</Text>
            </View>

            <View className='mt-4'>
                <Image source={require('../../assets/images/payment.png')} className={`rounded-xl h-52 `} />
            </View>

            <View className='flex-col mx-4'>
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
                <View className='flex-row mt-60 mx-4'>
                    <SButton
                        title={'Pay now'}
                        titleClassName='text-white'
                        className='bg-primary-700 flex-1 py-3'
                    />
                </View>
               
            </View>

        </View>
    );
};
