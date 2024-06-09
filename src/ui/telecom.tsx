import React, { useContext, useState } from "react";
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import ConfirmationButtons from "./confirmation-button"
import { Edit2, Trash , Mobile, TickSquare, CloseCircle , AddCircle, ArrowUp2, ArrowDown2} from "iconsax-react-native";
import { showMessage } from "react-native-flash-message";
import UiDropDown from './ui-dropdown'
import UserInfoContext from "../contexts/user-info-context";
import { colors } from "../theme";
import { PhoneNumberInput } from "./phone-input";
import { Input } from "./input";
// import { PhoneNumber } from "libphonenumber-js";
interface ContactField {
  type: string;
  value: string;
  confirmed: boolean;
} 
interface ContactInfosProps {
  Number:string;
  email:string;
}
export const Telecom=({Number}:ContactInfosProps) => {
  const [isEditingDefaultPhone, setIsEditingDefaultPhone] = useState(false);
  const [contactFields, setContactFields] = useState<ContactField[]>([]);
  const {  updateUserPhoneNumber , removeUserPhoneNumber,  updateUserEmail ,removeUserEmail ,phoneNumber , setPhoneNumber,setEmail , email} = useContext(UserInfoContext);
  const [ onEdit, setOnEdit ] = useState(false);  
  const [data] = useState<string[]>(["Mobile", "Email", "Landline"]);
  const [ isCardExpanded, setIsCardExpanded ] = useState(true);
  const [isDefaultVisible , setIsDefaultVisible]=useState(true)
  const [userDefaultPhoneNumber , setUserDefaultPhoneNumber]=useState(Number)
  
  const addNewContactField = () => {
    setOnEdit(false)
    const lastContactField = contactFields[contactFields.length - 1];
    if (!lastContactField || lastContactField.confirmed) {
      // Réinitialisez la valeur à une chaîne vide lorsque vous ajoutez un nouveau champ
      setContactFields((prevFields) => [...prevFields, { type: "Mobile", value: "", confirmed: false }]);
    }
    else {
      console.log("Veuillez confirmer le numéro de téléphone actuel avant d'ajouter un nouveau.");
    }
  };

  const handleTypeChange = (index: number, type: string) => {
    const newFields = [...contactFields];
    newFields[index].type = type;
    setContactFields(newFields);
  };

  const handleValueChange = (index: number, value: string) => {
    const newFields = [...contactFields];
    newFields[index].value = value;
    setContactFields(newFields);
  };

  const handleConfirm = (index: number) => {
    const newFields = [...contactFields];
    newFields[index].confirmed = true;
    setContactFields(newFields);
  
    if (newFields[index].type === "Mobile") {
      const phone=contactFields[index].value 
      setPhoneNumber(prevPhone => {
        const newPhone = [...prevPhone];
        newPhone[index] = phone;
        return newPhone;
      });
      updateUserPhoneNumber(index, newFields[index].value);
    } else if (newFields[index].type === "Email") {
      const email=contactFields[index].value
      setEmail(prevEmail => {
        const newEmail = [...prevEmail];
        newEmail[index] = email;
        return newEmail;
      });
      updateUserEmail(index, newFields[index].value);
    }
  };
  const handleDelete = (index: number) => {
    const newFields = [...contactFields];
    const fieldToDelete = newFields.splice(index, 1)[0];
    setContactFields(newFields);
  
    if (fieldToDelete.type === "Mobile") {
      setPhoneNumber(prevPhone => {
        const newPhone = [...prevPhone];
        newPhone.splice(index, 1);
        showMessage({

          message: "Phone number deleted successfully",
          type: "danger",
          duration: 2000,
          position:'top',
          style:{top:34}
        });
        return newPhone;
      });
      removeUserPhoneNumber(index);
    } else if (fieldToDelete.type === "Email") {
      setEmail(prevEmail => {
        const newEmail = [...prevEmail];
        newEmail.splice(index, 1);
        return newEmail;
      });
      removeUserEmail(index);
    }
  };
  const handleEdit = (index: number) => {
    const newFields = [...contactFields];
    newFields[index].confirmed = false;
    setOnEdit(true)

    if (newFields[index].type === "Mobile") {
      newFields[index].value = phoneNumber[index] || "";
    } else if (newFields[index].type === "Email") {
      newFields[index].value = email[index] || "";
    }

    setContactFields(newFields);
  };

  const handleClose = (index: number) => {
    const newFields = [...contactFields];
    if(contactFields[index].value === "" || contactFields[index].value === undefined){
      newFields.splice(index, 1);
      setContactFields(newFields);
    }
   else if (!contactFields[index].confirmed && contactFields[index].value !== undefined) {

      newFields[index].confirmed = true;
      setContactFields(newFields);
   }
   
  };
  const handleEditDefaultPhone = () => {
    setIsEditingDefaultPhone(true);
    setIsDefaultVisible(false)
  };

  const handleDeleteDefaultPhone = () => {
  setIsDefaultVisible(false)
  };

  const handleSaveDefaultPhone = () => {

    showMessage({

      
      message: "Phone number Added successfully",
      type: "success",
      duration: 2000,
      position:'top',
      style:{top:34}
    })
   
    setIsEditingDefaultPhone(false);
   
  };
  const handleCloseDefault=()=>{
    setIsEditingDefaultPhone(false);

   

  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Contact Infos</Text>
        {/* <View style={{right:50}}> */}
        <TouchableOpacity onPress={addNewContactField} style={{ alignSelf:'flex-end', left:55}}>
        
        <AddCircle 
            size={25} color="#238878"  />  
        </TouchableOpacity>
        {/* </View> */}
        <TouchableOpacity  onPress={()=>setIsCardExpanded(!isCardExpanded)}>
          {isCardExpanded ? <ArrowUp2 size={25} color='black' /> :  <ArrowDown2 size={25} color='black' />

          }
        </TouchableOpacity>
      </View>
      <ScrollView>
        <View style={{
        flexDirection:'row', 
        justifyContent:'space-between', 
        marginBottom:8, 
        marginRight:8}}>

      {isDefaultVisible &&(
        <>
        <Mobile size={25} color="black" variant={'Outline'} style={{marginRight:8, right:2}}/>
        <Text style={{right:35, top:2}}>Phone</Text>
        <Text style={{fontSize:14,marginLeft:10, top:2, right:30}}>{userDefaultPhoneNumber}</Text>
        </>
      )}

        {isDefaultVisible && (
            <>
              <TouchableOpacity onPress={handleEditDefaultPhone} style={{ position: 'absolute', left: 246 }}>
                <Edit2 size={23} color={'#006D5B'} variant="Bulk" style={{ right: 5 }} />
              </TouchableOpacity>
              <TouchableOpacity onPress={handleDeleteDefaultPhone} style={{ left: 8 }}>
              <Trash size={23} color={colors.accent[50]} variant={'Bulk'} />
              </TouchableOpacity>
            </>
          )}
          {isEditingDefaultPhone && (
            <>
             <PhoneNumberInput
            defaultValue={Number}
             customStyles={{
               container: { width: 218, height: 53 },
               flagContainer: { width: 80 }
             }}
            onPhoneNumberChange={(value) => setUserDefaultPhoneNumber(value)}
           />
           <ConfirmationButtons
                  confirmationStyle={{top:16, left:5}}
                 confirmIcon={<TickSquare size={24} color="#006D5B" variant={'Bold'} />}
                 cancelIcon={<CloseCircle size={24} color="#FF9160" variant={'Bold'} />}
                  onConfirmChanged={()=>handleSaveDefaultPhone()}
                  onCancelChanged={()=>{handleCloseDefault()}}
                  />
           
            </>
          )}

        </View>
      {isCardExpanded && (
        <View style={{}}>
        {contactFields.map((field, index) => (
          <View key={index} style={{ marginBottom: 8 }}>
            {!field.confirmed && (
              <UiDropDown
                data={data}
                defaultValue={field.type}
                containerStyle={styles.dropdown}
                handleOnSelect={(value) => {
                  handleTypeChange(index, value);
                }}
              />
            )}
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
              {field.confirmed ? (
                <>
                  <Text>{field.type}</Text>
                  <Text style={{ fontSize: field.type === "Email" ? 14 : 14, position: 'absolute', left: 55 }}>{field.value}</Text>
                  <TouchableOpacity onPress={() => handleDelete(index)}>
                    <Trash size={23} color={'#FF9160'} />
                  </TouchableOpacity>
                  <TouchableOpacity onPress={() => handleEdit(index)} style={{ position: 'absolute', left: 246 }}>
        <Edit2 size={23} color={'#006D5B'} variant="Bulk" style={{right:5}} />
        </TouchableOpacity>
                </>
              ) : (
                <>
                  {field.type === "Mobile" && (
                    <PhoneNumberInput
                      defaultValue={onEdit==true ? phoneNumber[index] : ""}
                      customStyles={{
                        container: { width: 218, height: 53 },
                        flagContainer: { width: 80 }
                      }}
                      onPhoneNumberChange={(value) => handleValueChange(index, value)}
                    />
                  )}
                  {field.type === "Email" && (
                    <Input
                    defaultValue={onEdit==true ? email[index] : ""}
                     
                      onChangeText={(value) => handleValueChange(index, value)} 
                    />
                  )}
                  <ConfirmationButtons
                  confirmationStyle={{top:16}}
                 confirmIcon={<TickSquare size={24} color="#006D5B" variant={'Bold'} />}
                 cancelIcon={<CloseCircle size={24} color="#FF9160" variant={'Bold'} />}
                  onConfirmChanged={()=>handleConfirm(index)}
                  onCancelChanged={()=>handleClose(index)}
                  ></ConfirmationButtons>
                </>
              )}
            </View>
          </View>
        ))}
        </View>
      )}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
  
    borderWidth: 1,
    borderColor: "#EFEFEF",
    backgroundColor: 'white',
    borderRadius: 12,
    paddingHorizontal: 16,
    paddingVertical: 16,
    marginBottom: 20,
    zIndex:-2
  },
  header: {
    flexDirection: 'row',
    justifyContent: "space-between",
    marginBottom: 16
  },
  
  headerText: {

    fontSize: 18,
    color: '#605076'

  },
  dropdown: {
    minWidth: 289,
    marginBottom: 16
  },
});
