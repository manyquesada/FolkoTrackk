import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Calendar = () => {


 const navigation = useNavigation();
  return (
    <ScrollView style={styles.container}>
      {/* Calendario */}
      <View style={styles.header}>
        <TouchableOpacity>
          <Text style={styles.arrow}>{'<'}</Text>
        </TouchableOpacity>
        <Text style={styles.month}>September 2021</Text>
        <TouchableOpacity>
          <Text style={styles.arrow}>{'>'}</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.calendarGrid}>
        <Text style={styles.dayLabel}>Mon</Text>
        <Text style={styles.dayLabel}>Tue</Text>
        <Text style={styles.dayLabel}>Wed</Text>
        <Text style={styles.dayLabel}>Thu</Text>
        <Text style={styles.dayLabel}>Fri</Text>
        <Text style={styles.dayLabel}>Sat</Text>
        <Text style={styles.dayLabel}>Sun</Text>

        {/* Días del mes */}
        <Text style={[styles.day, styles.faded]}>30</Text>
        <Text style={[styles.day, styles.faded]}>31</Text>
        <Text style={styles.day}>1</Text>
        <Text style={[styles.day, styles.selected]}>2</Text>
        <Text style={styles.day}>3</Text>
        <Text style={styles.day}>4</Text>
        <Text style={styles.day}>5</Text>
        <Text style={styles.day}>5</Text>
        {/* Continúa con los días... */}
      </View>

      {/* Lista de eventos */}
      <View style={styles.eventList}>
        <View style={styles.event}>
          <Text style={styles.time}>10:00-13:00</Text>
          <View style={styles.details}>
            <Text style={styles.eventTitle}>Presentación en Presidencia</Text>
            <Text style={styles.eventSubtitle}>Llevar vestuario Jalisco</Text>
          </View>
          <Text style={styles.dots}>•••</Text>
        </View>

        <View style={styles.event}>
          <Text style={styles.time}>14:00-15:00</Text>
          <View style={styles.details}>
            <Text style={styles.eventTitle}>Auditorio Bronco</Text>
            <Text style={styles.eventSubtitle}>Vestuarios Jalisco y Michoacán</Text>
          </View>
          <Text style={styles.dots}>•••</Text>
        </View>

        <View style={styles.event}>
          <Text style={styles.time}>19:00-20:00</Text>
          <View style={styles.details}>
            <Text style={styles.eventTitle}>Teatro Obrero</Text>
            <Text style={styles.eventSubtitle}>Llevar vestuario Tamaulipas</Text>
          </View>
          <Text style={styles.dots}>•••</Text>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9fafc',
    padding: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  arrow: {
    fontSize: 24,
    color: '#333',
  },
  month: {
    fontSize: 18,
    color: '#333',
  },
  calendarGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  dayLabel: {
    width: '13%',  // Aproximadamente 7 columnas
    textAlign: 'center',
    fontWeight: 'bold',
    color: '#a0a0a0',
    marginBottom: 10,
  },
  day: {
    width: '13%',
    paddingVertical: 10,
    textAlign: 'center',
    borderRadius: 50,
    backgroundColor: '#fff',
    color: '#333',
    marginBottom: 10,
  },
  faded: {
    color: '#d0d0d0',
  },
  selected: {
    backgroundColor: '#5e9fff',
    color: '#fff',
  },
  eventList: {
    marginTop: 20,
  },
  event: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 15,
    backgroundColor: '#f9f9f9',
    borderRadius: 10,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  time: {
    fontWeight: 'bold',
    color: '#5e9fff',
    fontSize: 14,
  },
  details: {
    flex: 1,
    paddingLeft: 10,
  },
  eventTitle: {
    fontSize: 16,
    color: '#333',
    marginBottom: 5,
  },
  eventSubtitle: {
    fontSize: 14,
    color: '#666',
  },
  dots: {
    fontSize: 18,
    color: '#999',
  },
});

export default Calendar;
