import React, { useState } from "react";
import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";

function LoginScreen(): JSX.Element {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    function login(){
        const dados = {
            email: email,
            password: password,
        }

        console.log(dados);
    }

    return (
        <View style={styles.container}>
            <Image style={styles.logo} resizeMode="contain"
                source={require('../assets/imagens/user.png')} />


            <View style={styles.card}>
                <Text style={styles.title}>Login</Text>


                <TextInput style={styles.input} placeholder="E-mail"
                    placeholderTextColor="#151413"
                    onChangeText={(textEmail) => setEmail(textEmail)}
                    />


                <TextInput style={styles.input} placeholder="Senha"
                    placeholderTextColor="151413"
                    onChangeText={(textPassword) => setPassword(textPassword)}
                    secureTextEntry
                    />



                <TouchableOpacity style={styles.button}
                onPress={()=>{ login()}}>
                    <Text style={styles.buttonText}> Entrar </Text>
                </TouchableOpacity>


                <TouchableOpacity>
                    <Text style={styles.forgotPassword}>Não possui uma conta? Cadastra-se!</Text>
                </TouchableOpacity>


                <TouchableOpacity>
                    <Text style={styles.forgotPassword}>Esqueci minha senha</Text>
                </TouchableOpacity>

            </View>
        </View>

    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#5f8300'

    },
    logo: {
        width: 65,
        height: 65,
        marginBottom: 30,
        marginTop: -150

    },
    title: {
        fontSize: 20,
        fontWeight: "bold",
        color: '#151413',
        marginBottom: 13,
        textAlign: 'center'

    },
    input: {
        backgroundColor: '#D7D4D1',
        height: 40,
        marginBottom: 20,
        paddingHorizontal: 10,
        borderRadius: 13,
        borderWidth: 2,
        borderColor: '#5f8300'


    },
    button: {
        backgroundColor: "#556B2F",
        height: 40,
        borderRadius: 13,


    },
    buttonText: {
        color: '#FFFFFF',
        textAlign: 'center',
        fontSize: 19,
        lineHeight: 40,


    },
    forgotPassword: {
        color: '#000000',
        textAlign: 'center',
        marginTop: 10,


    },
    login: {
    

    },
    card: {
        backgroundColor: "#DEB887",
        width: 300,
        borderRadius: 15,
        padding: 20,
        elevation: 3,
        shadowColor: 'rgba(0,0,0,0.3)',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
    }

});

export default LoginScreen;