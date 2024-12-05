// navigation.js
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

//screens 
import HomeScreen from './screens/HomeScreen';
import Catalogo from './screens/Catalogo';
import CrearEvento from './screens/Calendar';
import CatalogoAlumnos from './screens/CatalogoAlumnos';
import Calendar from './screens/Calendar';
import crearNuevoUsuario from './screens/crearNuevoUsuario'

const Stack = createNativeStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Home"> 
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Catalogo" component={Catalogo} />
      <Stack.Screen name="CrearEvento" component={CrearEvento} />
      <Stack.Screen name="CatalogoAlumnos" component={CatalogoAlumnos} />
      <Stack.Screen name="Calendar" component={Calendar} />
      <Stack.Screen name="CrearNuevoUsuario" component={crearNuevoUsuario} />

    </Stack.Navigator>
  );
};

export default StackNavigator;