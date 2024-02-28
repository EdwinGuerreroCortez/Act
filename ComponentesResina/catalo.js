import React from 'react';
import { View, Text, TextInput, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const Catalogo = () => {
    return (
        <View style={styles.container}>
            <View style={styles.rectanguloSuperior}>
                <TextInput
                    style={styles.buscador}
                    placeholder="Buscar..."
                    placeholderTextColor="#fff"
                />
                <TouchableOpacity onPress={() => console.log('Carrito')}>
                    <Ionicons name="cart" size={24} color="#fff" />
                </TouchableOpacity>
            </View>
            {[...Array(1)].map((_, index) => (
                <View key={index} style={styles.producto}>
                    <Image source={require('../imagenes/marco.jpg')} style={styles.imagen} />
                    <Text style={styles.nombre}>Marco</Text>
                    <TouchableOpacity onPress={() => console.log('Agregar al carrito')}>
                        <Ionicons name="cart-outline" size={24} color="#000" />
                    </TouchableOpacity>
                </View>
            ))}
            {[...Array(1)].map((_, index) => (
                <View key={index} style={styles.producto}>
                    <Image source={require('../imagenes/llavero.jpg')} style={styles.imagen} />
                    <Text style={styles.nombre}>Llavero</Text>
                    <TouchableOpacity onPress={() => console.log('Agregar al carrito')}>
                        <Ionicons name="cart-outline" size={24} color="#000" />
                    </TouchableOpacity>
                </View>
            ))}
            {[...Array(1)].map((_, index) => (
                <View key={index} style={styles.producto}>
                    <Image source={require('../imagenes/Funda.jpg')} style={styles.imagen} />
                    <Text style={styles.nombre}>Fonda Apple</Text>
                    <TouchableOpacity onPress={() => console.log('Agregar al carrito')}>
                        <Ionicons name="cart-outline" size={24} color="#000" />
                    </TouchableOpacity>
                </View>
            ))}
            {[...Array(1)].map((_, index) => (
                <View key={index} style={styles.producto}>
                    <Image source={require('../imagenes/marco.jpg')} style={styles.imagen} />
                    <Text style={styles.nombre}>Marco 20x30</Text>
                    <TouchableOpacity onPress={() => console.log('Agregar al carrito')}>
                        <Ionicons name="cart-outline" size={24} color="#000" />
                    </TouchableOpacity>
                </View>
            ))}
            {[...Array(1)].map((_, index) => (
                <View key={index} style={styles.producto}>
                    <Image source={require('../imagenes/Funda.jpg')} style={styles.imagen} />
                    <Text style={styles.nombre}>Fonda Apple 15</Text>
                    <TouchableOpacity onPress={() => console.log('Agregar al carrito')}>
                        <Ionicons name="cart-outline" size={24} color="#000" />
                    </TouchableOpacity>
                </View>
            ))}

            {[...Array(1)].map((_, index) => (
                <View key={index} style={styles.producto}>
                    <Image source={require('../imagenes/joyeria.jpeg')} style={styles.imagen} />
                    <Text style={styles.nombre}>Joyeria</Text>
                    <TouchableOpacity onPress={() => console.log('Agregar al carrito')}>
                        <Ionicons name="cart-outline" size={24} color="#000" />
                    </TouchableOpacity>
                </View>
            ))}

            <View style={styles.rectanguloInferior}>
                <View style={styles.categories}>
                    {['Comprar', 'Categoría', 'Carrito'].map((category, index) => (
                        <Text key={index} style={styles.categoria}>{category}</Text>
                    ))}
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F0E5FF',
        padding: 0,
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
        marginRight: 20,
        borderRadius: 5,
        backgroundColor: '#FFF',
        height: 40,
    },
    producto: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 15,
        padding: 15,
        backgroundColor: '#FFF',
        borderRadius: 10,
    },
    imagen: {
        width: 100,
        height: 100,
        borderRadius: 10,
    },
    nombre: {
        flex: 1,
        marginLeft: 30,
        fontSize: 20,
    },
    categories: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 20,
    },
    categoria: {
        color: '#FFFF',
    },
    rectanguloInferior: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        padding: 10,
    
        backgroundColor: '#693DAE',
        justifyContent: 'flex-end',
    },
});

export default Catalogo;

