import React from 'react';
import {
  StyleSheet,

  StyleProp,
  ViewStyle,
  TextStyle,
  TouchableOpacity,
} from 'react-native';
import { AddCircle, ArrowDown2, ArrowUp2 } from 'iconsax-react-native';
import { View, Text } from '.'
interface CardInfoProps {
  title?: string;
  style?: StyleProp<ViewStyle>;
  children?: React.ReactNode;
  titleStyle?: StyleProp<TextStyle>;
  cardHeight?: number;
  IconComponent?: React.ReactNode;
  onAddButtonPress?: () => void;
}

export const CardInfo: React.FC<CardInfoProps> = ({
  title,
  style,
  children,
  titleStyle,
  onAddButtonPress,
  cardHeight,
  IconComponent
}) => {
  const [isCardExpanded, setIsCardExpanded] = React.useState(true);


  return (


    // <View 
    // style={[styles.container, style,{height:isCardExpanded ? cardHeight : 80} ]}


    // >
    <View
      className={`flex border border-charcoal-100 px-4 py-4 mb-4  rounded-xl ${isCardExpanded? '':''}`}
    >




      <View className='flex flex-row justify-between mb-4'>

        <View className='w-3/4'>
          <Text className='text-lg text-primary-50'> {title}</Text>
        </View>

        <View className='flex flex-row w-1/4 justify-between' >

          <TouchableOpacity
          onPress={onAddButtonPress}
          >

            <AddCircle
              size={25} color="#238878" />
          </TouchableOpacity>
          {/* </View> */}
          <TouchableOpacity onPress={() => setIsCardExpanded(!isCardExpanded)}>
            {isCardExpanded ? 
            <ArrowUp2 size={25} color='black' /> : 
            <ArrowDown2 size={25} color='black' />

            }
          </TouchableOpacity>

        </View>
      </View>

      <View className=''>
      { isCardExpanded && <View>{children}</View>} 
      </View>




      {/* <View
    //    style={styles.header}
    className='flex flex-row justify-between'
      >
        <Text 


        // style={[{  color: "#605076",
        // fontSize: 18,
        // paddingHorizontal:16,
        // paddingTop: 16,
      
        // marginBottom: 10},titleStyle]}
    className=''
        
        >
            {title}


        </Text>
        <View >
        {IconComponent}
      
        </View>        
        <TouchableOpacity onPress={() => setIsCardExpanded(!isCardExpanded)} style={styles.icon}>
          {isCardExpanded ? <ArrowUp2 size={30} color='black' /> : <ArrowDown2 size={30} color='black' />}
        </TouchableOpacity>
       
      </View>



      { isCardExpanded && <View style={styles.contentContainer}>{children}</View>} 
      */}
    </View>
  );
};


