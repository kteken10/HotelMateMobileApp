import React, { useState, useEffect } from 'react';
import { View, Text, Input } from '.';
import { capitalizeFirstLetter } from '../utils/string';
import { SButton } from './button';
import { DropDown } from './drop-down';

export interface Address {
    id: number;
    firstAddressLine: string;
    secondAddressLine: string;
    city: string;
    district: string;
    state: string;
    postalCode: string;
    country: string;
    addressUse: string;
}
interface AddressInfoProp {
    onSave: (formData: Address) => void;
    addressToEdit?: Address;
}

export const AddressInfoForm: React.FC<AddressInfoProp> = ({ onSave, addressToEdit }) => {
    const AddressUseOptions = [
        { label: 'Both', value: 'both' },
        { label: 'Postal', value: 'postal' },
        { label: 'Physical', value: 'physical' },
    ];

    const CountryOptions = [
        { label: 'Cameroun', value: 'cameroon' },
        { label: 'France', value: 'france' },
        { label: 'Germany', value: 'germany' },
        { label: 'Portuguese', value: 'portuguese' },
    ];

    const [formData, setFormData] = useState<Address>({
        id: 0,
        firstAddressLine: '',
        secondAddressLine: '',
        city: '',
        district: '',
        state: '',
        postalCode: '',
        country: '',
        addressUse: ''
    });

    useEffect(() => {
        if (addressToEdit) {
            setFormData(addressToEdit);
        }
    }, [addressToEdit]);

    const handleInputChange = (field: keyof Address, value: string) => {
        setFormData(prevData => ({
            ...prevData,
            [field]: value
        }));
    };

    const handleSave = () => {
        onSave(formData);
        setFormData({
            id: 0,
            firstAddressLine: '',
            secondAddressLine: '',
            city: '',
            district: '',
            state: '',
            postalCode: '',
            country: '',
            addressUse: ''
        });
    };

    return (
        <View className='mx-4 my-4'>
            <View className='mb-2'>
                <Text>{capitalizeFirstLetter('first_address_line')}</Text>
                <Input
                    className='px-2'
                    value={formData.firstAddressLine}
                    onChangeText={(text) => handleInputChange('firstAddressLine', text)}
                />
            </View>
            <View className='mb-2'>
                <Text>{capitalizeFirstLetter('second_address_line')}</Text>
                <Input
                    className='px-2'
                    value={formData.secondAddressLine}
                    onChangeText={(text) => handleInputChange('secondAddressLine', text)}
                />
            </View>
            <View className='mb-2'>
                <Text>{capitalizeFirstLetter('city')}</Text>
                <Input
                    className='px-2'
                    value={formData.city}
                    onChangeText={(text) => handleInputChange('city', text)}
                />
            </View>
            <View className='mb-2'>
                <Text>{capitalizeFirstLetter('district')}</Text>
                <Input
                    className='px-2'
                    value={formData.district}
                    onChangeText={(text) => handleInputChange('district', text)}
                />
            </View>
            <View className='mb-2 flex-row'>
                <Text tx='state' className='w-1/2' />
                <Text tx='useAdress' className='w-1/2' />
            </View>
            <View className='mb-2 flex-row'>
                <View className='w-1/2 pr-2'>
                    <Input
                        className='px-2'
                        value={formData.state}
                        onChangeText={(text) => handleInputChange('state', text)}
                    />
                </View>
                <DropDown
                    data={AddressUseOptions}
                    onDropChange={(item) => {
                        handleInputChange('addressUse', item.value);
                    }}
                    className='w-1/2 pl-2'
                />
            </View>
            <View className='mb-2 flex-row' >
                <Text tx='postalCode' className='w-1/2' />
                <Text tx='country' className='w-1/2' />
            </View>
            <View className='mb-2 flex-row'>
                <View className='w-1/2 pr-2'>
                    <Input
                        className='px-2'
                        value={formData.postalCode}
                        onChangeText={(text) => handleInputChange('postalCode', text)}
                    />
                </View>
                <DropDown
                    data={CountryOptions}
                    onDropChange={(item) => {
                        handleInputChange('country', item.value);
                    }}
                    className='w-1/2 pl-2'
                />
            </View>
            <View className='flex-row  mt-12'>
                <View className='pr-2 w-1/2'>
                    <SButton
                        title={capitalizeFirstLetter("cancel")}
                        className="  mobile:py-3 tablet:py-3 border border-accent-50 "
                        titleClassName='text-accent-50'
                        onPress={() => { }}
                    />
                </View>
                <View className='pl-2 w-1/2'>
                    <SButton
                        title={capitalizeFirstLetter("confirm")}
                        className="  mobile:py-3 tablet:py-3 bg-secondary-50"
                        titleClassName="text-white"
                        onPress={() => {
                            handleSave();
                        }}
                    />
                </View>
            </View>
        </View>
    );
};
