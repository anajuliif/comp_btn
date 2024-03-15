import React from "react"; // Importa o React
import { Text } from "react-native"; // Importa o componente Text do React Native

// Declaração do componente TxtComponent
const TxtComponent = ({ children }) => {
  return <Text>{children}</Text>; // Retorna o componente Text com os children (filhos) passados para ele
};

export default TxtComponent; // Exporta o componente TxtComponent para uso em outros lugares
