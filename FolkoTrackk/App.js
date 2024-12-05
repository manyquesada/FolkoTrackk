import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import StackNavigator from './navigation'; // Importa StackNavigator

export default function App() {
  return (
    <View style={styles.container}> 
      <StackNavigator /> {/* Renderiza el componente de navegación */}
      <StatusBar style="auto" /> 
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, 
  },
});