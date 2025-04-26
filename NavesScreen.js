import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import axios from 'axios';

const NavesScreen = ({ route }) => {
  const { naves } = route.params;
  const [navesDetalhadas, setNavesDetalhadas] = useState([]);

  useEffect(() => {
    const fetchNaves = async () => {
      const navesData = await Promise.all(
        naves.map(url => axios.get(url).then(res => res.data))
      );
      setNavesDetalhadas(navesData);
    };
    fetchNaves();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Naves</Text>
      {navesDetalhadas.length > 0 ? (
        navesDetalhadas.map((nave, index) => (
          <View key={index} style={styles.card}>
            <Text>{nave.name}</Text>
            <Text>Modelo: {nave.model}</Text>
            <Text>Passageiros: {nave.passengers}</Text>
          </View>
        ))
      ) : (
        <Text>Não há naves associadas a este personagem.</Text>
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

export default NavesScreen;
