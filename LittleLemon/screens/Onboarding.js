import React from "react";
import { View, Text, SafeAreaView, TouchableOpacity, TextInput } from 'react-native';
import { StyleSheet } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Dimensions } from 'react-native';

const screenHeight = Dimensions.get('window').height;
const screenWidth = Dimensions.get('window').width;

function OnBoarding() {
    return (
        <SafeAreaView style={styles.container}>
            {/* Header */}
            <View style={styles.header}>
                <Text style={styles.headerText}>Little Lemon</Text>
            </View>

            {/* Main Content */}
            <View style={styles.content}>
                <Text style={{ marginBottom: 100 }}>Let us get to know you</Text>
                <Text>First Name</Text>
                <TextInput style={styles.input}></TextInput>
                <Text>Email</Text>
                <TextInput style={styles.input}></TextInput>
            </View>

            {/* Footer */}
            <View style={styles.footer}>
                <TouchableOpacity style={styles.footerButton} onPress={storeData}>
                    <Text style={styles.buttonText}>Next</Text>
                </TouchableOpacity>

            </View>
        </SafeAreaView>

    );
}

const storeData = async () => {
    try{
        await AsyncStorage.setItem('@onboarding', 'complete');
    }catch (e){
        Alert.alert('Error', 'Failed to save Data');
    }
}; 

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    header: {
        flex: 1,
        padding: 20,
        backgroundColor: '#859194',
        justifyContent: 'center',
        alignItems: 'center'
    },
    headerText: {
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold',
    },
    content: {
        flex: 6,
        padding: 20,
        backgroundColor: '#6A7477',
        alignItems: 'center'
    },
    footer: {
        flex: 2,
        padding: 15,
        backgroundColor: '#9DADB1',
        justifyContent: 'center',
        alignItems: 'flex-end'
    },
    footerButton: {
        width: 100,       // or '50%' for responsive
        height: 50,       // fixed height
        backgroundColor: '#007AFF',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 8,
      },
      buttonText: {
        color: '#fff',
        fontSize: 16,
      },
      input: {
        height: 50,
        borderColor: '#999',
        borderWidth: 1,
        borderRadius: 8,
        paddingHorizontal: 15,
        fontSize: 16,
        backgroundColor: '#fff',
      },
});

export default OnBoarding;