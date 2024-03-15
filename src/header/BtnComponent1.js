import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native"; // Importa componentes necessários do React Native

// Declaração do componente BtnComponent1
const BtnComponent1 = () => {
  const onPress = () => setCount((prevCount) => prevCount + 1);

  return (
    <View style={styles.container}>
      {" "}
      {/* Container principal */}
      <View style={styles.countContainer}></View>{" "}
      <TouchableOpacity // Componente de botão com capacidade de responder ao toque
        style={styles.button1} // Estilo do botão
        onPress={() => alert("Você está logado")} // Função que exibe um alerta ao pressionar o botão
      >
        <Text>Log in</Text> {/* Texto do botão */}
      </TouchableOpacity>
    </View>
  );
};

// Estilos CSS para o componente
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center", // Centraliza os elementos na tela verticalmente
    paddingHorizontal: 10, // Adiciona um espaço horizontal interno de 10 unidades
  },
  button1: {
    alignItems: "center", // Centraliza os itens horizontalmente
    backgroundColor: "#1e90ff", // Cor de fundo do botão
    padding: 10, // Adiciona um espaço interno de 10 unidades
  },
  countContainer: {
    alignItems: "center", // Centraliza os itens horizontalmente
    padding: 10, // Adiciona um espaço interno de 10 unidades
  },
});

export default BtnComponent1; // Exporta o componente BtnComponent1
