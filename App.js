// import 'react-devtools';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import RegistrationScreen from './src/Screen/RegistrationScreen';
import Ex from './src/Screen/RegistrationScreen/Ex'

export default function App() {
  return (
    // <View style={styles.container}>
    //   <Text>Open up App.js to start working on your app!</Text>
    //   {/* <Ex/> */}
    //   <StatusBar style="auto" />
    // </View>
    <RegistrationScreen />
    // <Ex />
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
