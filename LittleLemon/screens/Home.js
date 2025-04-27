import React, { useState, useEffect } from "react";
import { View, Text, Button, FlatList, TouchableOpacity, TextInput } from 'react-native'
import { StyleSheet } from "react-native";

function Home() {
    const [data, setData] = useState([]);
    const [menuData, setMenuData] = useState([]);

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
                    setMenuData(data['menu']);
                })
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        getDataFromAPIAsync()
        filterMenuDataByCategory('all')
    }, []);

    const filterMenuDataByCategory = (category) => {
        setMenuData(data.filter((item,index,data)=>{
            if(item['category'] == category){
                return true;
            }
            return false;
        }));
    }

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
                <View>
                    <TextInput onChangeText={(text)=>{
                        setMenuData(menuData.filter((item,index,data) => {
                            if(text == item['name'].substring(0,text.length).toLowerCase()){
                                return true
                            }
                            return false
                        }
                        ))
                        if(text==''){
                            setMenuData(data)
                        }
                    }} style={{backgroundColor:'#F2F2F2',
                    margin:20, height:40}}/>
                </View>
            </View>
            <View style={{ flex: 1 }}>
                <Text style={{fontWeight:'bold', margin:5, fontSize:20}}>ORDER FOR DELIVERY!</Text>
                <View style={styles.categoryContainer}>
                    <TouchableOpacity style={styles.categoryButton} onPress={() => filterMenuDataByCategory('starters')}>
                        <Text>Starters</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.categoryButton}  onPress={() => filterMenuDataByCategory('mains')}>
                        <Text>Mains</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.categoryButton}  onPress={() => filterMenuDataByCategory('desserts')}>
                        <Text>Desserts</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.categoryButton}  onPress={() => filterMenuDataByCategory('drinks')}>
                        <Text>Drinks</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.categoryButton}  onPress={() => filterMenuDataByCategory('specials')}>
                        <Text>Specials</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={{ height: 1, backgroundColor: '#ccc', marginTop: 20 }} />
            <View style={styles.list}>
                <FlatList
                    data={menuData}
                    renderItem={({ item }) => <Item name={item.name} description={item.description} price={item.price} />}
                    keyExtractor={(item, index) => index.toString()}
                    ItemSeparatorComponent={() => (
                        <View style={{ height: 1, backgroundColor: '#ccc', marginTop: 10 }} />
                    )}

                />
            </View>
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
    categoryContainer: {
        flex: 1,
        flexDirection: 'row'
    },
    list: {
        flex: 7
    },
    itemName: {
        fontSize: 20,
        fontWeight: 'bold',
        marginTop: 5,
        marginLeft: 5
    },
    itemDescription: {
        fontSize: 15,
        color: '#495E57',
        margin: 7,
    },
    itemPrice: {
        fontSize: 15,
        color: '#495E57',
        marginLeft: 5,
    },
    categoryButton: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#DDDDDD',
        padding:15,
        borderRadius:10,
        marginBottom:10,
        marginLeft:5
    }

});

export default Home;