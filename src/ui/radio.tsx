
import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

interface RadioButtonProps {
    labelButtons: string[];
    onLabelClicked: (index: number) => void;
}

const RadioButton: React.FC<RadioButtonProps> = ({ labelButtons,onLabelClicked }) => {
    const [selectedButtonIndex, setSelectedButtonIndex] = useState<number | null>(null);

    const handleLabelClicked = (index: number) => {
        setSelectedButtonIndex(index);
        onLabelClicked(index);
    };
    
    return (
        <View style={styles.radioButtonContainer}>
            {labelButtons.map((label, index) => (
                <View key={index} style={styles.radioButtonWrapper}>
                    <TouchableOpacity
                        onPress={() => handleLabelClicked(index)}
                        style={[styles.radioButton, selectedButtonIndex === index && styles.radioButtonSelected]}
                    >
                        <View style={styles.radioButtonOuter}>
                            <View style={[styles.radioButtonInner, selectedButtonIndex === index && styles.radioButtonInnerSelected]} />
                        </View>
                    </TouchableOpacity>
                    <Text style={[styles.radioButtonLabel, selectedButtonIndex === index && styles.radioButtonLabelSelected]}>
                        {label}
                    </Text>
                </View>
            ))}
        </View>
    );
};

const styles = StyleSheet.create({
    radioButtonContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    radioButtonWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 5,
    },
    radioButton: {
        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal: 5,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 1000,
        width: 20,
        height: 20,
    },
    radioButtonSelected: {
        backgroundColor: '#ccc',
    },
    radioButtonOuter: {
        width: 12,
        height: 12,
        borderRadius: 6,
        borderWidth: 2,
        borderColor: '#ccc',
        alignItems: 'center',
        justifyContent: 'center',
    },
    radioButtonInner: {
        width: 8,
        height: 8,
        borderRadius: 4,
        backgroundColor: '#ccc',
    },
    radioButtonInnerSelected: {
        backgroundColor: '#000',
    },
    radioButtonLabel: {},
    radioButtonLabelSelected: {
        fontWeight: 'bold',
    },
});

export default RadioButton;