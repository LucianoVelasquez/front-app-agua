import { StatusBar } from "expo-status-bar";
import { StyleSheet, ScrollView, View, Text } from "react-native";
import { Button } from "@rneui/themed";
import { useState } from "react";
import { useSelector } from "react-redux";

export default function Medidores({ navigation }: any) {
  const [loteo, setLoteo] = useState(0);
  const medidores = useSelector((state: any) => state.medidores);
  const loteos = useSelector((state: any) => state.loteos);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={{flexDirection: 'row', gap: 10}}>
      {loteos?.map((lot: any, index: number) => (
        <Button key={index} onPress={() => setLoteo(index)}>{lot.name}</Button>
      ))}
      </View>
      <View style={styles.medidoresContainer}>
        {loteos[loteo].medidores?.map((medidor: any) => {
          return <Text>{medidor.medidor}</Text>;
        })}
      </View>

      <StatusBar style="auto" />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
    gap: 5
  },
  medidoresContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
