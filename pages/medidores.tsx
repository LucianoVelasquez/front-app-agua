import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View,Text } from 'react-native';



export default function Medidores() {
    return (
  
        <View style={styles.container}>

          <Text>Settings</Text>

          
          <StatusBar style="auto" />
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