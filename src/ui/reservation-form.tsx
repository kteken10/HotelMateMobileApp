import React, { useState } from 'react';
import { Input, View } from '.';
import { PhoneNumberInput } from './phone-input';
import { SButton } from './button';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';


export const ReservationForm = ({ amount }: { amount: number }): JSX.Element => {
    const navigation = useNavigation();
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');

    const handleReservation = async () => {
        try {
            console.log(firstName,lastName,phoneNumber)
            // Envoi de la requête POST à votre endpoint pour enregistrer l'utilisateur
            const response = await axios.post('https://sx99c93m-5000.use2.devtunnels.ms/clients', {
                nom: firstName,
                prenom: lastName,
                email: email,
                telephone: phoneNumber,
                adresse: "",
            });
            console.log(response.data)
            navigation.navigate('Payment', {
                amount: amount
            });
        } catch (error) {
            console.error('Une erreur s\'est produite lors de l\'enregistrement de l\'utilisateur : ', error);
           
        }
    };

    return (
        <View className='mt-6'>
            <View className='flex-row mb-4'>
                <Input className='mx-4 px-4' placeholder='FirstName' onChangeText={(text)=>setFirstName(text)} value={firstName} />
            </View>
            <View className='mb-4'>
                <Input className='mx-4 px-4' placeholder='LastName' onChangeText={(text)=>setLastName(text)} value={lastName} />
            </View>
            <View className=''>
                <Input className='mx-4 px-4' placeholder='eg: yokolamil@gmail.com' onChangeText={(text)=>setEmail(text)} value={email} />
            </View>
            <View className='px-4 mb-4'>
                <PhoneNumberInput onPhoneNumberChange={setPhoneNumber} />
            </View>
            <View className='mx-4'>
                <View className='flex-row gap-2'>
                    <SButton
                        title={'Accept'}
                        onPress={handleReservation}
                        titleClassName=''
                        className='flex-1 border border-neutral-200 py-2'
                    />
                    <SButton
                        title={'Decline'}
                        titleClassName='text-white'
                        className='bg-primary-700 flex-1'
                    />
                </View>
            </View>
        </View>
    );
};
