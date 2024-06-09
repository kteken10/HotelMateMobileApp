import React, { useEffect, useState } from 'react';
import {DrawerItemList,createDrawerNavigator} from '@react-navigation/drawer';
import { DrawerActions, useNavigation } from '@react-navigation/native';
import { HeaderTop } from '../ui/drawer-top';
import { Arrow, CloseSquare,  Home } from 'iconsax-react-native';
import { DependantCard } from '../ui/dependant-card';
import { isTablet } from '../hooks/use-platform-info';
import { colors } from '../theme';
import { SafeAreaView, View,  Text, TouchableOpacity, CustomAlert } from '../ui';
import { ScrollView } from 'react-native';

import { createUserAsync } from '../redux/userSlice';
import { getNameCountryOfFlag } from '../utils/getFlag';
import moment from 'moment';
import { useDispatch } from "react-redux"


import { TouchableRipple, Menu } from 'react-native-paper';
import { AddButton } from '../ui/add-button';

import { DependantForm } from '../ui/dependant-form';

export type DrawerStackParamList = {
    DrawerMenu: undefined;
};
const Drawer = createDrawerNavigator();

export const DrawerNavigator = () => {
    {
        const IconPhoneSize = 24;
        const [isDependantFormVisible,SetIsdependantFormVisible]=useState(false)

        const patients = [
            {
                prefix: "Mr",
                name: "John Wick",
                gender: "Male",
                age: 30
            },
            {
                prefix: "Ms",
                name: "Alice Pokam",
                gender: "Female",
                age: 25
            },
            {
                prefix: "Mr",
                name: "Bob Malick",
                gender: "Male",
                age: 35
            },
            {
                prefix: "Ms",
                name: "Emma Stroman",
                gender: "Female",
                age: 40
            },
           
        ];
        const [userCreated, setUserCreated] = useState(false)
        const IconTabletSize = 30;
        const InactiveIconcolor = '#fff';
        const variant_inactive = 'Outline';
        const variant_active = 'Bulk';
        const openMenu = () => {
            setIsVisible(true);
        };
        const closeMenu = () => {
            setIsVisible(false);
        };
        useEffect(() => {
            if (!userCreated) {
                LaunchUser();
                setUserCreated(true);
            }
        }, [userCreated]);

        const LaunchUser = async () => {
            try {
                dispatch(
                    createUserAsync({
                        id: "id-1",
                        firstname: "Frank",
                        lastname: "Arnaud",
                        gender: "Male",
                        dateOfBirth: moment().subtract(20, "year").toDate().valueOf(),
                        phoneNumber: "+237698022519",
                        email: "francis@yahoo.com",
                        maritalStatus: "SINGLE",
                        primaryCarePhysician: "Dr. John Doe",
                        preferedLanguage: 'fr'
                    }) as any
                );
            } catch (error) {
                console.error("Une erreur s'est produite lors de la création de l'utilisateur :", error);
            }
        }
        const ActiveIconColor = colors.primary[50];
        const [isVisible, setIsVisible] = useState(false);
        const dispatch = useDispatch()
        const navigation = useNavigation();
        const userPreferedLanguage = getNameCountryOfFlag()
        const [selectedPatient, setSelectedPatient] = useState({
            prefix: "Mr",
            name: "John Wick",
            gender: "Male",
            age: 30
        });

        const updateSelectedPatient = (patient: any) => {
            setSelectedPatient(patient);
            closeMenu();
        };
        dispatch(
            createUserAsync({
                id: "id-1",
                firstname: "Frank",
                lastname: "Arnaud",
                gender: "Male",
                dateOfBirth: moment().subtract(20, "year").toDate().valueOf(),
                phoneNumber: "+237698022519",
                email: "francis@yahoo.com",
                maritalStatus: "SINGLE",
                primaryCarePhysician: "Dr. John Doe",
                preferedLanguage: userPreferedLanguage
            }) as any
        )




        return (
            <>
                <Drawer.Navigator

                    defaultStatus="closed"

                    drawerContent={(props) => {
                        return (
                            <SafeAreaView className='h-full  gap-4'>
                                <ScrollView>
                                    <View className="w-full h-30 flex items-center  border-gray-200 flex-row   ">
                                        <View className="flex flex-1 flex-row items-center mt-8 mx-4">
                                            {/* <Image source={require('../assets/images/portal-patient-logo.png')} className="h-14 w-14" /> */}
                                            <View className="ml-auto ">
                                                <TouchableOpacity
                                                    onPress={() => {
                                                        navigation.dispatch(DrawerActions.closeDrawer());
                                                    }}
                                                >
                                                                                                       <CloseSquare size={30} color="#fff" variant="Bulk" />
                                                </TouchableOpacity>
                                            </View>
                                        </View>
                                    </View>


                                    <View className='flex flex-row mt-8'>
                                        <CustomAlert
                                        isModalVisible={isDependantFormVisible}
                                        onClose={()=>SetIsdependantFormVisible(false)}
                                        
                                        >
                                        <DependantForm/>
                                        </CustomAlert>
                                      
                                       

                                        <DependantCard
                                            infoColor={true}
                                            showBorder={false}
                                            className='mb-4'
                                            showSupp={false}
                                            
                                            dropColor={true}
                                            onCardPress={openMenu}
                                            onDropPress={openMenu}
                                            patient={selectedPatient}
                                            profileColor={colors.primary[50]} />

                                        <Menu
                                            visible={isVisible}
                                            onDismiss={closeMenu}
                                            anchor={<TouchableRipple onPress={openMenu}><Arrow /></TouchableRipple>}

                                            contentStyle={{
                                                backgroundColor: 'white',
                                                zIndex: 1000,
                                                height:416,
                                                maxWidth: 380,
                                                borderRadius: 12,
                                                top: 80,
                                                right:8,
                                                paddingVertical: 8,
                                                paddingHorizontal: 8,  
                                            }}
                                        >

                                            <View className='h-full'>
                                                <View className='flex-row mb-6 items-center justify-between'>
                                                    <Text>
                                                        Dependant
                                                    </Text>
                                                    <AddButton onPress={()=>SetIsdependantFormVisible(true)}/>

                                                </View>
                                            <ScrollView >
                                                {patients.map((patient, index) => (
                                                    <DependantCard
                                                        key={index}
                                                        patient={patient}
                                                        profileColor={colors.primary[50]}
                                                        onCardPress={() => updateSelectedPatient(patient)}
                                                        className='mb-4'
                                                        showIcon={false}
                                                    />
                                                ))}
                                            </ScrollView>

                                            </View>
                                        </Menu>

                                    </View>

                                    <DrawerItemList {...props} />
                                </ScrollView>

                                <View className="px-4 text-sm">
                                    <Text className="text-white/50">Powered by</Text>
                                    <Text className="mt-2  font-bold text-white">
                                        CHIPS ANALYTICS Inc. NY © {new Date().getFullYear()}
                                    </Text>
                                </View>
                            </SafeAreaView>
                        );
                    }}
                    screenOptions={{
                        drawerStyle: isTablet
                            ? {
                                backgroundColor: colors.primary[50],
                            }
                            :
                            {
                                width: '100%',
                                backgroundColor: colors.primary[50],
                                display: 'flex'
                            },
                        overlayColor: 'transparent',
                        headerStyle: {
                            backgroundColor: colors.primary[50],
                        },

                        headerTintColor: '#fff',
                        drawerActiveBackgroundColor: 'white',
                        drawerActiveTintColor: 'black',
                    }}
                >
                    
                   
                    
                    <Drawer.Screen
                        name="Invoices"
                        options={{
                            drawerLabel: (focused) => (
                                <Text
                                    style={{
                                        color: focused.focused
                                            ? colors.primary[50]
                                            : 'white',
                                    }}
                                >
                                    {' '}
                                    Invoices
                                </Text>
                            ),
                            headerTitle: () => (
                                <HeaderTop
                                    title="Invoices"
                                // onMessagePress={() => navigate('Message')}
                                />
                            ),
                            drawerIcon: (focused) => (
                                <Home
                                    color={focused.focused ? ActiveIconColor : InactiveIconcolor}
                                    size={isTablet ? IconTabletSize : IconPhoneSize}
                                    variant={focused.focused ? variant_active : variant_inactive}
                                />
                            ),
                        }}
                        component={Invoices}
                    />
                    

                </Drawer.Navigator>


            </>
        );
    }
};