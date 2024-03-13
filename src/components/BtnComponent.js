import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View, Image } from "react-native";

const BtnComponent = () => {
  const onPress = () => setCount((prevCount) => prevCount + 1);

  return (
    <View style={styles.container}>
      <View style={styles.countContainer}></View>
      <TouchableOpacity
        style={styles.button1}
        onPress={() => alert("Você está logado")}
      >
        <Text>Log in</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button2}
        onPress={() => alert("Você está cadastrado")}
      >
        <Text>Sign in</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button3}
        onPress={() => alert("Você clicou no botão")}
      >
        <Image source={require("../images/botao.jpg")} resizeMode="cover" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 10,
  },
  button1: {
    alignItems: "center",
    backgroundColor: "#1e90ff",
    padding: 10,
  },
  button2: {
    alignItems: "center",
    backgroundColor: "#7fffd4",
    padding: 10,
  },
  button3: {
    alignItems: "center",
    backgroundColor: "#00ffff",
    padding: 10,
  },
  countContainer: {
    alignItems: "center",
    padding: 10,
  },
});

export default BtnComponent;
