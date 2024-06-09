import React from 'react'

import { AddCircle as NAddCircle } from 'iconsax-react-native'
import { styled } from 'nativewind'
import { TouchableOpacity } from '.'


type AddButtons={
   

    onPress?:()=>void
}
export const AddButton=({onPress}:AddButtons)=>{
    const AddCircle=styled(NAddCircle)
    

    return (

        <TouchableOpacity
            className='border py-2 px-4 justify-center items-center flex-row rounded-lg border-secondary-50'
            onPress={onPress}
          > 
            <AddCircle color="#5C8833" size={20} className='text-secondary-50' />
            {/* <Text className='ml-[1.5] text-secondary-50' >Add</Text> */}
          </TouchableOpacity>
    )
}