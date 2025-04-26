import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import axios from 'axios';

const FilmesScreen = ({ route }) => {
  const { filmes } = route.params;
  const [filmesDetalhados, setFilmesDetalhados] = useState([]);

  useEffect(() => {
    const fetchFilmes = async () => {
      const filmesData = await Promise.all(
        filmes.map(url => axios.get(url).then(res => res.data))
      );
      setFilmesDetalhados(filmesData);
    };
    fetchFilmes();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Filmes</Text>
      {filmesDetalhados.length > 0 ? (
        filmesDetalhados.map((filme, index) => (
          <View key={index} style={styles.card}>
            <Text>{filme.title}</Text>
            <Text>Diretor: {filme.director}</Text>
            <Text>Lançamento: {filme.release_date}</Text>
          </View>
        ))
      ) : (
        <Text>Não há filmes disponíveis para este personagem.</Text>
      )}
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
  card: {
    marginBottom: 10,
    padding: 15,
    backgroundColor: '#f0f0f0',
    borderRadius: 5,
  },
});

export default FilmesScreen;
