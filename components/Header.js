import React from 'react'
import { StyleSheet, Text, TextInput, View } from 'react-native'
import {Ionicons, AntDesign} from "@expo/vector-icons"


const Header = () => {
    return (
        <View style={styles.screen}>
            <View style={styles.container}>
                <Ionicons name="location" 
                size={24} color="red" />
                
                <Text style={styles.text}>Home - Arawali Appartment, Sector 52...</Text>
                <Ionicons name="pizza-outline" size={24} color="black" style={{backgroundColor: "lightgrey", padding:5,
                  borderRadius: 20, color: "grey"}} />
            </View>
            <View style={styles.inputContainer}>
                <AntDesign name="search1" size={22} color="red" />
                <TextInput
                placeholder="Restaurant name, cuisine, or a dish..."
                style={styles.input}
                />
            </View>
        </View>
    )
}

export default Header

const styles = StyleSheet.create({
    screen:{
        marginTop: 30,
        width:"100%",
        zIndex: 999,
        backgroundColor:"white"
    },
    container: {
        flexDirection: "row",
        justifyContent: "space-evenly",
        alignItems: "center"
    },

    text:{
        fontSize: 15,
        fontWeight: "bold"
    },
    inputContainer:{
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "center",
        borderWidth: 2,
        borderColor: "lightgrey",
        width: 350,
        marginLeft: 20,
        paddingLeft: 10,
        marginVertical: 10,
        borderRadius: 10,
        padding:5
    },
    input:{
        color: "lightgrey",
        marginLeft:5
    }


})
