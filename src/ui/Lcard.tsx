import React from 'react';
import { TouchableOpacity } from '.'; 

interface CardProps {
   
    children: React.ReactNode;
    onItemPress:()=>void
}

const Card: React.FC<CardProps> = ({ children,onItemPress }) => {
    return (
        <TouchableOpacity
        onPress={onItemPress}
            className='flex bg-white border border-neutral-200 rounded-lg mb-4 mx-4 '
        >
            {children}
        </TouchableOpacity>
    );
};

export default Card;
