import React, { useState, useEffect } from 'react';
import { View, Text, Button, StyleSheet, ScrollView } from 'react-native';
import axios from 'axios';

const PersonagensScreen = ({ navigation }) => {
  const [personagens, setPersonagens] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get('https://swapi.dev/api/people/')
      .then(response => {
        setPersonagens(response.data.results);
        setLoading(false);
      })
      .catch(error => {
        console.error(error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <View style={styles.container}>
        <Text>Carregando...</Text>
      </View>
    );
  }

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Personagens</Text>
      {personagens.map((personagem, index) => (
        <View key={index} style={styles.card}>
          <Text>{personagem.name}</Text>
          <Button
            title="Ver Detalhes"
            onPress={() => navigation.navigate('DetalhesPersonagem', { personagem })}
          />
        </View>
      ))}
    </ScrollView>
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

export default PersonagensScreen;