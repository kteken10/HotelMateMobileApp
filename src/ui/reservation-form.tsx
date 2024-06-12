import React from 'react'
import { Input, View } from '.'
import { PhoneNumberInput } from './phone-input'
import { SButton } from './button'

export const ReservationForm=()=>{

    return(
        <View className='mt-6'>
        <View className='flex-row mb-4'>
        <Input className='mx-4 px-4' placeholder='FirstName'/> 
        </View>
        <View className='mb-4'>
        <Input className='mx-4 px-4' placeholder='LastName'/> 
        </View>  
        <View className=''>
        <Input className='mx-4 px-4' placeholder='eg: yokolamil@gmail.com'/> 
        </View>  
        <View className='px-4 mb-4'>
        <PhoneNumberInput 
        onPhoneNumberChange={function (number: string): void {
                   
                }}/>
            </View> 
            <View className='mx-4'>
            <View className='flex-row gap-2'>
            <SButton title={'Accept'}
                     titleClassName=''
                    
                     className=' flex-1 border border-neutral-200 py-2'
                     />
                      <SButton title={'Decline'}
                     titleClassName='text-white'
                    
                     className='bg-primary-700 flex-1'
                     />
            </View>
            </View>
        



        </View>
    )
}