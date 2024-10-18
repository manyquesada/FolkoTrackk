import React from 'react';

import { StyleSheet, View, Text, Image, ScrollView, TouchableOpacity } from 'react-native';

const Catalogo = () => {
  return (
    <ScrollView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton}>
          <Text style={styles.headerText}>&larr;</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.settingsButton}>
          <Text style={styles.headerText}>&#9881;</Text>
        </TouchableOpacity>
      </View>

      {/* Título */}
      <Text style={styles.title}>Catálogo</Text>

      {/* Catálogo */}
      <View style={styles.catalog}>
        <CatalogItem imageSource={require('/assets/coahuila.png')} title="Coahuila" />
        <CatalogItem imageSource={require('/assets/Jalisco.png')} title="Jalisco" />
        <CatalogItem imageSource={require('/assets/Michoacan.png')} title="Michoacán" />
        <CatalogItem imageSource={require('/assets/Nayarit.png')} title="Nayarit" />
        <CatalogItem imageSource={require('/assets/tamaulipas.png')} title="Tamaulipas" />
      </View>

      {/* Secciones extra */}
      <View style={styles.extraSections}>
        <SectionItem imageSource={require('./assets/alumnos.png')} title="Alumnos" />
        <SectionItem imageSource={require('/assets/agends.png')} title="Agenda" />
      </View>
    </ScrollView>
  );
};

// Componente para el catálogo
const CatalogItem = ({ imageSource, title }) => {
  return (
    <View style={styles.catalogItem}>
      <Image source={imageSource} style={styles.image} />
      <Text style={styles.catalogText}>{title}</Text>
    </View>
  );
};

// Componente para las secciones extra (Alumnos y Agenda)
const SectionItem = ({ imageSource, title }) => {
  return (
    <View style={styles.sectionItem}>
      <Image source={imageSource} style={styles.imageSection} />
      <Text style={styles.sectionText}>{title}</Text>
    </View>
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

export default Catalogo;
