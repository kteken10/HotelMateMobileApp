import React, { useState } from 'react';
import { StyleProp, ViewStyle, TextStyle, TouchableOpacity } from 'react-native';
import { AddCircle, ArrowDown2, ArrowUp2 } from 'iconsax-react-native';
import { View, Text } from '.';
import { LineInfo } from './line-info';

interface CardInfoProps {
  title?: string;
  style?: StyleProp<ViewStyle>;
  titleStyle?: StyleProp<TextStyle>;
  onAddButtonPress?: () => void;
}

export const AddressInfo: React.FC<CardInfoProps> = ({
  title,
  onAddButtonPress,
}) => {
  const [isCardExpanded, setIsCardExpanded] = useState(true);
  const [adding, setAdding] = useState<boolean>(false);

  const handleAddButtonClick = () => {
    setAdding(true);
    if (onAddButtonPress) {
      onAddButtonPress();
    }
  };

  const handleSuccess = () => {
    setAdding(false);
  };

  return (
    <View className={`flex border border-charcoal-100 py-4 mb-4 rounded-xl ${isCardExpanded ? '' : ''}`}>
      <View className='flex flex-row justify-between mb-4 mx-4'>
        <View className='w-3/4'>
          <Text className='text-lg text-primary-50'>{title}</Text>
        </View>
        <View className='flex flex-row w-1/4 justify-between'>
          <TouchableOpacity onPress={handleAddButtonClick}>
            <AddCircle size={25} color="#238878" />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setIsCardExpanded(!isCardExpanded)}>
            {isCardExpanded ?
              <ArrowUp2 size={25} color='black' /> :
              <ArrowDown2 size={25} color='black' />
            }
          </TouchableOpacity>
        </View>
      </View>
      {isCardExpanded && <LineInfo adding={adding} 
      onSuccess={handleSuccess} 
      setAdding={setAdding} />}
    </View>
  );
};
