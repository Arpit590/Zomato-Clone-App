import React from 'react'
import {StyleSheet, Text, View } from 'react-native'
import {FontAwesome} from "@expo/vector-icons";
import {Image} from 'react-native-elements';
import Ad from "../assets/ad.jpg";


const Ads = () => {
    return (
        <View style={styles.screen}>
            <View style={styles.container}>
                <FontAwesome name="cutlery" size={24} color="green" style={styles.icon} />
                <View style={styles.textContainer}>
                    <Text style={{fontWeight:"bold", marginRight:5}}>Cutlery won't be added to your order by default</Text>
                    <Text style={{color: "grey", marginTop:3}}>You are able to add if you need. know more</Text>
                </View>
            </View>
            <View style={styles.adContainer}>
                <Image
                style={{
                    height:120,
                    width: "100%",
                    resizeMode:"cover",
                    marginTop:10,
                    borderRadius:10
                }}
                source={require("../assets/ad.jpg")}
                />
            </View>
        </View>
    )
}

export default Ads

const styles = StyleSheet.create({
    screen:{
        marginVertical: 10,
        marginHorizontal:10,
    },
    container:{
        flexDirection: "row",
        backgroundColor: "lightblue",
        padding: 10,
        borderRadius:10
    },
    textContainer:{
        marginLeft: 10,
    },
    icon:{
        backgroundColor: "white",
        padding: 10,
        paddingHorizontal:12,
        borderRadius: 20,
        borderColor:"green",
        borderWidth:1
    },
    adContainer:{
    }
})
