import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import HomeStack from './src/Navigators/Stacks/HomeStack';
// import {
//   StyleSheet,
// } from 'react-native';


function App() {
  return (
    <NavigationContainer>
      <HomeStack />
    </NavigationContainer>
  );
}

// const styles = StyleSheet.create({
// });

export default App;
