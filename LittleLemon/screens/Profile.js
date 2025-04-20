import React from "react";
import { View, Text } from "react-native";

function Profile({firstName, setName, email, setEmail}){
    return(
        <View>
            <Text>Profile Page</Text>
            <Text>{firstName}</Text>
            <Text>{email}</Text>
        </View>
    );
}


export default Profile;