import React from "react";
import { View, Text, Button} from 'react-native'


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
    <View>
        <Text>Hello</Text>
        <Button title="api data to console" onPress={getDataFromAPIAsync}></Button>
    </View>
    );
}

export default Home;