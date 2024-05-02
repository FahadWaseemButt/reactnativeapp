import { View, Text, TextInput, TouchableOpacity, Image } from 'react-native'
import React, { useState } from 'react'

const FormField = ({ title, value, placeholder, handleChangeText, ...props }) => {
    const [showPassword, setShowPassword] = useState(false)

  return (
    <View>
      <Text style={{color: 'white', marginTop: 20, fontSize: 20, textAlign: 'center', fontFamily: 'serif', paddingBottom: 10 }}>
        {title}
      </Text>
      <View style={{ borderStyle: 'solid', borderWidth: 1, borderRadius: 10, borderColor:'white', 
                    width: '100%', height: 35, backgroundColor: 'black', flexDirection: 'row' }}
            
      >
        <TextInput 
            style={{ flex: 1, color: 'white', paddingLeft: 10, paddingRight: 10 }}
            value={value}
            placeholder={placeholder}
            placeholderTextColor="#7b7b8b"
            onChangeText={handleChangeText}
            secureTextEntry={title === 'Password' && !showPassword}
        />

        {title === 'Password' && (
            <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
                <Image 
                    source={!showPassword ? "show" : "hide"}
                    width={6} height={6}
                    resizeMode='contain'
                />
            </TouchableOpacity>
        )}
      </View>
    </View>
)
}
 
export default FormField