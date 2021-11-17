import React, {useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';

import AppLoading from 'expo-app-loading';
import Header from './components/Header';
import StartGameScreen from './screens/StartGameScreen';
import { useFonts } from 'expo-font';

export default function App() {
  const [loaded] = useFonts({
    Montagu: require('./assets/fonts/static/MontaguSlab_36pt/MontaguSlab_36pt-Bold.ttf')
  });
  const [confirmedNumber, setconfirmedNumber] = useState();

  if(!loaded) return <AppLoading />;

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
