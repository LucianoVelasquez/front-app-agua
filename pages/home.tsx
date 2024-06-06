import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View,Text } from 'react-native';
import { SearchBar } from '@rneui/themed';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { get_loteos, get_medidores } from '../redux/actions';
import CardMedidor from '../components/card';
/* import { medidor as medidores } from '../data/medidor'; */




export default function Home() {
  const [valueSearch,setValueSearch] = useState<string>();
  const [valueMedidor,setValueMedidor] = useState<any>();

  const dispatch = useDispatch<any>()
  const medidores = useSelector((state : any) => state.medidores);

    const getInitDataApi = () => {
      dispatch(get_loteos());
      dispatch(get_medidores()) 
    } 
    
    useEffect(()=>{
      
      getInitDataApi();
      
    },[])

    const searchMedidor = () =>{
      let findMedidor = medidores.find((cliente : any) => {
        if(cliente.medidor.includes(valueSearch)){
          return cliente;
        }
      })

      setValueMedidor(findMedidor);
    }
 

    return (
  
        <View style={styles.container}>

          <View style={{flex:1,width:"90%",marginTop:25,}}>
            <SearchBar
              platform="android"
              onChangeText={(newVal : any) => setValueSearch(newVal)}
              placeholder="Numero de medidor "
              placeholderTextColor="#888"
              value={valueSearch}
              onSubmitEditing={() => searchMedidor()}
              onClear={() => setValueMedidor(null)}
            />
          </View>

          <View style={{flex:4,width:"80%"}}>
             {
              valueMedidor ? <CardMedidor medidorCliente={valueMedidor} status={true}/> :
              <Text style={{marginTop:150,alignSelf:"center",color:"grey",fontSize:24}}>Buscar nuevo medidor</Text>
             } 
          </View>

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

  