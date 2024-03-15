import React, { useState } from "react"; // Importa o React e o useState hook de "react"
import { StyleSheet, Text, TouchableOpacity, View } from "react-native"; // Importa componentes necessários do React Native

// Declaração do componente BtnComponent2
const BtnComponent2 = () => {
  const onPress = () => setCount((prevCount) => prevCount + 1);

  return (
    <View style={styles.container}>
      {" "}
      {/* Container principal */}
      <View style={styles.countContainer}></View>
      <TouchableOpacity
        style={styles.button2} // Estilo do botão
        onPress={() => alert("Você está cadastrado")} // Função que exibe um alerta ao pressionar o botão
      >
        <Text>Sign in</Text> {/* Texto do botão */}
      </TouchableOpacity>
    </View>
  );
};

// Estilos CSS para o componente
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center", // Centraliza os elementos na tela verticalmente
    paddingHorizontal: 10, // Coloca um espaço horizontal interno de 10 unidades
  },
  button2: {
    alignItems: "center", // Centraliza os itens horizontalmente
    backgroundColor: "#7fffd4", // Cor de fundo do botão
    padding: 10, // Adiciona um espaço interno de 10 unidades
  },
});

export default BtnComponent2; // Exporta o componente BtnComponent2
