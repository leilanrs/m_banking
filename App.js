import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack"
import { Button, StyleSheet, Text, View } from 'react-native';
import { app, getAuth, auth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged } from "./firebaseConfig";

import { useEffect, useState } from 'react';

import HomeScreen from "./screen/HomeScreen";
import SignInScreen from "./screen/SignScreen";
import SplashScreen from "./screen/SplashScreen";

const Stack = createStackNavigator()

export default function App() {
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false)

  useEffect(() => {
    // const auth = getAuth(); // Panggil auth untuk cek koneksi dgn firebase
    // console.log(auth) //untuk menampilkan data debugging
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const uid = user.uid;
        console.log(`User Logged In ${uid}`)
        setIsUserLoggedIn(true)
      } else {
        // User is signed out
        console.log(`User Not Logged In`)
        setIsUserLoggedIn(false)
      }
    });
  })

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Splash">
        <Stack.Screen
          options={{ headerShown: false }}
          name="Splash"
          component={SplashScreen}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="Home"
          component={HomeScreen}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="SignIn"
          component={SignInScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
