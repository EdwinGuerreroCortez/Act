import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';

// Obtener dimensiones para un diseño responsivo
const { width, height } = Dimensions.get('window');

const RecuperarContrasena = () => {
    return (
        <View style={styles.container}>
            <View style={[styles.fondo, { width, height }]}></View>
            <View style={styles.contenedor}>
                <Text style={styles.titulo}>Recuperar Contraseña</Text>
                <View style={styles.campo}>
                    <View style={styles.textoCampo}>
                        <Text style={styles.icono}>✉️ </Text>
                        <Text>Correo Electrónico</Text>
                    </View>
                    <TextInput
                        style={styles.input}
                        placeholder="Correo Electrónico"
                        keyboardType="email-address"
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
        borderRadius: 20, // Bordes más suavizados
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 5, // Para sombra en Android
        padding: 20,
        width: '90%', // Ancho relativo para mejor adaptación
        maxWidth: 450, // Máximo ancho para dispositivos grandes
        zIndex: 1,
    },
    titulo: {
        fontSize: 22,
        fontWeight: 'bold',
        marginBottom: 20,
        textAlign: 'center',
    },
    campo: {
        backgroundColor: '#f7f7f7',
        borderWidth: 1,
        borderColor: '#ddd',
        borderRadius: 10,
        marginBottom: 15,
        padding: 10,
    },
    textoCampo: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 5,
    },
    icono: {
        marginRight: 10, // Asegura espacio entre el icono y el texto
    },
    input: {
        backgroundColor: 'transparent',
        height: 40, // Altura fija para todos los inputs
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
    enlace: {
        color: '#8e2de2',
        fontSize: 14,
        textAlign: 'center',
        marginTop: 20,
        textDecorationLine: 'underline', // Para que parezca más un enlace
    },
});

export default RecuperarContrasena;
