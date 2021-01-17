import * as React from 'react';
import { View, Text, StatusBar, TextInput, TouchableOpacity } from 'react-native';
import styles from './styles';

function HomeScreen({ navigation }) {
    return (
        <View style={styles.container}>
            <StatusBar backgroundColor="#45aaf2" barStyle="light-content" />

            <TextInput style={styles.input} placeholder="Username" />
            <TextInput style={styles.input} secureTextEntry placeholder="Password" />

            <View style={styles.btnContainer}>
                <TouchableOpacity onPress={() => navigation.navigate('Profile', { name: 'Custom profile header' })} style={styles.userBtn}>
                    <Text style={styles.btnTxt}>Login</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => alert("Signup Works")} style={styles.userBtn}>
                    <Text style={styles.btnTxt}>Signup</Text>
                </TouchableOpacity>
            </View>

        </View>
    );
}

export default HomeScreen
