import React from "react";
import { View, Text, Button} from 'react-native'
import { StyleSheet } from "react-native";

function Home() {
    const getDataFromAPIAsync = async () => {
        try {
            fetch('https://raw.githubusercontent.com/Meta-Mobile-Developer-PC/Working-With-Data-API/main/capstone.json')
            .then((response) => response.json())
            .then((data) =>{
                console.log(data);
            })
        } catch (error){
            console.error(error);
        }
    };

    return (
    <View style={{flex:1}}>
        <View style={styles.header}></View>
        <View style={styles.banner}></View>
        <View style={styles.list}></View>
        <Button title="api data to console" onPress={getDataFromAPIAsync}></Button>
    </View>
    );
}

const styles = StyleSheet.create({
    header:{
        flex:1
    },
    banner:{
        flex:5,
        backgroundColor:'#495E57'
    },
    list:{
        flex:7
    }

});

export default Home;