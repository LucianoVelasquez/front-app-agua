import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View,Text } from 'react-native';
import {Button } from '@rneui/themed';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { get_loteos, get_medidores } from '../redux/actions';



export default function Home({ navigation } : any) {

    const dispatch = useDispatch<any>()
    const loteos = useSelector((state : any) => state.loteos);


    const getDataApi = () => {
      dispatch(get_loteos());
      dispatch(get_medidores())
    }

    useEffect(()=>{

      getDataApi();
      
    },[])

    return (
  
        <View style={styles.container}>
          <Text>Loteos: </Text>
          {
            loteos.map( (loteo : any) => {
              return (
                <Text style={{fontSize:24,marginVertical:10}}>
                  {loteo.name}
                </Text>
              )
            })
          }
          <Button
          title="Go to Details"
          style={{marginTop:10}}
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