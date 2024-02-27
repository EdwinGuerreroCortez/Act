import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

const RecuperarContrasena = () => {
    return (
        <View style={styles.container}>
            <View style={styles.fondo}></View>
            <View style={styles.contenedor}>
                <Text style={styles.titulo}>Recuperar Contraseña</Text>
                <View style={styles.campo}>
                    <View style={styles.textoCampo}>
                        <Text style={styles.icono}>&#9993; </Text>
                        <Text>Correo Electrónico</Text>
                    </View>
                    <TextInput
                        style={styles.input}
                        placeholder="Correo Electrónico"
                    />
                </View>
                <TouchableOpacity style={styles.boton}>
                    <Text style={styles.textoBoton}>Enviar Código de Verificación</Text>
                </TouchableOpacity>
                <Text style={styles.enlace}>¿Recuerdas tu contraseña? Inicia Sesión</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative', // Añadido para que el fondo absoluto se ajuste a este contenedor
    },
    fondo: {
        backgroundColor: 'rgba(142, 45, 226, 0.7)', // Color morado con opacidad
        position: 'absolute',
        top: 0,
        bottom: 0,
        zIndex: -1, 
    
        
        
       
        width: 550,
       
       
        
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
    textoCampo: {
        flexDirection: 'row',
        alignItems: 'center',
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
        textDecorationLine: 'none',
    },
});

export default RecuperarContrasena;
