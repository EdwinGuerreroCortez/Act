import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, FlatList } from 'react-native';

// Definición de los campos de registro en un arreglo
const camposRegistro = [
    { id: '1', tipo: 'Nombre Completo', placeholder: 'Ingresa tu nombre completo', unicodeIcon: '👤', secureTextEntry: false },
    { id: '2', tipo: 'Usuario', placeholder: 'Nombre de usuario', unicodeIcon: '👤', secureTextEntry: false },
    { id: '3', tipo: 'Correo Electrónico', placeholder: 'correo@ejemplo.com', unicodeIcon: '📧', secureTextEntry: false },
    { id: '4', tipo: 'Teléfono', placeholder: 'Número de teléfono', unicodeIcon: '📞', secureTextEntry: false },
    { id: '5', tipo: 'Contraseña', placeholder: 'Ingresa tu contraseña', unicodeIcon: '🔒', secureTextEntry: true },
    { id: '6', tipo: 'Confirmar Contraseña', placeholder: 'Confirma tu contraseña', unicodeIcon: '🔒', secureTextEntry: true },
];

const Registro = () => {
    // Función para renderizar cada campo
    const renderItem = ({ item }) => (
        <View style={styles.campo}>
            <Text style={styles.icono}>{item.icono} {item.tipo}</Text>
            <TextInput
                style={styles.input}
                placeholder={item.placeholder}
                secureTextEntry={item.secureTextEntry}
            />
        </View>
    );

    return (
        <View style={styles.container}>
            <View style={styles.fondo}></View>
            <View style={styles.contenedor}>
                <Text style={styles.titulo}>Registro</Text>
                <FlatList
                    data={camposRegistro}
                    renderItem={renderItem}
                    keyExtractor={item => item.id}
                    showsVerticalScrollIndicator={false}
                />
                <TouchableOpacity style={styles.boton}>
                    <Text style={styles.textoBoton}>Registrarse</Text>
                </TouchableOpacity>
                <Text style={styles.enlace}>¿Ya tienes cuenta? Inicia sesión</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    fondo: {
        backgroundColor: 'rgba(142, 45, 226, 0.7)',
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: -1,
    },
    contenedor: {
        backgroundColor: 'white',
        borderRadius: 25,
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.1,
        padding: 20,
        width: '90%',
        maxWidth: 450,
        zIndex: 1,
    },
    titulo: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
        textAlign: 'center',
    },
    campo: {
        backgroundColor: '#f7f7f7',
        borderWidth: 1,
        borderColor: '#eee',
        borderRadius: 10,
        marginBottom: 15,
        paddingVertical: 10,
        paddingHorizontal: 15,
    },
    icono: {
        marginBottom: 5,
    },
    input: {
        backgroundColor: 'transparent',
        borderWidth: 0,
        height: 40,
    },
    boton: {
        backgroundColor: '#8e2de2',
        borderRadius: 20,
        marginTop: 20,
        paddingVertical: 10,
        paddingHorizontal: 20,
    },
    textoBoton: {
        textAlign: 'center',
        color: 'white',
        fontWeight: 'bold',
        textTransform: 'uppercase',
    },
    enlace: {
        color: '#8e2de2',
        fontSize: 14,
        textAlign: 'center',
        marginTop: 20,
    },
});

export default Registro;
