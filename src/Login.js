import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import { authenticate } from "./Auth";

export default ({ onLogin }) => {
    const [email, setEmail] = useState("campidelli@gmail.com");
    const [password, setPassword] = useState("E#r4t5y6u7");

    const onLoginPress = () => {
        authenticate(email, password)
            .then(data => {
                onLogin(data);
            })
            .catch(err => {
                console.error('Failed to login!', err);
            })
    };

    return (
        <View style={styles.container}>
            <Text style={styles.logo}>EROAD PoC</Text>
            <View style={styles.inputView} >
                <TextInput
                    style={styles.inputText}
                    placeholder="Email..."
                    placeholderTextColor="#000"
                    value={email}
                    onChangeText={(value) => setEmail(value)} />
            </View>
            <View style={styles.inputView} >
                <TextInput
                    secureTextEntry
                    style={styles.inputText}
                    placeholder="Password..."
                    placeholderTextColor="#000"
                    value={password}
                    onChangeText={(value) => setPassword(value)} />
            </View>
            <TouchableOpacity>
                <Text style={styles.forgot}>Forgot Password?</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.loginBtn} onPress={onLoginPress}>
                <Text style={styles.loginText}>LOGIN</Text>
            </TouchableOpacity>
            <TouchableOpacity>
                <Text style={styles.loginText}>Signup</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFF',
        alignItems: 'center',
        justifyContent: 'center',
    },
    logo: {
        fontWeight: "bold",
        fontSize: 50,
        color: "#DB1414",
        marginBottom: 40
    },
    inputView: {
        width: "80%",
        backgroundColor: "#C1C1C1",
        borderRadius: 25,
        height: 50,
        marginBottom: 20,
        justifyContent: "center",
        padding: 20
    },
    inputText: {
        height: 50,
        color: "#000"
    },
    forgot: {
        color: "#DB1414",
        fontSize: 11
    },
    loginBtn: {
        width: "80%",
        backgroundColor: "#DB1414",
        borderRadius: 25,
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 40,
        marginBottom: 10
    },
    loginText: {
        color: "#FFF"
        
    }
});
