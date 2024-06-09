import React, { useContext, useState } from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity } from 'react-native';

import { showMessage } from 'react-native-flash-message';
import { Trash, Edit2, ArrowDown2, ArrowUp2 } from 'iconsax-react-native';

import { TickSquare, CloseCircle } from "iconsax-react-native";
import { Input } from './input';
import EmergencyContext, { EmergencyContact } from '../contexts/emergency-context';
import { PhoneNumberInput } from './phone-input';
import ConfirmationButtons from './confirmation-button';
import { CustomAlert } from './custom-alert';
import { EmergencyForm } from './emergency-form';

const EmailInput: React.FC<{
    defaultValue: string;
    onEmailChange: (value: string) => void;
}> = ({ defaultValue, onEmailChange }) => {
    return (
        <Input
            placeholder="Enter Email"
            defaultValue={defaultValue}

            onChangeText={(text: string) => onEmailChange(text)}
        />
    );
};

const Contact: React.FC<{
    item: EmergencyContact;
    index: number;
    removeContact: (index: number) => void;
}> = ({ item, index, removeContact }) => {
    const [isExpanded, setIsExpanded] = useState(false);
    const [isEmergencyFormVisible, setisEmergencyFormVisible] = useState(false)


    const [editingPhoneIndex, setEditingPhoneIndex] = useState<number | null>(null);
    const [editedPhoneNumber, setEditedPhoneNumber] = useState('');

    const [editingEmailIndex, setEditingEmailIndex] = useState<number | null>(null);
    const [editedEmail, setEditedEmail] = useState('');

    const [selectedContact, setSelectedContact] = useState<{ index: number, contact: EmergencyContact } | null>(null);

    const handlePhoneNumberChange = (value: string) => {
        setEditedPhoneNumber(value);
    };

    const handleEmailChange = (value: string) => {
        setEditedEmail(value);
    };

    const {
        updatePhoneNumber,
        removePhoneNumber,
        updateEmergencyContact,
        removeEmail,
        updateEmail,
    } = useContext(EmergencyContext);

    const handleEdit = (type: 'phone' | 'email', index: number) => {
        if (type === 'phone') {
            setEditingPhoneIndex(index);
            setEditedPhoneNumber(item.phoneNumber[index]);
        } else {
            setEditingEmailIndex(index);
            setEditedEmail(item.email[index]);
        }
    };

    const handleConfirmEdit = () => {
        if (editingPhoneIndex !== null) {
            updatePhoneNumber(index, editingPhoneIndex, editedPhoneNumber);
            setEditingPhoneIndex(null);
        } else if (editingEmailIndex !== null) {
            updateEmail(index, editingEmailIndex, editedEmail);
            setEditingEmailIndex(null);
        }
    };

    const handleCancelEdit = () => {
        setEditingPhoneIndex(null);
        setEditingEmailIndex(null);
    };

    return (
        <>
            <View style={styles.card}>
                <View style={styles.row}>
                    <Text style={styles.value}>{item.firstName} {item.lastName}</Text>
                    <View style={styles.icons}>
                        <TouchableOpacity onPress={() => {
                            setisEmergencyFormVisible(true);
                            setSelectedContact({ index, contact: item });
                        }}>
                            <Edit2 size={23} color={"#006D5B"} variant='Bulk' style={styles.icon} />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => {
                            removeContact(index)
                            showMessage({
                                message: "Contact removed",
                                type: "success",
                                icon: "success",
                                duration: 3000,
                            })
                        }


                        }>
                            <Trash size={23} color={"#FF9160"} />
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.row}>
                    <Text style={styles.value}>{item.relationship}</Text>
                    <Text style={[styles.value, { marginHorizontal: -32 }]}>.</Text>
                    <Text style={styles.value}>{item.gender}</Text>
                    <Text style={styles.value}>  {item.phoneNumber[0]} </Text>
                    <TouchableOpacity onPress={() => setIsExpanded(!isExpanded)}>
                        {isExpanded ? <ArrowUp2 size={23} color={"black"} /> : <ArrowDown2 size={23} color={"black"} />}
                    </TouchableOpacity>
                </View>
                <View style={styles.row}></View>
                {isExpanded && (
                    <>
                        {item.phoneNumber.map((phoneNumber, phoneIndex) => (
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 16 }}>
                                {editingPhoneIndex === phoneIndex ? (
                                    <>
                                        <PhoneNumberInput
                                            customStyles={{
                                                container: { width: 220, height: 53 },
                                                flagContainer: { width: 80 },
                                            }}
                                            defaultValue={phoneNumber}
                                            onPhoneNumberChange={handlePhoneNumberChange}
                                        />
                                        <ConfirmationButtons
                                            confirmationStyle={{ top: 10 }}
                                            confirmIcon={<TickSquare size={30} color="#006D5B" variant={'Bold'} />}
                                            cancelIcon={<CloseCircle size={30} color="#FF9160" variant={'Bold'} />}
                                            onCancelChanged={() => handleCancelEdit()}
                                            onConfirmChanged={() => handleConfirmEdit()}
                                        />
                                    </>
                                ) : (
                                    <>
                                        <Text>
                                            Mobile
                                        </Text>
                                        <Text>{phoneNumber}</Text>
                                        <TouchableOpacity onPress={() => handleEdit('phone', phoneIndex)}>
                                            <Edit2 size={23} color={"#006D5B"} variant='Bulk' />
                                        </TouchableOpacity>
                                        <TouchableOpacity onPress={() => removePhoneNumber(index, phoneIndex)}>
                                            <Trash size={23} color={"#FF9160"} />
                                        </TouchableOpacity>
                                    </>
                                )}
                            </View>
                        ))}
                        {item.email.map((email, emailIndex) => (
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                {editingEmailIndex === emailIndex ? (
                                    <>
                                        <EmailInput
                                            defaultValue={email}
                                            onEmailChange={handleEmailChange}
                                        />
                                        <ConfirmationButtons
                                            confirmationStyle={{ top: 10 }}
                                            confirmIcon={<TickSquare size={30} color="#006D5B" variant={'Bold'} />}
                                            cancelIcon={<CloseCircle size={30} color="#FF9160" variant={'Bold'} />}
                                            onCancelChanged={() => handleCancelEdit()}
                                            onConfirmChanged={() => handleConfirmEdit()}
                                        />
                                    </>
                                ) : (
                                    <>
                                        <Text>Email</Text>
                                        <Text>{email}</Text>
                                        <TouchableOpacity onPress={() => handleEdit('email', emailIndex)}>
                                            <Edit2 size={23} color={"#006D5B"} variant='Bulk' />
                                        </TouchableOpacity>
                                        <TouchableOpacity onPress={() => removeEmail(index, emailIndex)}>
                                            <Trash size={23} color={"#FF9160"} />
                                        </TouchableOpacity>
                                    </>
                                )}
                            </View>
                        ))}
                    </>
                )}
            </View>
            <CustomAlert
                animationType='fade'
                isModalVisible={isEmergencyFormVisible}
                title='Edit Emergency Contact'
                // titleStyle={{ fontSize: 18, color: "#605076", marginTop: 10 }}
                onClose={
                    () => {
                        setisEmergencyFormVisible(false)
                    }
                }
            // onClose={() => {
            //   setSelectedContact(null);
            // }}
            >
                {selectedContact &&
                    <EmergencyForm
                        onClose={() => setisEmergencyFormVisible(false)}
                        emergencyInfo={selectedContact.contact}
                        contactIndex={selectedContact.index} />}
            </CustomAlert>
        </>
    );
};

const Infoline: React.FC = () => {
    const { emergencyContacts, removeEmergencyContact } = useContext(EmergencyContext);

    return (
        <FlatList
            scrollEnabled={false}
            data={emergencyContacts}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item, index }) => <Contact item={item} index={index} removeContact={removeEmergencyContact} />}
        />
    );
};

const styles = StyleSheet.create({
    card: {
        marginHorizontal: 10,
        paddingVertical: 16,
        paddingHorizontal: 6,
        backgroundColor: '#fff',
        borderRadius: 8,
        borderWidth: 0.5,
        borderColor: '#D0D5DD',

        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.3,
        shadowRadius: 1,
        elevation: 1,
        marginBottom: 20,
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 8,
    },
    icons: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    icon: {
        marginRight: 34
    },
    label: {
        marginBottom: 8,
        fontSize: 15,
        fontFamily: 'SFProDisplay-Light',
        color: "#808080",
    },
    value: {
        marginBottom: 5,
        fontSize: 15,
        fontFamily: 'SFProDisplay-Medium',
        color: "#4F4F4F",
    },
});

export default Infoline;