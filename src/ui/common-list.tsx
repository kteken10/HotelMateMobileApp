import React, { useState } from 'react';
import { View, Text, ScrollView } from '.';
import { Clock } from 'iconsax-react-native';
import { colors } from '../theme';
import { SearchFilter } from './search-filter';
import Card from './Lcard';
import { Organization, Practitioner } from "fhir/r4";
interface InvoiceF {
    id: string;
    date: string;
    name: string;
    status: 'active' | 'inactive' | 'paid' | 'unpaid';
}
interface CommonListProps {
    data: InvoiceF[] | Organization[] | Practitioner[]
    icon: React.ReactNode
    bottom?: string
    type?: "Invoice" | "Organisation" | "Practitioner" | "Reimbursement"
    showIcon: boolean
    className: string
}

export const CommonList: React.FC<CommonListProps> = ({ data, icon, bottom, type, showIcon=true, className = 'py-2' }) => {
    const [searchValue, setSearchValue] = useState<string>('');
    let filteredData: any[] = [];
    switch (type) {
        case "Organisation":

            filteredData = (data as Practitioner[])
            break;
        case "Practitioner":
            filteredData = (data as Practitioner[]).filter(item => {
                const name = Array.isArray(item.name) ? item.name[0] : item.name;

                return name && (
                    ('family' in name && name.family.toLowerCase().includes(searchValue.toLowerCase())) ||
                    ('given' in name && name.given.join(' ').toLowerCase().includes(searchValue.toLowerCase()))
                );
            });
            break;
        case "Invoice":
            filteredData = (data as Organization[]).filter(item =>
                'name' in item && item.name.toLowerCase().includes(searchValue.toLowerCase())
            );
            break;

        case "Reimbursement":
            filteredData = (data as Organization[]).filter(item =>
                'name' in item && item.name.toLowerCase().includes(searchValue.toLowerCase())
            );
            break;
        default:
            break;
    }

    return (
        <View className=''>
            <SearchFilter
            filterClassName='bg-white'
                onChange={text => setSearchValue(text)}
                searchClassName='mx-4 mobile:mt-4'
                inputClassName='mobile:mr-5 mr-5 mobile:w-4/5 w-4/5 px-2 bg-white'
                showFilter={true}
            />
            <ScrollView className={`${bottom} mt-4`}>
                {filteredData.map((item) => {
                    return (
                        <Card key={item.id} onItemPress={() => { }}>
                            <View className={`flex  px-2 ${className}`}>
                                {showIcon ? <View className='flex flex-row mb-4'>
                                    <Clock color={colors.secondary[100]} size={18} variant='Bulk' />
                                    <Text className='text-xs mx-2'>
                                        {item.date?.toLocaleString() || ""}
                                    </Text>
                                </View> : null}
                                <View className='flex flex-row items-center'>
                                    <View className='flex-row items-center'>
                                        <View className='bg-neutral-200 rounded-3xl justify-center items-center p-2 mr-2'>
                                            {icon}
                                        </View>
                                        <View className='mobile:max-w-[200px] w-full'>
                                            <Text className='text-primary-50 font-semibold'>
                                                {Array.isArray(item.name) ?
                                                    item.name.map((name, index) => (
                                                        <Text key={index} className='text-primary-50 font-semibold'>
                                                            {name.prefix && name.prefix.length > 0 && `${name.prefix.join(' ')} `}
                                                         
                                                            {name.given && name.given.length > 0 && `${name.given.join(' ')} `}
                                                            {name.family && `${name.family}`}
                                                            {index !== item.name.length - 1 && ', '}
                                                        </Text>
                                                    ))
                                                    :
                                                    item.name
                                                }
                                            </Text>
                                        </View>



                                    </View>
                                    {showIcon ? <View className=' ml-auto'>
                                        <View
                                            className={`h-6 mx-2 px-2  justify-center items-center rounded-xl ${item.status == 'paid' || item.status == 'active' || item.active == true ? 'bg-emerald-100' : ' bg-red-100'}`}
                                        >
                                            <Text className={` ${item.status == 'paid' || item.status == 'active' || item.active == true ? 'text-emerald-700' : ' text-black'}`}>
                                                {item.status}

                                            </Text>
                                        </View>
                                    </View> : null}
                                </View>
                            </View>
                        </Card>
                    );

                })}
            </ScrollView>
        </View>
    );
}