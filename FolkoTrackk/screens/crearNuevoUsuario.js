import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

// Componente reutilizable para el campo de texto
const InputField = ({ label, value, onChangeText, placeholder, multiline = false, numberOfLines = 1 }) => {
  return (
    <View style={styles.inputGroup}>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        style={[styles.input, multiline && styles.textArea]}
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
        multiline={multiline}
        numberOfLines={numberOfLines}
      />
    </View>
  );
};

// Componente reutilizable para el botón de envío
const SubmitButton = ({ onPress, title }) => {
  return (
    <TouchableOpacity style={styles.btnSubmit} onPress={onPress}>
      <Text style={styles.btnText}>{title}</Text>
    </TouchableOpacity>
  );
};

const CrearUsuario = () => {
  const [nombreUsuario, setNombreUsuario] = useState('');
  const [descripcionTallas, setDescripcionTallas] = useState('');
  const [genero, setGenero] = useState('');
  const [fechaInicio, setFechaInicio] = useState('');
  const [edad, setEdad] = useState('');

  const handleCrearUsuario = () => {
    // Lógica para manejar la creación del usuario
    console.log('Usuario creado:', { nombreUsuario, descripcionTallas, genero, fechaInicio, edad });
  };

  return (
    <View style={styles.formContainer}>
      <Text style={styles.title}>Crear Nuevo Usuario</Text>
      
      <InputField
        label="Nombre del Usuario"
        placeholder="Ingrese el nombre del usuario"
        value={nombreUsuario}
        onChangeText={setNombreUsuario}
      />
      <InputField
        label="Descripción de sus Tallas"
        placeholder="Ingrese la descripción de sus tallas"
        value={descripcionTallas}
        onChangeText={setDescripcionTallas}
        multiline={true}
        numberOfLines={4}
      />
      <InputField
        label="Género"
        placeholder="Masculino/Femenino/Otro"
        value={genero}
        onChangeText={setGenero}
      />
      <InputField
        label="Fecha de Inicio"
        placeholder="YYYY-MM-DD"
        value={fechaInicio}
        onChangeText={setFechaInicio}
      />
      <InputField
        label="Edad"
        placeholder="Ingrese la edad"
        value={edad}
        onChangeText={setEdad}
      />
      <SubmitButton title="Crear Usuario" onPress={handleCrearUsuario} />
    </View>
  );
};

const styles = StyleSheet.create({
  formContainer: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 5,
    width: '90%',
    alignSelf: 'center',
    marginTop: 50,
  },
  title: {
    textAlign: 'center',
    fontSize: 18,
    marginBottom: 20,
    color: '#333',
  },
  inputGroup: {
    marginBottom: 15,
  },
  label: {
    fontSize: 14,
    color: '#555',
    marginBottom: 5,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 5,
    padding: 10,
    fontSize: 14,
    color: '#333',
  },
  textArea: {
    height: 80,
    textAlignVertical: 'top',
  },
  btnSubmit: {
    backgroundColor: '#1E90FF',
    paddingVertical: 12,
    borderRadius: 5,
    alignItems: 'center',
  },
  btnText: {
    color: 'white',
    fontSize: 16,
  },
});

export default CrearUsuario;
