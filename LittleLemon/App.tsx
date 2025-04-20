import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import OnBoarding from './screens/Onboarding';
import Profile from './screens/Profile';
import { useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Stack = createNativeStackNavigator();


export default function App() {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');

  // Const to keep a local state of asyncstorage
  const [isOnBoardingCompleted, setIsOnboardingCompleted] = useState(null)

  // Async to get asyncstorage item, in this case @onboarding
  const getOnboarding = async () => {
    try {
      const value = await AsyncStorage.getItem('@onboarding');

      if (value !== null) {
        setIsOnboardingCompleted(value);
      } else {
        setIsOnboardingCompleted(false);
      }
    } catch (e) {
      console.log("Couldnt load onboarding value.");
    }
  };

  // Runs every time the component is rendered
  useEffect(() => {
    getOnboarding();
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {isOnBoardingCompleted ? (
          <Stack.Screen name="Profile">
            {() => (
              <Profile firstName={name} setName={setName} email={email} setEmail={setEmail}></Profile>
            )}
          </Stack.Screen>
        ) :
          (
            <Stack.Screen name="OnBoarding">
              {()=>(
                <OnBoarding firstName={name} setName={setName} email={email} setEmail={setEmail}></OnBoarding>
              )}
            </Stack.Screen>
          )}
      </Stack.Navigator>
    </NavigationContainer>

  );
}





const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
