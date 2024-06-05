import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View,Text } from 'react-native';
import { Button } from '@rneui/themed';


export default function Medidores({ navigation } : any) {
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