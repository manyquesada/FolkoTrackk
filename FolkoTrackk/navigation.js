// navigation.js
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


const HomeStackNavigator = createNativeStackNavigator();

//Funcion Home-Catalogo 
function Mystack()
{
   return (
       
       <HomeStackNavigator.Navigator   initialRouteName="Home">
        <HomeStackNavigator.Screen 
        name="Home"
        component={HomeScreen}
        />


        <HomeStackNavigator.Screen 
        name="Catalogo"
        component={Catalogo}
        options={{
          headerBackTitleVisible: false
        }}
        />
       </HomeStackNavigator.Navigator>
   )
}

//screens 
import HomeScreen from './screens/HomeScreen';
import Catalogo from './screens/Catalogo';
import CrearEvento from './screens/Calendar';
import CatalogoAlumnos from './screens/CatalogoAlumnos';
import Calendar from './screens/Calendar';
import crearNuevoUsuario from './screens/crearNuevoUsuario'


const Stack = createStackNavigator();

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



