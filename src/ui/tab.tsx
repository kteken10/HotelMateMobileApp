import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from '.';



interface TabProps {
    allTabs: string[];
    onTabPress: (text: string) => void;
}

export const Tab: React.FC<TabProps> = ({ allTabs, onTabPress }) => {
    const [activeTab, setActiveTab] = useState(0);
   

    const handleTabPress = (index: number) => {
        setActiveTab(index);
        onTabPress(allTabs[index]);
    };

    return (
        <View className='flex-row  rounded-lg  '>
            {allTabs.map((tab, index) => (
                <TouchableOpacity
                    key={index}
                    className={` px-3 py-1 justify-center items-center rounded-2xl mx-1 ${
                        activeTab === index ? 'bg-ternary-50' : 'bg-primary-900'
                    }`} 
                    onPress={() => handleTabPress(index)}
                >
                    <Text className={`${activeTab ===index ? 'text-white font-medium':'text-gray-700 font-medium' }   `}>
                        {tab}
                        </Text>
                </TouchableOpacity>
            ))}
        </View>
    );
};
