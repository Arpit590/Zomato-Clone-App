import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import {Image} from "react-native-elements"
import {AntDesign} from "@expo/vector-icons";

const Meal = ({imgSrc,title, description, rating, per}) => {
    return (
        <View style={styles.screen}>
            <Image
            source={{
                uri: imgSrc
            }}
            style={{
                height:200,
                width:"100%",
                borderRadius:10,
                resizeMode:"cover"
            }}
            />
            <View style={styles.textContainer}>
                <View style={styles.container1}>
                    <Text style={{fontWeight:"bold", fontSize:20}}>{title}</Text>
                    <Text style={{fontSize:15, color:"grey"}}>{description}</Text>
                </View>
                <View style={styles.container2}>
                    <View style={styles.rating}>
                        <Text style={{color:"white", marginRight:5}}>{rating}</Text>
                        <AntDesign name="star" size={12} color="white" />
                    </View>
                    <View>
                        <Text style={{marginTop:5, color:"grey"}}>${per} for one</Text>
                    </View>
                </View>
            </View>
        </View>
    )
}

export default Meal

const styles = StyleSheet.create({
    screen:{
        backgroundColor:"white",
        elevation:5,
        borderRadius:10,
        marginVertical:10
    },
    textContainer:{
        padding:10,
        paddingLeft:0,
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"space-evenly"
    },
    container12:{
        alignItems:"center",
        justifyContent:"center"
    },
    rating:{
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"center",
        backgroundColor:"green", 
        borderRadius:10,
    }
})
