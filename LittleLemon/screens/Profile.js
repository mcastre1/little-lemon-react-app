import AsyncStorage from "@react-native-async-storage/async-storage";
import React from "react";
import { View, Text, Button, TextInput, CheckBox, StyleSheet } from "react-native";

function Profile({ firstName, setName, email, setEmail, setOnBoarding }) {
    const callValues = async () => {
        console.log(await AsyncStorage.multiGet(['@onboarding', '@name', '@email']))
    }

    return (
        <View>
            <Text style={styles.heading}>Personal information</Text>
            <View style={styles.imageContainer}>
                <Text>Avatar</Text>
                <Button title="Change"></Button>
                <Button title="Remove"></Button>
            </View>

            <Text style={styles.label}>First name</Text>
            <TextInput style={styles.input} value={firstName}></TextInput>
            <Text style={styles.label}>Last name</Text>
            <TextInput style={styles.input}></TextInput>
            <Text style={styles.label}>Email</Text>
            <TextInput style={styles.input} value={email}></TextInput>
            <Text style={styles.label}>Phone number</Text>
            <TextInput style={styles.input}></TextInput>
            <Text style={styles.heading}>Email notifications</Text>
            <View style={styles.checkboxContainer}>
                <CheckBox value={true} />
                <Text style={styles.checkboxLabel}>Order statuses</Text>
            </View>
            <View style={styles.checkboxContainer}>
                <CheckBox value={true} />
                <Text style={styles.checkboxLabel}>Password changes</Text>
            </View>
            <View style={styles.checkboxContainer}>
                <CheckBox value={true} />
                <Text style={styles.checkboxLabel}>Special offers</Text>
            </View>
            <View style={styles.checkboxContainer}>
                <CheckBox value={true} />
                <Text style={styles.checkboxLabel}>Newsletter</Text>
            </View>

            <View style={styles.logoutButtonContainer}>
                <Button
                    title="Log out"
                    onPress={async () => {
                        await AsyncStorage.clear();
                        setOnBoarding(null);
                    }}
                />
            </View>

            <View style={styles.bottomButtonsContainer}>
                <Button title="Discard changes" style={styles.bottomButtons}></Button>
                <Button title="Save changes" style={styles.bottomButtons}></Button>
            </View>
        </View>
    );
}


const styles = StyleSheet.create({
    input: {
        borderRadius: 8,
        borderWidth: 1,
        marginBottom: 20,
        marginRight: 10,
        marginLeft: 10,
        height: 30
    },
    label: {
        margin: 10
    },
    heading: {
        fontWeight: 'bold',
        margin: 10
    },
    checkboxContainer: {
        margin: 10,
        flexDirection: 'row'
    },
    checkboxLabel: {
        marginLeft: 10
    },
    imageContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 30,
        marginLeft: 10,
    },
    bottomButtonsContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        gap:25
    },
    logoutButtonContainer: {
        margin:10
    },
    bottomButtons:{
        borderRadius:20
    }
});

export default Profile;