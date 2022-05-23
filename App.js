import { StatusBar } from 'expo-status-bar';
import { Text, View, SafeAreaView } from 'react-native';

import { styles } from './Components/Style';
import Header from './Components/Header';
import Body from './Components/Body';
import Footer from './Components/Footer';

export default function App() {

  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <Body />
      <Footer />
    </SafeAreaView>
  );
}
