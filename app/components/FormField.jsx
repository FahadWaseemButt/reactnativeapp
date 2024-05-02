import { View, Text, TextInput, TouchableOpacity, Image } from 'react-native'
import React, { useState } from 'react'
import Icon from 'react-native-vector-icons/FontAwesome'

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
            style={{ flex: 1, color: 'white', paddingLeft: 10, paddingRight: 10, textAlign: 'center' }}
            value={value}
            placeholder={placeholder}
            placeholderTextColor="#7b7b8b"
            onChangeText={handleChangeText}
            secureTextEntry={title === 'Password' && !showPassword}
        />

        {title === 'Password' && (
          <Icon
            name={showPassword ? 'eye-slash' : 'eye'}
            size={20}
            color="white"
            style={{ paddingRight: 10, paddingTop: 5 }}
            onPress={() => setShowPassword(!showPassword)}
          />
        )}
      </View>
    </View>
)
}
 
export default FormField