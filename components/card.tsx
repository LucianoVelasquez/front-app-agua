import { Button, Card, CheckBox, Icon, Input } from "@rneui/themed";
import { useState } from "react";
import { Text, View, StyleSheet } from "react-native";

export default function CardMedidor({ medidorCliente }: any) {
  const [valueActual, setValueActual] = useState();

  let {
    medidor,
    cliente,
    lote,
    manzana,
    lectura_actual,
    lectura_anterior,
    fecha_instalacion,
    is_modificate,
  } = medidorCliente;

  return (
    <Card>
      <Card.Title style={{ position: "relative" }}>
        <CheckBox
          title={"Medidor: " + medidor}
          textStyle={{ fontSize: 22 }}
          iconRight
          size={30}
          checked={is_modificate}
          checkedColor="#448c27"
        />
      </Card.Title>
      <Card.Divider />

      <View style={{ alignItems: "flex-start" }}>
        <Text style={styles.text}>Cliente: {cliente}</Text>
        <Text style={styles.text}>Fecha: {fecha_instalacion}</Text>
        <Text style={styles.text}>Lote: {lote}</Text>
        <Text style={styles.text}>Manzana: {manzana}</Text>
        <Text style={styles.text}>Lectura anterior: {lectura_anterior}</Text>
        <Text style={styles.text}>Lectura actual: {lectura_actual}</Text>
        <Input
          containerStyle={{ width: "80%", marginTop: 5 }}
          placeholder="Lectura actual"
          onChangeText={(text: any) => {
            setValueActual(text);
          }}
          value={valueActual}
        />
        <Button style={{ marginTop: 5 }} radius={"sm"} size="md" type="solid">
          Guardar cambios
          <Icon style={{ marginLeft: 5 }} name="save" color="white" />
        </Button>
      </View>
    </Card>
  );
}

const styles = StyleSheet.create({
  text: {
    fontSize: 20,
    marginVertical: 5,
    marginLeft: 9,
    color: "grey",
  },
});
