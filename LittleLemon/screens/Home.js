import React, { useState } from "react";
import { View, Text, Button, FlatList } from 'react-native'
import { StyleSheet } from "react-native";

function Home() {
    const [data, setData] = useState([]);

    const Item = ({ name, price, description, image }) => (
        <View>
            <Text style={styles.itemName}>{name}</Text>
            <Text style={styles.itemDescription}>{description}</Text>
            <Text style={styles.itemPrice}>${price}</Text>
        </View>
    );

    const getDataFromAPIAsync = async () => {
        try {
            fetch('https://raw.githubusercontent.com/Meta-Mobile-Developer-PC/Working-With-Data-API/main/capstone.json')
                .then((response) => response.json())
                .then((data) => {
                    setData(data['menu']);
                })
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <View style={{ flex: 1 }}>
            <View style={styles.header}>
                <Text style={styles.headerTitle}>LITTLE LEMON</Text>
            </View>
            <View style={styles.banner}>
                <Text style={{ color: '#F4CE14', fontSize: 50 }}>Little Lemon</Text>
                <View style={{ flexDirection: 'row' }}>
                    <View style={{ flex: 2 }}>
                        <Text style={{ color: '#EDEFEE', fontSize: 25 }}>Chicago</Text>
                        <Text style={{ color: '#EDEFEE', fontSize: 20 }}>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</Text>
                    </View>
                    <View style={{ flex: 1 }}>
                        <Text>image</Text>
                    </View>
                </View>
            </View>
            <View style={styles.list}>
                <FlatList
                    data={data}
                    renderItem={({ item }) => <Item name={item.name} description={item.description} price={item.price}/>}
                    keyExtractor={(item, index) => index.toString()}
                    ItemSeparatorComponent={() => (
                        <View style={{ height: 1, backgroundColor: '#ccc', marginTop:10}} />
                      )}
                    
                />
            </View>
            <Button title="api data to console" onPress={getDataFromAPIAsync}></Button>
        </View>
    );
}

const styles = StyleSheet.create({
    header: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    headerTitle: {
        fontSize: 20,
        color: '#495E57',
        fontWeight: 'bold'
    },
    banner: {
        flex: 5,
        backgroundColor: '#495E57',
        padding: 20
    },
    list: {
        flex: 7
    },
    itemName:{
        fontSize:20,
        fontWeight:'bold',
        marginTop:5,
        marginLeft:5
    },
    itemDescription: {
        fontSize:15,
        color:'#495E57',
        margin:7,
    },
    itemPrice:{
        fontSize:15,
        color:'#495E57',
        marginLeft:5,
    }

});

export default Home;