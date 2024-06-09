import React, { useState, useCallback } from 'react';
import { StyleSheet ,} from 'react-native';

import { View ,Input ,TouchableOpacity,Text } from '.';
import { SButton } from './button';
import { capitalizeFirstLetter } from '../utils/string';



interface FormProps {
    prefix?: string;
    suffix?: string;
    firstName?: string;
    lastName?: string;
    healthRecordNumber?: string;
    onCancel?: () => void;
    onSave?: (formData: FormProps) => void;
}

export const Form: React.FC<FormProps> = React.memo(({ prefix, suffix, firstName, lastName, healthRecordNumber, onCancel, onSave }) => {
    const [formData, setFormData] = useState<FormProps>({
        prefix,
        suffix,
        firstName,
        lastName,
        healthRecordNumber,
    });

    const handleChange = useCallback((name: keyof FormProps, value: string) => {
        if (name === 'firstName') {
            value = value + ' ';
        }
        setFormData((prevState) => ({ ...prevState, [name]: value }));
    }, []);

    const handleSave = useCallback(() => {
        if (onSave && formData) {
            onSave(formData);
        }
    }, [formData, onSave]);

    const handleCancel = useCallback(() => {
        if (onCancel) {
            onCancel();
        }
    }, [onCancel]);

    return (
        <View className='flex mx-4 my-4'>
            <View style={styles.row}>
            <Text className='mobile:text-sm tablet:text-lg laptop:text-lg text-gray-700 font-medisum ' tx='first_name' />
            </View>
            <View style={styles.row}>
                <Input
                className='px-2'
                    value={formData.firstName}
                    onChangeText={(value) => handleChange('firstName', value)}
                />
            </View>
            <View style={styles.row}>
            <Text className='mobile:text-sm tablet:text-lg laptop:text-lg text-gray-700 font-medisum ' tx='last_name' />
            </View>
            <View style={styles.row}>
                <Input
                 className='px-2'
                    value={formData.lastName}
                    onChangeText={(value) => handleChange('lastName', value)}
                />
            </View>
            {/* <View style={styles.buttonRow}>
                <TouchableOpacity style={[styles.cancelButton, styles.buttonStyle]} onPress={handleCancel}>
                    <Text style={styles.textButtonStyle}>Cancel</Text>
                    <Text className='text-accent-50'></Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={handleSave} style={[styles.buttonStyle, styles.saveButton]}>
                    <Text style={styles.textButtonStyle}>Save</Text>
                </TouchableOpacity>
            </View> */}
              <View className="flex mobile:mt-12 mt-12">
              <SButton
              title={capitalizeFirstLetter("confirm")}
              className="self-center mobile:py-3 tablet:py-3 w-full   bg-secondary-50 mb-4"
              titleClassName={"text-white"}
            
              onPress={handleSave} 
            />
            <SButton
              title={capitalizeFirstLetter("cancel")}
              onPress={handleCancel}
              titleClassName="text-accent-50"
              className="self-center mobile:py-3 tablet:py-3 w-full  border border-accent-50"
            />
           
          </View>

        </View>
    );
});

const styles = StyleSheet.create({
    row: {
        flexDirection: 'row',
        marginBottom: 16,
    },
   
    input: {
        flex: 1,
        borderWidth: 0.5,
        padding: 8,
        borderColor: '#999',
        borderRadius: 12,
        width: 400,
    },
    buttonRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    textButtonStyle: {
        color: "white",
        marginTop: 10,
    },
    saveButton: {
        backgroundColor: 'green',
    },
    cancelButton: {
        backgroundColor: 'orange',
    },
    buttonStyle: {
        width: 100,
        height: 42,
        borderRadius: 10,
        alignItems: 'center',
    },
});
