import React, {useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Header from './components/Header';
import StartGameScreen from './screens/StartGameScreen';
import { StatusBar } from 'expo-status-bar';

export default function App() {
  const [confirmedNumber, setconfirmedNumber] = useState();
  const screen = confirmedNumber 
  ? <Text>Game</Text>
  : <StartGameScreen onStarGame={setconfirmedNumber} />
  return (
    <View style={styles.container}>
      <Header title="Adivina el numero" />
      {screen}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
