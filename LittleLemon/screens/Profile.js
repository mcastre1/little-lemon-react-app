import AsyncStorage from "@react-native-async-storage/async-storage";
import React from "react";
import { View, Text, Button} from "react-native";

function Profile({ firstName, setName, email, setEmail }) {
    const callValues = async () =>{
        console.log(await AsyncStorage.multiGet(['@onboarding', '@name', '@email']))
    }
    
    return (
        <View>
            <Text>Profile Page</Text>
            <Text>{firstName}</Text>
            <Text>{email}</Text>
            
            <Button title="Get asyncstorage values"
            onPress={callValues}></Button>

            <Button
                title="Clear asyncstorage"
                onPress={async () => {
                    await AsyncStorage.clear();
                    console.log('Cleared asyncstorage.')
                }}
            />
        </View>
    );
}


export default Profile;