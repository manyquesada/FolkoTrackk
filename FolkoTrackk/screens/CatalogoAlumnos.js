import React from 'react';
import { StyleSheet, View, Text, Image, ScrollView, TouchableOpacity } from 'react-native';

// Componente reutilizable de la cabecera
const Header = () => (
  <View style={styles.header}>
    <TouchableOpacity style={styles.backButton}>
      <Text style={styles.headerText}>&larr;</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.settingsButton}>
      <Text style={styles.headerText}>&#9881;</Text>
    </TouchableOpacity>
  </View>
);

// Componente reutilizable para cada alumno
const AlumnoItem = ({ imageSource, name }) => (
  <View style={styles.catalogItem}>
    <Image source={imageSource} style={styles.image} />
    <Text style={styles.catalogText}>{name}</Text>
  </View>
);

// Componente reutilizable para secciones adicionales
const SectionItem = ({ imageSource, title }) => (
  <View style={styles.sectionItem}>
    <Image source={imageSource} style={styles.imageSection} />
    <Text style={styles.sectionText}>{title}</Text>
  </View>
);

// Vista principal del catálogo de alumnos
const CatalogoAlumnos = () => {
  return (
    <ScrollView style={styles.container}>
      <Header />
      <Text style={styles.title}>Catálogo de Alumnos</Text>
      
      {/* Lista de alumnos */}
      <View style={styles.catalog}>
        <AlumnoItem imageSource={require('/assets/alumno1.png')} name="Juan Pérez" />
        <AlumnoItem imageSource={require('/assets/alumno2.png')} name="Ana López" />
        <AlumnoItem imageSource={require('/assets/alumno3.png')} name="Carlos García" />
        <AlumnoItem imageSource={require('/assets/alumno4.png')} name="María Fernández" />
      </View>

      {/* Secciones adicionales */}
      <View style={styles.extraSections}>
        <SectionItem imageSource={require('/assets/perfiles.png')} title="Perfiles" />
        <SectionItem imageSource={require('/assets/actividades.png')} title="Actividades" />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 15,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 2,
  },
  backButton: {
    fontSize: 24,
    color: '#333',
  },
  settingsButton: {
    fontSize: 24,
    color: '#333',
  },
  headerText: {
    fontSize: 24,
  },
  title: {
    textAlign: 'center',
    fontSize: 20,
    marginVertical: 15,
  },
  catalog: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
  },
  catalogItem: {
    width: '45%',
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 10,
    alignItems: 'center',
    marginBottom: 15,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 2,
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 40,
  },
  catalogText: {
    marginTop: 10,
    fontSize: 16,
    fontWeight: 'bold',
  },
  extraSections: {
    paddingHorizontal: 15,
    marginTop: 15,
  },
  sectionItem: {
    backgroundColor: '#fff',
    borderRadius: 15,
    padding: 20,
    alignItems: 'center',
    marginBottom: 15,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 2,
  },
  imageSection: {
    width: 70,
    height: 70,
    borderRadius: 35,
  },
  sectionText: {
    marginTop: 10,
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
});

export default CatalogoAlumnos;
