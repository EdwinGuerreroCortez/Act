import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';

// Obtener las dimensiones de la ventana para ajustes responsivos
const { width, height } = Dimensions.get('window');

const VerificarCodigo = () => {
    return (
        <View style={styles.container}>
            <View style={styles.fondo}></View>
            <View style={styles.contenedor}>
                <Text style={styles.titulo}>Código de Verificación</Text>
                <View style={styles.campo}>
                    {/* Utilizamos un símbolo Unicode para el checkmark, más compatible con React Native */}
                    <Text style={styles.icono}>✓ Código</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Introduce tu código"
                        keyboardType="number-pad" // Asegura que se muestre el teclado numérico
                    />
                </View>
                <TouchableOpacity style={styles.boton}>
                    <Text style={styles.textoBoton}>Verificar Código</Text>
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
        padding: 10, // Añadido para asegurar el padding en dispositivos pequeños
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
        borderRadius: 20,
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4, // Suaviza las sombras
        elevation: 5, // Mejora en Android
        padding: 20,
        width: width * 0.9, // Usa un porcentaje del ancho de la pantalla para responsividad
        maxWidth: 450, // Máximo ancho para tablets y dispositivos grandes
        zIndex: 1,
    },
    titulo: {
        fontSize: 22, // Ligeramente más pequeño para ajustarse a diferentes tamaños de pantalla
        fontWeight: 'bold',
        marginBottom: 20,
        textAlign: 'center',
    },
    campo: {
        backgroundColor: '#f7f7f7',
        borderWidth: 1, // Más sutil
        borderColor: '#ddd', // Color más claro
        borderRadius: 10, // Bordes más redondeados
        marginBottom: 20,
        padding: 12,
    },
    icono: {
        marginBottom: 5,
    },
    input: {
        backgroundColor: 'transparent',
        height: 40, // Altura fija para el input
    },
    boton: {
        backgroundColor: '#8e2de2',
        borderRadius: 10, // Bordes más redondeados
        marginTop: 10,
        paddingVertical: 12,
        paddingHorizontal: 20,
    },
    textoBoton: {
        textAlign: 'center',
        color: 'white',
        fontWeight: 'bold',
        fontSize: 16, // Aumenta la legibilidad
    },
    enlace: {
        color: '#8e2de2',
        fontSize: 14,
        textAlign: 'center',
        marginTop: 20,
        textDecorationLine: 'underline', // Subraya el texto para claridad
    },
});

export default VerificarCodigo;
