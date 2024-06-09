import React, { useContext, useState } from "react";
import { Dimensions, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Edit2, Trash,TickSquare, CloseCircle , AddCircle} from "iconsax-react-native";
import { showMessage } from "react-native-flash-message";
import UiDropDown from "./ui-dropdown";
import { PhoneNumberInput } from "./phone-input";
import { Input } from "./input";
import { colors } from "../theme";
import ConfirmationButtons from "./confirmation-button";
import EmergencyContext from "../contexts/emergency-context";

interface ContactInfosProps {
  phoneNumber?: string[];
  email?: string[];
}
interface ContactField {
  type: string;
  value: string;
  confirmed: boolean;
} 
const ContactInfos: React.FC<ContactInfosProps> = ({ phoneNumber, email }: ContactInfosProps) => {
  const initialContactFields = [
    ...(phoneNumber ? phoneNumber.map(num => ({ type: "Mobile", value: num, confirmed: true })) : []),
    ...(email ? email.map(e => ({ type: "Email", value: e, confirmed: true })) : [])
  ];
 

  const [contactFields, setContactFields] = useState<ContactField[]>(initialContactFields);
  const { setEmergencyContactPhoneNumber, EmergencyContactPhoneNumber, setEmergencyContactEmail, EmergencyContactEmail , updatePhoneNumber } = useContext(EmergencyContext);
  const [data] = useState<string[]>(["Mobile", "Email", "Landline"]);
  const [ onEdit, setOnEdit ] = useState(false); 
  const [ isModifiyingField, setIsModifiyingField ] = useState(false);
 
  const addNewContactField = () => {
    setOnEdit(false)
    const lastContactField = contactFields[contactFields.length - 1];
  
    if (!lastContactField || lastContactField.confirmed) {
      // Réinitialisez la valeur à une chaîne vide lorsque vous ajoutez un nouveau champ
      setContactFields((prevFields) => [...prevFields, { type: "Mobile", value: " ", confirmed: false }]);
    } else {
      showMessage({
        message: "Veuillez confirmer le champ actuel avant d'ajouter un nouveau champ",
        type: "danger",
        duration: 3000,
        position:'top'
      });
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

  const handleConfirmPhone = (index: number) => {
    const contact = contactFields[index];
    if (contact.value === "") {
     showMessage({
        message: "Le numéro de téléphone ne peut pas être vide",
        type: "danger",
        duration: 3000,
        position:'top'
      });
      return;
    }
    if (EmergencyContactPhoneNumber.includes(contact.value) && contact.value !== EmergencyContactPhoneNumber[index]) {
     
      showMessage({
        message: "Le numéro de téléphone existe déjà",
        type: "danger",
        duration: 3000,
        position:'top'
      });
      return;
    }
   
    if (contact.value) {
      setEmergencyContactPhoneNumber(prevPhoneNumbers => [...prevPhoneNumbers, contact.value]);
    
   
    if(isModifiyingField){
    setEmergencyContactPhoneNumber
    showMessage({
      message: "Le numéro de téléphone a été modifié avec succès",
      type: "success",
      duration: 3000,
      position:'top',
      style:{
        zIndex:9999,
        top:20
      }
    });
     
    }
    else{
      showMessage({
        message: "Le numéro de téléphone a été ajouté avec succès",
        type: "success",
        duration: 3000,
        position:'top'
      });
    }
    const newFields = [...contactFields];
    newFields[index].confirmed = true;
    setContactFields(newFields);
  }
  };

  const handleConfirmEmail = (index: number) => {
    const email = contactFields[index].value;
    if (email === "") {
     showMessage({
        message: "L'adresse e-mail ne peut pas être vide",
        type: "danger",
        duration: 3000,
        position:'top'
      });
      return;
    }
    if (EmergencyContactEmail.includes(email) && email !== EmergencyContactEmail[index]) {
     showMessage({
        message: "L'adresse e-mail existe déjà",
        type: "danger",
        duration: 3000,
        position:'top'
      });
      return;
    }
    setEmergencyContactEmail(prevEmails => [...prevEmails, email]);
    const newFields = [...contactFields];
    newFields[index].confirmed = true;
    setContactFields(newFields);
    
  };


const handleClose = (index: number) => {
  const editedField = contactFields[index];
  const newFields = [...contactFields];
  // Si le champ n'est pas confirmé et la valeur est définie, ajoutez une nouvelle ligne
  if (!editedField.confirmed && editedField.value !== undefined) {
    newFields[index].confirmed = false;
    setContactFields(newFields);
  }


  
};

  const handleEdit = (index: number) => {
    setOnEdit(true)
    const newFields = [...contactFields];
    setIsModifiyingField(true);
    newFields[index].confirmed = false;
  
    // Si le type est "Email" et la valeur actuelle est vide, utilisez la valeur stockée dans EmergencyContactEmail
    if (newFields[index].type === "Email" && newFields[index].value === "") {
      newFields[index].value = EmergencyContactEmail[index];
    }
  
    // Si le type est "Mobile" et la valeur actuelle est vide, ne pas réinitialiser avec le numéro existant
    if (newFields[index].type === "Mobile" && newFields[index].value === "") {
      // Laissez la valeur vide, ou initialisez-la avec une valeur par défaut si nécessaire
    }
  
    setContactFields(newFields);
  };
 
  const handleDelete = (index: number) => {
    const newFields = [...contactFields];
    // Supprimer le champ du tableau local
    newFields.splice(index, 1);
    setContactFields(newFields);
  
    // Supprimer le numéro de téléphone ou l'adresse e-mail associé au contact dans le contexte
    if (index < EmergencyContactPhoneNumber.length) {
      // Supprimer le numéro de téléphone
      const updatedPhoneNumbers = [...EmergencyContactPhoneNumber];
      updatedPhoneNumbers.splice(index, 1);
      setEmergencyContactPhoneNumber(updatedPhoneNumbers);
    } else {
      // Supprimer l'adresse e-mail
      const updatedEmails = [...EmergencyContactEmail];
      updatedEmails.splice(index - EmergencyContactPhoneNumber.length, 1);
      setEmergencyContactEmail(updatedEmails);
    }
  };
  
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Contact Infos</Text>
      
        <TouchableOpacity onPress={addNewContactField}>
        <AddCircle size={27} color={'#006D5B'} variant="Outline" />
        </TouchableOpacity>
        

      </View>
      <ScrollView style={{}}>
       
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
                  <TouchableOpacity onPress={() => handleEdit(index)} style={{ position: 'absolute', left: 246 }}>
                    <Edit2 size={23} color={'#006D5B'} variant="Bulk" />
                  </TouchableOpacity>
                  <TouchableOpacity onPress={() => handleDelete(index)}>
                  <Trash size={23} color={colors.accent[50]} variant={'Bulk'} />
                  </TouchableOpacity>
                </>
              ) : (
                <>
                  {field.type === "Mobile" && (
                    <PhoneNumberInput
                      customStyles={{
                        container: { width: Dimensions.get('window').width - 200
                          , height: 53 },
                        flagContainer: { width: 80 }
                      }}
                      onPhoneNumberChange={(value) => handleValueChange(index, value)}
                      defaultValue={onEdit==true && EmergencyContactPhoneNumber[index]!==undefined ? EmergencyContactPhoneNumber[index]: ""}
                    />
                  )}
                  {field.type === "Email" && (
                    <Input
                    defaultValue={onEdit==true&& contactFields[index].confirmed !=undefined ? contactFields[index].value: "" }
                    //   customStyles={{
                    //     container: { marginBottom: 8 },
                    //     input: { borderColor: '#EFEFEF', width: 180, height: 53 },
                    //   }}
                      onChangeText={(value) => handleValueChange(index, value)} 
                    />
                  )}
                  <ConfirmationButtons
                    confirmationStyle={{ top: 10 }}
                    confirmIcon={<TickSquare size={30} color="#006D5B" variant={'Bold'} />}
                    cancelIcon={<CloseCircle size={30} color="#FF9160" variant={'Bold'} />}
                    onCancelChanged={() => handleClose(index)}
                    onConfirmChanged={() => {
                      handleClose(index);
                      if (field.type === "Mobile") {
                        handleConfirmPhone(index);
                      } else {
                        handleConfirmEmail(index);
                        console.log("close")
                      }
                    }}
                  />
                </>
              )}
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderWidth: 1,
    maxHeight: 200,
    borderColor: "#EFEFEF",
    borderRadius: 12,
    paddingHorizontal: 16,
    paddingVertical: 16,
    zIndex:-1
  },
  header: {
    flexDirection: 'row',
    justifyContent: "space-between",
    marginBottom: 8,
  
  },
  headerText: {
    fontSize: 18,
    color: '#605076'
  },
  phoneInputContainer: {
    flexDirection: 'row'
  },
  dropdown: {
   width:Dimensions.get('window').width-100,
    marginBottom: 16
  },
});

export default ContactInfos;
