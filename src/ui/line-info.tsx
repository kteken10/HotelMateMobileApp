import React, { useEffect, useState } from 'react';
import { Edit2, Location, Trash } from 'iconsax-react-native';
import colors from '../theme/colors';
import { TouchableOpacity, View, Text } from '.';
import { CustomAlert } from '.';
import { Address, AddressInfoForm } from './adress-form';

interface LineInfoProps {
    adding: boolean;
    onSuccess: () => void;
    setAdding: (value: boolean) => void;
}

export const LineInfo: React.FC<LineInfoProps> = ({ adding, onSuccess}) => {
    const [isAddressFormVisible, setIsAddressFormVisible] = useState(false);
    const [addresses, setAddresses] = useState<Address[]>([]);
    const [addressToEdit, setAddressToEdit] = useState<Address | undefined>();

    useEffect(() => {
        setIsAddressFormVisible(adding);
    }, [adding]);

    const handleEdit = (index: number, address: Address) => {
        setAddressToEdit(address);
        setIsAddressFormVisible(true);
    };

    const handleDelete = (index: number) => {
        const updatedAddresses = [...addresses];
        updatedAddresses.splice(index, 1);
        setAddresses(updatedAddresses);
    };

    const handleClose = () => {
        setIsAddressFormVisible(false);
        onSuccess();
    };

    const handleAddAddress = (newAddress: Address) => {
        if (addressToEdit) {
            const updatedAddresses = [...addresses];
            const indexToUpdate = updatedAddresses.findIndex(address => address.id === addressToEdit.id);
            if (indexToUpdate !== -1) {
                updatedAddresses[indexToUpdate] = newAddress;
                setAddresses(updatedAddresses);
            }
        } else {
            setAddresses(prevAddresses => [...prevAddresses, newAddress]);
        }
        setIsAddressFormVisible(false);
        onSuccess();
    };

    return (
        <View className='flex'>
            {addresses.map((addressItem, index) => (
                <AddressItem
                    key={addressItem.id}
                    address={addressItem}
                    index={index}
                    onEdit={handleEdit}
                    onDelete={handleDelete}
                />
            ))}
            <CustomAlert
                title='address_info'
                isModalVisible={isAddressFormVisible}
                onClose={handleClose}
                twtitleClassName="text-primary-50 text-lg laptop:text-2xl font-medium laptop:leading-7"
                twmodalClassName="bg-white py-4 top-7 "
            >
                <AddressInfoForm onSave={handleAddAddress} addressToEdit={addressToEdit} />
            </CustomAlert>
        </View>
    );
};

interface AddressItemProps {
    address: Address;
    index: number;
    onEdit: (index: number, address: Address) => void;
    onDelete: (index: number) => void;
}

const AddressItem: React.FC<AddressItemProps> = ({ address, index, onEdit, onDelete }) => {
    const getAddressComponents = () => {
        const {
            firstAddressLine,
            secondAddressLine,
            city,
            district,
            state,
            postalCode,
            country,
            addressUse
        } = address;

        const addressComponents = [
            firstAddressLine,
            secondAddressLine,
            city,
            district,
            state,
            postalCode,
            country,
            addressUse
        ].filter(Boolean);

        return addressComponents.join(', ');
    };

    return (
        <View className='flex flex-row justify-between mx-4 mb-4 h-12 items-center'>
            <View className='flex flex-row gap-4 items-center'>
                <Location size={22} color={colors.charcoal[400]} />
                <Text className='w-3/5'>{getAddressComponents()}</Text>
            </View>
            <View className='flex flex-row gap-8'>
                <TouchableOpacity onPress={() => onEdit(index, address)}>
                    <Edit2 color={colors.secondary[50]} size={25} variant='Bulk' />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => onDelete(index)}>
                    <Trash size={23} color={colors.accent[50]} variant={'Bulk'} />
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default LineInfo;
