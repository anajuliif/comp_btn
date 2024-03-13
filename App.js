import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import TxtComponent from "./src/components/TxtComponent";
import BtnComponent from "./src/components/BtnComponent";

export default function App() {
  return (
    <View style={styles.container}>
      <TxtComponent>
        <Text>Childrens</Text>
        <br></br>
        <Text>Componente 1</Text>
        <br></br>
        <Text>Componente 2</Text>
        <br></br>
        <Text>Componente 3</Text>
      </TxtComponent>
      <BtnComponent></BtnComponent>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
