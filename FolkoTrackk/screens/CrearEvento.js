import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

const CrearEvento = () => {
  const [nombreEvento, setNombreEvento] = useState('');
  const [descripcionEvento, setDescripcionEvento] = useState('');
  const [fecha, setFecha] = useState('');
  const [horaInicio, setHoraInicio] = useState('');
  const [horaFin, setHoraFin] = useState('');
  

  // componente Creado para Crear Formulario 
  const handleCrearEvento = () => {
    // Lógica para manejar la creación del evento
    console.log('Evento creado:', { nombreEvento, descripcionEvento, fecha, horaInicio, horaFin });
  };

  return (
    <View style={styles.formContainer}>
      <Text style={styles.title}>Crear Nuevo Evento</Text>

      <View style={styles.inputGroup}>
        <Text style={styles.label}>Nombre del evento</Text>
        <TextInput
          style={styles.input}
          placeholder="Nombre del evento"
          value={nombreEvento}
          onChangeText={setNombreEvento}
        />
      </View>

      <View style={styles.inputGroup}>
        <Text style={styles.label}>Describe el evento</Text>
        <TextInput
          style={[styles.input, styles.textArea]}
          placeholder="Describe el evento"
          value={descripcionEvento}
          onChangeText={setDescripcionEvento}
          multiline={true}
          numberOfLines={4}
        />
      </View>

      <View style={styles.inputGroup}>
        <Text style={styles.label}>Fecha</Text>
        <TextInput
          style={styles.input}
          placeholder="YYYY-MM-DD"
          value={fecha}
          onChangeText={setFecha}
        />
      </View>

      <View style={styles.inputGroup}>
        <Text style={styles.label}>Fecha Inicio</Text>
        <TextInput
          style={styles.input}
          placeholder="HH:MM"
          value={horaInicio}
          onChangeText={setHoraInicio}
        />
      </View>

      <View style={styles.inputGroup}>
        <Text style={styles.label}>Fecha Fin</Text>
        <TextInput
          style={styles.input}
          placeholder="HH:MM"
          value={horaFin}
          onChangeText={setHoraFin}
        />
      </View>

      <TouchableOpacity style={styles.btnSubmit} onPress={handleCrearEvento}>
        <Text style={styles.btnText}>Crear Nuevo Evento</Text>
      </TouchableOpacity>
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

export default CrearEvento;
