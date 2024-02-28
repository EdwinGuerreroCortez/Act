import React from 'react';
import { View, Text, TextInput, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const Detalles = () => {
  return (
    <View style={styles.container}>
      <View style={styles.rectanguloSuperior}>
        <TouchableOpacity onPress={() => console.log('Buscar')}>
          <Ionicons name="search" size={24} color="#fff" style={styles.icon} />
        </TouchableOpacity>
        <TextInput style={styles.buscador} placeholder="Buscar..." placeholderTextColor="#fff" />
        <TouchableOpacity onPress={() => console.log('Carrito')}>
          <Ionicons name="cart" size={24} color="#fff" style={styles.icon} />
        </TouchableOpacity>
      </View>
      <View style={styles.rectanguloMedio}>
        <Image source={require('./../assets/Funda.jpg')} style={styles.imagen} />
      </View>
      <View style={styles.producto}>
        <Text style={styles.nombre}>Funda de Mar</Text>
        <Text style={styles.precio}>Precio: $150</Text>
        <Text style={styles.descripcion}>Diseño: Cuadrada, Rectángulo</Text>
        <Text style={styles.descripcion}>Descripción: Marco con resina, estilo inspirado en la playa</Text>
        <Text style={styles.nombre}></Text>
        <Text style={styles.nombre}></Text>
        <Text style={styles.nombre}></Text>
      </View>
      <View style={styles.rectanguloInferior}>
        <View style={styles.categories}>
          <Text style={styles.categoria}>Comprar</Text>
          <Text style={styles.categoria}>Categoría</Text>
          <Text style={styles.categoria}>Carrito</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#CB9BDE',
  },
  rectanguloSuperior: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#693DAE',
  },
  icon: {
    marginRight: 10,
  },
  buscador: {
    flex: 1,
    padding: 10,
    borderRadius: 5,
    backgroundColor: '#FFF',
    color: '#000000',
  },
  rectanguloMedio: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  imagen: {
    width: '80%', 
    height: 350,
    borderRadius: 10,
  },
  producto: {
    alignItems: 'center',
    padding: 10,
  },
  nombre: {
    marginBottom: 10,
    fontSize: 22,
    fontWeight: 'bold',
    color: '#333',
  },
  precio: {
    fontSize: 20,
    color: '#000000',
  },
  descripcion: {
    fontSize: 20,
    color: '#000000',
  },
  rectanguloInferior: {
    padding: 20,
    backgroundColor: '#693DAE',
    justifyContent: 'flex-end',
  },
  categories: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  categoria: {
    color: '#fff',
  },
});
export default Detalles;