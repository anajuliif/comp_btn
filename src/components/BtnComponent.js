import React from "react"; // Importa o React
import { View } from "react-native"; // Importa o componente View do React Native

// Declaração do componente BtnComponent
const BtnComponent = ({ children }) => {
  return <View>{children}</View>; // Retorna um componente View que renderiza seus filhos
};

export default BtnComponent; // Exporta o componente BtnComponent para uso em outros lugares
