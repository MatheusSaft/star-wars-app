import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const SobreScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sobre</Text>
      <Text>Desenvolvedor:</Text>
      <Text>RA: 1116341</Text>
      <Text>Nome: Matheus H. Saft</Text>
      <Text>E-mail: matheussaft@outlook.com.br</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
});

export default SobreScreen;
