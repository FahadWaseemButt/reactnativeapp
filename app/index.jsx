import { Link, Redirect, router } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import CustomButton from './components/CustomButton';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={{ height: '100%' }}>
        <View style={{ width: '100%', justifyContent: 'center', minHeight: 650 }}>
          <Image
          source={require('../assets/images/test.png')}
          style={{ width: 100, height: 100, alignSelf: 'center' }}
          />
          <View>
            <Text style={{ color: 'white', fontSize: 30, fontFamily: 'sans-serif-medium', 
                          fontWeight: 'bold', marginTop: 20, textAlign: 'center' }}>
              TestApp!
            </Text>
          </View>
          <Text style={{ color: 'white', marginTop: 20, fontSize: 20, textAlign: 'center', fontFamily: 'serif',
                          paddingRight: 10, paddingLeft: 10, paddingBottom: 20 }}>
            Filler text giving some details on the app.</Text>
          <CustomButton 
            title="Continue with Email"
            handlePress={() => router.push('/sign-in')}
            style={{ width: '100%', marginTop: 7 }}
          />
        </View>
      </ScrollView>
      <StatusBar backgroundColor='black' style="light" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#202020',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
