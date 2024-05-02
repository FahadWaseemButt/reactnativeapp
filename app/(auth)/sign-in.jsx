import { View, Text, ScrollView, Image } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import FormField from '../components/FormField'
import CustomButton from '../components/CustomButton'
import { Link } from 'expo-router'

const SignIn = () => {
  const [form, setForm] = useState({
    email: '',
    password: ''
  })

  const [isSubmitting, setIsSubmitting] = useState(false)

  const submit = () => {

  }

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#202020', alignItems: 'center', justifyContent: 'center'}}>
      <ScrollView>
        <View style={{ width: '100%', justifyContent: 'center', minHeight: 500, padding: 10 }}>
        <Image
            // source={} resizeMode='contain' width={''} height={''}
        />
        <Text style={{ color: 'white', marginTop: 20, fontSize: 20, textAlign: 'center', fontFamily: 'serif',
                      paddingRight: 10, paddingLeft: 10, paddingBottom: 10 }}>
          Log in to TestApp
        </Text>
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
        <View style={{ paddingTop: 50 }}>
          <CustomButton
            title="Sign In"
            handlePress={submit}
            isLoading={isSubmitting}
          />

        <View style={{ justifyContent: 'center', paddingTop: 10, flexDirection: 'row' }}>
          <Text style={{ color: 'white', paddingRight: 5 }}>
            Don't have an account? 
          </Text>
          <Link href="/sign-up" style={{ color: 'blue', fontWeight: 'bold' }}>
            Sign Up
          </Link>
        </View>

        </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default SignIn