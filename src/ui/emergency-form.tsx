import React, { useContext, useEffect } from 'react';
import { StyleSheet } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { Input } from './input';
import ContactInfos from './contact-info';
import EmergencyContext from '../contexts/emergency-context';
import UiDropDown from './ui-dropdown';
import { View ,Text} from '.';
import { SButton } from './button';
import { capitalizeFirstLetter } from '../utils/string';

interface EmergencyContact {
  firstName: string | undefined;
  lastName: string;
  phoneNumber: string[];
  relationship: string |undefined;
  gender: string | undefined;
  email: string[];
}

interface EmergencyProps {
  onClose: () => void;
  emergencyInfo?: EmergencyContact;
  contactIndex?: number;
}

const genderOptions = ['Male', 'Female', 'Unknown'];
const relationshipOptions = ['Father', 'Mother', 'Brother', 'Sister', 'Uncle', 'Aunt', 'Grandfather', 'Grandmother', 'Cousin', 'Friend', 'Other'];

export const EmergencyForm: React.FC<EmergencyProps> = ({ emergencyInfo, contactIndex , onClose }) => {
 
  const {
    setEmergencyContactFirstName,
    setEmergencyContactLastName,
    EmergencyContactLastName,
    EmergencyContactFirstName,
    setEmergencyContactGender,
    setEmergencyContactRelationship,
    EmergencyContactPhoneNumber,
    setEmergencyContactPhoneNumber,
    EmergencyContactRelationship,
    EmergencyContactGender,
    addEmergencyContact,
    updateEmergencyContact,
    EmergencyContactEmail,
    setEmergencyContactEmail,
  } = useContext(EmergencyContext);
  
  const isModifying = Boolean(emergencyInfo);
  useEffect(()=>{
    

  }, [ isModifying])
  

useEffect(() => {
    if (isModifying) {
        const { firstName, lastName, gender, relationship, phoneNumber, email } = emergencyInfo || {};
        setEmergencyContactFirstName(firstName || '');
        setEmergencyContactLastName(lastName || '');
        setEmergencyContactGender(gender || '');
        setEmergencyContactRelationship(relationship || '');
        setEmergencyContactPhoneNumber(phoneNumber || []);
        setEmergencyContactEmail(email || []);
    } else {
        setEmergencyContactFirstName('');
        setEmergencyContactLastName('');
        setEmergencyContactGender('');
        setEmergencyContactRelationship('');
        setEmergencyContactPhoneNumber([]);
        setEmergencyContactEmail([]);
    }
}, [isModifying, emergencyInfo]);
  const onConfirmChanges = () => {
  
    const newContact = {
      firstName: EmergencyContactFirstName,
      lastName: EmergencyContactLastName,
      gender: EmergencyContactGender,
      relationship: EmergencyContactRelationship,
      phoneNumber: EmergencyContactPhoneNumber,
      email: EmergencyContactEmail,
    };

    if (isModifying) {
      updateEmergencyContact(contactIndex, newContact);
    
    
    } else {
      addEmergencyContact(newContact);
    
     
    }
  };

  return (
    <KeyboardAwareScrollView
      enableOnAndroid={true}
      extraScrollHeight={20}
      showsVerticalScrollIndicator={false}
      enableAutomaticScroll={true}
    >
      
      <View style={styles.container}>
        <View style={{}}>
          <Text style={[styles.label]}>FirstName</Text>
          <Input
            className='px-2'
            defaultValue={isModifying ? emergencyInfo?.firstName : ''}
            
            onChangeText={(text: string) => setEmergencyContactFirstName(text)}
          />
          <Text style={styles.label}>LastName</Text>
          <Input
             className='px-2'
            defaultValue={isModifying ? emergencyInfo?.lastName : ''}
            onChangeText={(text: string) => setEmergencyContactLastName(text)}
          />
        </View>

        <View style={{ marginBottom: 12 }}>
        <Text style={styles.label}>Relationships</Text>
          <UiDropDown
            data={relationshipOptions}
            defaultValue={isModifying ? emergencyInfo?.relationship : '' }
           
            handleOnSelect={(value) => setEmergencyContactRelationship(value)}
          />

          <Text style={styles.label}>Gender</Text>
          <UiDropDown
           
            data={genderOptions}
            defaultValue={isModifying ? emergencyInfo?.gender:''}
          
            handleOnSelect={(value) => setEmergencyContactGender(value)}
            
          />
        </View>

        <View style={[styles.row ,{}]}>
          <ContactInfos 
          phoneNumber={isModifying ? emergencyInfo?.phoneNumber : []}
          email={isModifying ? emergencyInfo?.email : []}
           />
        </View>

       
         <View className='flex-row my-4'>

        <SButton
              title={capitalizeFirstLetter("cancel")}
            
           
              className="w-1/2  mobile:py-3 tablet:py-3 border border-accent-50"
              titleClassName='text-accent-50'
                onPress={onClose }
            
             
            />
            <SButton
              title={capitalizeFirstLetter("confirm")}
              className="w-1/2  mobile:py-3 tablet:py-3 bg-secondary-50"
              titleClassName="text-white"
               onPress={()=>{
                onConfirmChanges()
                onClose()
              }} 
              
            />

        </View> 
        {/* <View className="flex mobile:mt-12 mt-12 mb-4">
              <SButton
              title={capitalizeFirstLetter("confirm")}
              className="self-center mobile:py-3 tablet:py-3 w-full   bg-secondary-50 mb-4"
              titleClassName={"text-white"}
            
              onPress={()=>{
                onConfirmChanges()
                onClose()
              }} 
            />
            <SButton
              title={capitalizeFirstLetter("cancel")}
              onPress={onClose }
              titleClassName="text-accent-50"
              className="self-center mobile:py-3 tablet:py-3 w-full  border border-accent-50"
            />
           
          </View> */}

      </View>
    </KeyboardAwareScrollView>
  );
};
const styles = StyleSheet.create({
  container: {
    borderColor: '#D0D5DD',
    top:16,
    paddingHorizontal:16,
  },
  
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  label: {
    fontSize: 15,
    fontFamily: 'SFProDisplay-Light',
    color: '#808080',
  },
  dropdown: {
  
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 16, 
    marginVertical: 16,
  },
  resetButton: {
    borderWidth: 0.75,
    borderRadius: 12,
    borderColor: '#FF9160',
    height: 46,
    width: 144,
    justifyContent: 'center',
  },
  resetButtonText: {
    color: '#FF9160',
    textAlign: 'center',
    fontSize: 16,
  },
  confirmButton: {
    backgroundColor: '#006D5B',
    borderRadius: 12,
    height: 46,
    width: 144,
    justifyContent: 'center',
  },
  confirmButtonText: {
    color: '#FFF',
    textAlign: 'center',
    fontSize: 16,
  },
});