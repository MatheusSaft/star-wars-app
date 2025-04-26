import React, { useEffect, useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const DetalhesPersonagemScreen = ({ route, navigation }) => {
  const { personagem } = route.params;
  const [loading, setLoading] = useState(false);

  if (loading) {
    return (
      <View style={styles.container}>
        <Text>Carregando...</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{personagem.name}</Text>
      <Text>Altura: {personagem.height} cm</Text>
      <Text>Peso: {personagem.mass} kg</Text>
      <Text>Cabelo: {personagem.hair_color}</Text>
      <Text>Pele: {personagem.skin_color}</Text>
      <Text>Olhos: {personagem.eye_color}</Text>
      <Text>Gênero: {personagem.gender}</Text>

      <Button
        title="Ver Naves"
        onPress={() => navigation.navigate('Naves', { naves: personagem.starships })}
      />
      <Button
        title="Ver Filmes"
        onPress={() => navigation.navigate('Filmes', { filmes: personagem.films })}
      />
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

export default DetalhesPersonagemScreen;
