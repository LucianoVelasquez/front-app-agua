import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View,Text } from 'react-native';
import {  Image,Input,Button } from '@rneui/themed';
import { Mail,KeyRound   } from 'lucide-react-native';

export default function Settings({ navigation } : any) {
    return (
  
        <View style={styles.container}>
          <Text>Settings</Text>
          <Button
          title="Go to Details"
          onPress={() => navigation.navigate('Login')}
          />
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