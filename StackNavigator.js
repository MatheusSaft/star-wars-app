import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import PersonagensScreen from '../screens/PersonagensScreen';
import DetalhesPersonagemScreen from '../screens/DetalhesPersonagemScreen';
import NavesScreen from '../screens/NavesScreen';
import FilmesScreen from '../screens/FilmesScreen';
import SobreScreen from '../screens/SobreScreen';

const Stack = createStackNavigator();

const StackNavigator = () => (
  <Stack.Navigator initialRouteName="Personagens">
    <Stack.Screen name="Personagens" component={PersonagensScreen} />
    <Stack.Screen name="DetalhesPersonagem" component={DetalhesPersonagemScreen} />
    <Stack.Screen name="Naves" component={NavesScreen} />
    <Stack.Screen name="Filmes" component={FilmesScreen} />
    <Stack.Screen name="Sobre" component={SobreScreen} />
  </Stack.Navigator>
);

export default StackNavigator;