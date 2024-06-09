import React, { useContext, useEffect, useState } from 'react';
import { View, ViewStyle } from 'react-native';



import PhoneInput from "react-native-phone-number-input"

import moment from 'moment';
import { CloseCircle, TickSquare, Trash } from 'iconsax-react-native';
import DateInput from './date-input';
import ConfirmationButtons from './confirmation-button';
import { Input } from './input';
import ItemsContext from '../contexts/items-context';

interface EditInfosProps {
  EditInfoStyle?: ViewStyle;
  isTypeDate?: boolean;
  isTypeDropDown?: boolean;
  isTypePhone?: boolean;
  isTypeInput?: boolean;
  isTypeLanguage?: boolean;
  iconLabelColor?: string;
  onConfirmChanged: () => void;
  onCancelChanged: () => void;
  children?: React.ReactNode;
}

export const EditInfos: React.FC<EditInfosProps> = ({
  isTypeInput,
  isTypeDate,
  isTypePhone,
  isTypeDropDown,
  onCancelChanged,
  onConfirmChanged,
  isTypeLanguage,
  children,
  EditInfoStyle
}) => {
  const { userPhoneNumber , setUserPhoneNumber , userEmail} = useContext(ItemsContext);

  const onChangePhoneNumber = (text: string) => {
    setUserPhoneNumber(text);
  };

  const [formattedValue, setFormattedValue] = useState(userPhoneNumber);

  useEffect(() => {
    setFormattedValue(userPhoneNumber);
  }, [userPhoneNumber]);

  return (
    <View
      style={[
        EditInfoStyle,
        {
          flexDirection: 'row',
          alignContent: 'center',
          justifyContent: 'space-between',
          width: '100%',
        },
      ]}
    >
      <View
        style={{
          flexDirection: 'row',
        }}
      >
        {isTypeInput && (
          <Input  
          defaultValue={userEmail}
          />
        )}

        {isTypeDropDown && (
          <View>
            {children}
          </View>
        )}
        {isTypeDate && (
          <DateInput
            onChange={(value) => {
           
            }}
            isVisible={true}
            
            value={new Date()}
          
           
          
         
            maximumDate={moment().subtract(18, "year").toDate()}
          />
        )}

        {isTypePhone && (
          <PhoneInput
            placeholder=" "
            value={userPhoneNumber}
            defaultCode={"CM"}
            layout="first"
            onChangeText={onChangePhoneNumber}
            onChangeFormattedText={setFormattedValue}
            textContainerStyle={{
              alignContent:'center',
              justifyContent:'center',
              height:30,
              padding:0
            }}
            containerStyle={{
              height:30,
              width:220
            }}
            textInputStyle={{ height: 40  , fontSize:14}}
            flagButtonStyle={{ borderColor: '#EFEFEF', borderWidth: 1 }}
            codeTextStyle={{
              height: 40,
              top: 11,
              fontSize:13,
              marginRight:4,
              marginLeft:-8
            }}
          />
        )}
        {/* {isTypeLanguage && (
        
          <LanguagePicker countryList={{ left:0,width:140 }}/>
          
        )} */}
      </View>

      <View
        style={{
          flexDirection: 'row',
        }}
      >
      <ConfirmationButtons
       confirmIcon={<TickSquare size={25} color="#006D5B" variant={'Bold'} />} 
       cancelIcon={<CloseCircle size={25} color={'#FF9160'} variant={'Bold'} />}

      onCancelChanged={onCancelChanged}
      onConfirmChanged={onConfirmChanged}
      />
      
      </View>
    </View>
  );
};
