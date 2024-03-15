import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View, Image } from "react-native"; // Importa componentes necessários do React Native

// Declaração do componente BtnComponent3
const BtnComponent3 = () => {
  const onPress = () => setCount((prevCount) => prevCount + 1);

  return (
    <View style={styles.container}>
      {" "}
      {/* Container principal */}
      <View style={styles.countContainer}></View>
      <TouchableOpacity // Componente de botão com capacidade de responder ao toque
        style={styles.button3} // Estilo do botão
        onPress={() => alert("Você clicou no botão")} // Função que exibe um alerta ao pressionar o botão
      >
        <Image source={require("../images/botao.jpg")} resizeMode="cover" />{" "}
        {/* Imagem do botão */}
      </TouchableOpacity>
    </View>
  );
};

// Estilos CSS para o componente
const styles = StyleSheet.create({
  container: {
    flex: 1, // Flexbox para ocupar o espaço disponível na tela
    justifyContent: "center", // Centraliza os elementos na tela verticalmente
    paddingHorizontal: 10, // Adiciona um espaço horizontal interno de 10 unidades
  },
  button3: {
    alignItems: "center", // Centraliza os itens horizontalmente
    backgroundColor: "#00ffff", // Cor de fundo do botão
    padding: 10, // Adiciona um espaço interno de 10 unidades
  },
  countContainer: {
    alignItems: "center", // Centraliza os itens horizontalmente
    padding: 10, // Adiciona um espaço interno de 10 unidades
  },
});

export default BtnComponent3; // Exporta o componente BtnComponent3
