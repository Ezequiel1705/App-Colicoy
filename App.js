import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View} from 'react-native';


export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Hola Coder</Text>
      <StatusBar style="auto" />
    </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#06113C',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text:{
    fontFamily: 'Roboto',
    fontSize: '34px',
    backgroundColor: '#FF6FB5',
    color: 'white',

  }
});
