import { View, Text, ScrollView, Image } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import FormField from '../components/FormField'
import CustomButton from '../components/CustomButton'
import { Link } from 'expo-router'

const SignUp = () => {
  const [form, setForm] = useState({
    username: '',
    email: '',
    password: ''
  })

  const [isSubmitting, setIsSubmitting] = useState(false)

  const submit = () => {

  }

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#202020', alignItems: 'center', justifyContent: 'center'}}>
      <ScrollView>
        <View style={{ width: '100%', justifyContent: 'center', minHeight: 650, padding: 10 }}>
        <Image
          source={require('../../assets/images/test.png')}
          style={{ width: 100, height: 100, alignSelf: 'center' }}
        />
        <Text style={{ color: 'white', marginTop: 20, fontSize: 20, textAlign: 'center', fontFamily: 'serif',
                      paddingRight: 10, paddingLeft: 10, paddingBottom: 10 }}>
          Sign up to TestApp
        </Text>
        <FormField 
          title="Username"
          value={form.username}
          handleChangeText={(e) => setForm({ ...form, username: e})}
          style= {{ marginTop: 10 }}
        />
        <FormField 
          title="Email"
          value={form.email}
          handleChangeText={(e) => setForm({ ...form, email: e})}
          style= {{ marginTop: 7 }}
        />
        <FormField 
          title="Password"
          value={form.password}
          handleChangeText={(e) => setForm({ ...form, password: e})}
          style= {{ marginTop: 7 }}
        />
        <View style={{ paddingTop: 30 }}>
          <CustomButton
            title="Sign Up"
            handlePress={submit}
            isLoading={isSubmitting}
          />

        <View style={{ justifyContent: 'center', paddingTop: 10, flexDirection: 'row' }}>
          <Text style={{ color: 'white', paddingRight: 5 }}>
            Have an account already? 
          </Text>
          <Link href="/sign-in" style={{ color: 'blue', fontWeight: 'bold' }}>
            Sign In
          </Link>
        </View>

        </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default SignUp