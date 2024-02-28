import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

const CambiarContrasena = () => {
    return (
        <View style={styles.container}>
            <View style={[styles.fondo, { width, height }]}></View>
            <View style={styles.contenedor}>
                <Text style={styles.titulo}>Cambiar Contraseña</Text>
                
                <View style={styles.campo}>
                    <Text style={styles.icono}>🔒 Nueva Contraseña</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Nueva Contraseña"
                        secureTextEntry={true}
                    />
                </View>
                <View style={styles.campo}>
                    <Text style={styles.icono}>🔒 Confirmar Nueva Contraseña</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Confirmar Nueva Contraseña"
                        secureTextEntry={true}
                    />
                </View>
                <TouchableOpacity style={styles.boton}>
                    <Text style={styles.textoBoton}>Actualizar Contraseña</Text>
                </TouchableOpacity>
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
        left: 0,
        zIndex: -1,
    },
    contenedor: {
        backgroundColor: 'white',
        borderRadius: 20,
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 5,
        padding: 20,
        width: '90%',
        maxWidth: 450,
    },
    titulo: {
        fontSize: 22,
        fontWeight: 'bold',
        marginBottom: 20,
        textAlign: 'center',
    },
    campo: {
        backgroundColor: '#f7f7f7',
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
        height: 40,
    },
    boton: {
        backgroundColor: '#8e2de2',
        borderRadius: 10,
        marginTop: 20,
        paddingVertical: 12,
        paddingHorizontal: 20,
    },
    textoBoton: {
        textAlign: 'center',
        color: 'white',
        fontWeight: 'bold',
        fontSize: 16,
    },
});

export default CambiarContrasena;
