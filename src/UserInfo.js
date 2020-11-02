import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default ({ email, phoneNumber }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.welcome}>Welcome, these are your personal info</Text>
            <View style={styles.infoView} >
                <Text style={styles.infoText}>Email:</Text>
                <Text style={styles.infoText}>{email}</Text>
            </View>
            <View style={styles.infoView} >
                <Text style={styles.infoText}>Phone:</Text>
                <Text style={styles.infoText}>{phoneNumber}</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFF',
    },
    welcome: {
        fontWeight: "bold",
        fontSize: 14,
        color: "#DB1414",
    },
    infoView: {
        width: "80%",
        padding: 20,
    },
    infoText: {
        height: 50,
        color: "#000"
    },
});
