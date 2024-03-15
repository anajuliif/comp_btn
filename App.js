import { StatusBar } from "expo-status-bar"; // Importa o componente StatusBar do pacote expo-status-bar
import { StyleSheet, Text, View } from "react-native"; // Importa componentes necessários do React Native
import TxtComponent from "./src/components/TxtComponent"; // Importa o componente TxtComponent de um arquivo local
import BtnComponent from "./src/components/BtnComponent"; // Importa o componente BtnComponent de um arquivo local
import BtnComponent1 from "./src/header/BtnComponent1"; // Importa o componente BtnComponent1 de um arquivo local
import BtnComponent3 from "./src/header/BtnComponent3"; // Importa o componente BtnComponent3 de um arquivo local
import BtnComponent2 from "./src/header/BtnComponent2"; // Importa o componente BtnComponent2 de um arquivo local

export default function App() {
  return (
    <View style={styles.container}>
      {" "}
      {/* Container principal */}
      {/* Componente TxtComponent que renderiza um texto e seus filhos */}
      <TxtComponent>
        <Text>Childrens</Text> {/* Texto "Childrens" */}
        <br></br>
        <Text>Componente 1</Text> {/* Texto "Componente 1" */}
        <br></br>
        <Text>Componente 2</Text> {/* Texto "Componente 2" */}
        <br></br>
        <Text>Componente 3</Text> {/* Texto "Componente 3" */}
      </TxtComponent>
      {/* Componente BtnComponent que contém os botões */}
      <BtnComponent>
        <BtnComponent1 /> {/* Componente BtnComponent1 */}
        <BtnComponent2 /> {/* Componente BtnComponent2 */}
        <BtnComponent3 /> {/* Componente BtnComponent3 */}
      </BtnComponent>
      <StatusBar style="auto" /> {/* Barra de status com estilo automático */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, // Flexbox para ocupar o espaço disponível na tela
    backgroundColor: "#fff", // Cor de fundo branca
    alignItems: "center", // Centraliza os elementos na horizontal
    justifyContent: "center", // Centraliza os elementos na vertical
  },
});
