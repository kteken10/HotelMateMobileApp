import React, { ReactElement } from 'react';
import { TouchableOpacity, View, ViewStyle } from 'react-native';


interface ConfirmationButtonsProps {
    onConfirmChanged: () => void;
    onCancelChanged: () => void;
    confirmationStyle?: ViewStyle;
    confirmIcon?: ReactElement;
    cancelIcon?: ReactElement;
}

const ConfirmationButtons: React.FC<ConfirmationButtonsProps> = ({
    onConfirmChanged,
    onCancelChanged,
    confirmationStyle,
    confirmIcon,
    cancelIcon
}) => {
    return (
        <View style={[ {flexDirection: 'row'}, confirmationStyle,]}>
           
            <TouchableOpacity onPress={onCancelChanged} style={{}}>
            <View style={{marginRight: 25, backgroundColor:'rgba(255, 145, 96, 0.2)',borderRadius:8}}>
                {cancelIcon}
            </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={onConfirmChanged} style={{}}>
            <View style={{  backgroundColor:'rgba(35, 136, 120, 0.2)',borderRadius:8}}>
                {confirmIcon}
            </View>
            </TouchableOpacity>
        </View>
    );
};
export default ConfirmationButtons;