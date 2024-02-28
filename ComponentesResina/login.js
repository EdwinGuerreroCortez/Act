// VerificarCodigo.js
import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

const Logueo = () => {
    return (
        <View style={styles.container}>
            <View style={styles.fondo}></View>
            <View style={styles.contenedor}>
                <Text style={styles.titulo}>Inicia Sesion</Text>
                <View style={styles.campo}>
                    <Text style={styles.icono}>&#128100; Usuario</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Usuario/email"
                    />
                    <Text style={styles.icono}>&#128274; contraseña</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Contraseña"
                    />
                </View>
                
                <Text style={styles.enlace}>¿Olvidaste tu contraseña?</Text>
                <TouchableOpacity style={styles.boton}>
                    <Text style={styles.textoBoton}>Iniciar sesion</Text>
                </TouchableOpacity>
                <Text style={styles.enlace}>¿No tienes cuenta? Registrate</Text>
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
        zIndex: -1,
        width: '100%',
        height: '100%',
    },
    contenedor: {
        backgroundColor: 'white',
        borderRadius: 25,
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.1,
        padding: 20,
        width: 450,
        zIndex: 1,
        color: '#333',
        maxHeight: '80vh',
    },
    titulo: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
        textAlign: 'center',
    },
    campo: {
        backgroundColor: '#f7f7f7',
        borderWidth: 2,
        borderColor: '#eee',
        borderRadius: 20,
        marginBottom: 15,
        padding: 10,
    },
    icono: {
        marginBottom: 10,
    },
    input: {
        backgroundColor: 'transparent',
        borderWidth: 0,
        width: '100%',
    },
    boton: {
        backgroundColor: '#8e2de2',
        borderRadius: 20,
        marginTop: 20,
        paddingVertical: 10,
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

export default Logueo;
