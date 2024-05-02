import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'

const CustomButton = ({ title, handlePress, isLoading }) => {
  return (
    <TouchableOpacity 
        onPress={handlePress}
        activeOpacity={0.7}
        style={{ backgroundColor: 'white', padding: 10, justifyContent: 'center', alignItems: 'center', borderRadius: 20 }}
    >
        <Text style={{ fontFamily: 'sans-serif-medium', fontWeight: 'bold', fontSize: 18 }}>
            {title}
        </Text>
    </TouchableOpacity>
  )
}

export default CustomButton