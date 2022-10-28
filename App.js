import { NavigationContainer } from '@react-navigation/native';
import { StyleSheet} from 'react-native';
import NavigationTab from './src/navigation/NavigationTab';
import {AuthProvider} from "./src/components/context/AuthContex"

export default function App() {
  return (
    <NavigationContainer>
      <AuthProvider>
        <NavigationTab/>
      </AuthProvider>      
    </NavigationContainer>
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
