import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, StyleProp, ViewStyle } from 'react-native';
import { Select, SelectItem, IndexPath } from '@ui-kitten/components';
import { Mobile, Call, Sms } from 'iconsax-react-native';

interface Props {
    data: string[];
    containerStyle?: StyleProp<ViewStyle>;
    defaultValue?: string | undefined;
    showDefaultIcon?: boolean;
    handleOnSelect?: (value: string) => void;
}

const getIconComponent = (option: string) => {
    switch (option) {
        case 'Mobile':
            return <Mobile size={25} color="black" variant={'Outline'} />;
        case 'Email':
            return <Sms size={25} color="black" variant={'Outline'} />;
        case 'Landline':
            return <Call size={25} color="black" variant={'Outline'} />;
        default:
            return null;
    }
};

const UiDropDown = ({ data, containerStyle, defaultValue, showDefaultIcon, handleOnSelect }: Props) => {
    const defaultIndex = new IndexPath(data.indexOf(defaultValue || ''));
    const [selectedIndex, setSelectedIndex] = useState<IndexPath>(defaultIndex);
    const [icon, setIcon] = useState<React.ReactNode>(showDefaultIcon ? <Mobile size={30} color="#006D5B" variant={'Bold'} /> : null);

    const onSelect = (index: IndexPath | IndexPath[]) => {
        let selectedIdx: IndexPath;
        if (Array.isArray(index)) {
            selectedIdx = index[0];
        } else {
            selectedIdx = index;
        }
        setSelectedIndex(selectedIdx);
        setIcon(getIconComponent(data[selectedIdx.row]));

        if (handleOnSelect) {
            handleOnSelect(data[selectedIdx.row]);
        }
    };

    useEffect(() => {
        if (defaultValue) {
            onSelect(defaultIndex);
        }
    }, [defaultValue]);

    return (
        <Select
            style={[styles.container, containerStyle]}
            selectedIndex={selectedIndex}
            accessoryLeft={evaProps => <>{icon}</>}
            onSelect={onSelect}
            value={evaProps => (
                <Text {...evaProps} style={{ marginVertical: 8, right:icon ?88:0 , left: icon? -84:32 }}>
                    {selectedIndex.row !== undefined ? data[selectedIndex.row] : defaultValue}
                </Text>
            )}>
            {data.map(option => (
                <SelectItem key={option} title={evaProps =>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        {getIconComponent(option)}
                        <Text {...evaProps}> {option}</Text>
                    </View>}
                />
            ))}
        </Select>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white'
    },
});

export default UiDropDown;