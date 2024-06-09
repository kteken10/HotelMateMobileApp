import React, { useContext, useState } from "react";
import { Keyboard, ScrollView } from "react-native";
import { capitalizeFirstLetter } from "../../utils/string";
import { useTranslation } from "react-i18next";

import { RadioButton } from 'react-native-paper';
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from '@expo/vector-icons';
import { CredentialContext } from "../../contexts";
import { View ,Text, Input} from "../../ui";
import PageHeader from "../../ui/page-header";
import { colors } from "../../theme";
import DateInput from "../../ui/date-input";
import { SButton } from "../../ui/button";
import {PhoneNumberInput} from "../../ui/phone-input";



export default function RegisteredForm() {
    const { t } = useTranslation();
    const [checked, setChecked] = useState('first');
    
    const navigation = useNavigation();
    const { phoneNumber, setPhoneNumber } = useContext(CredentialContext);
    const [dateOfBirth, setDateOfBirth] = useState<Date>();
    const [firstName, setFirstName] = useState("");
    const  [lastName,setLastName]=useState("")
    
    const handleFirstNameChange = (text: string) => {
        setFirstName(text);
    };

    return (
        <ScrollView>
            <View
                className="px-4 pt-4"
                onStartShouldSetResponder={() => {
                    Keyboard.dismiss();
                    return true;
                }}
            >
                <View className="flex-1 bg-white mt-5 rounded-xl py-4 relative">
                    <PageHeader
                        className="mb-8"
                        title={capitalizeFirstLetter(t("create_account"))}
                        // message={capitalizeFirstLetter(t("create_account_desck"))}
                        titleStyle={{color:colors.primary[50]}}
                    />
                    <View className="flex-1 justify-center">
                        <View className="flex-1  mb-4 mx-4">
                            <Text className="mobile:text-sm   text-gray-700 font-medium">
                                {capitalizeFirstLetter(t('first_name'))}
                            </Text>
                            <Input
                               className="w-full px-2"
                                onChangeText={handleFirstNameChange}
                            />
                         
                        </View>
                        <View className="flex-1  mx-4">
                            <Text className="mobile:text-sm   text-gray-700 font-medium">
                                {capitalizeFirstLetter(t('last_name'))}
                            </Text>
                            <Input
                                className="w-full px-2"
                                onChangeText={handleFirstNameChange}
                            />
                         
                        </View>
                       
                        <DateInput
                            onChange={setDateOfBirth}
                            className="mx-4 "
                            labelClassName="mx-4 mt-4"
                            value={dateOfBirth}
                            label={capitalizeFirstLetter(t("date_of_birth"))}
                        />
                        <View className="mx-4 mt-4">
                            <PhoneNumberInput
                                label={capitalizeFirstLetter(t("phone_number"))}
                                onPhoneNumberChange={setPhoneNumber}
                            />
                        </View>
                        <View className="flex-1 flex-row mx-4 mt-4">
                            <Text className="mobile:text-sm w-1/2 text-gray-700 font-medium">
                                {capitalizeFirstLetter(t('gender'))}
                            </Text>
                        </View>
                        <View className="flex-1 flex-row mx-2">
                           
                            <View className="flex-row w-1/2 items-center">
                                <RadioButton
                                    color={colors.accent[50]}
                                    
                                    value="male"
                                    status={checked === 'second' ? 'checked' : 'unchecked'}
                                    onPress={() => setChecked('second')}
                                />
                                <Ionicons name="male" color={"gray"} size={22}  style={{marginRight:4}}/>
                                <Text className='mobile:text-sm w-1/2 text-gray-700 font-medium ' tx="male"/>
                            </View>
                            <View className="flex-row w-1/2 items-center">
                                <RadioButton
                                    color={colors.accent[50]}
                                    value="female"
                                    status={checked === 'first' ? 'checked' : 'unchecked'}
                                    onPress={() => setChecked('first')}
                                />
                                <Ionicons name="female-sharp" color={"gray"} size={22}  style={{marginRight:4}} />
                                <Text className='mobile:text-sm w-1/2 text-gray-700 font-medium ' tx="female"/>
                
                            </View>
                        </View>
                        <View className="flex-1 flex-row mx-4 mb-6">
                            <Text className="text-accent-50 mr-2">*</Text>
                            <Text className="text-base">All fields are required</Text>
                        </View>
                        <View className="flex-1 flex-row mx-4 ">
                      
                           
                                <SButton
                                    title={capitalizeFirstLetter(t("next"))}
                                    className="self-center border-secondary-50 border mobile:py-3 tablet:py-3 w-full mb-4 rounded-3xl "
                                    titleClassName="text-secondary-50"
                                    onPress={()=>navigation.navigate('Verification')}
                                />
                          
                        </View>
                        <View className="flex-1 flex-row mx-4 self-center">
                            <View className="">
                                <SButton
                                    title={capitalizeFirstLetter(t("sign_in"))}
                                    className="self-center w-full"
                                    titleClassName="text-accent-50"
                                    onPress={()=>{navigation.navigate('LoginScreen')}}
                                />
                            </View>
                        </View>
                    </View>
                </View>
            </View>
        </ScrollView>
    );
}
