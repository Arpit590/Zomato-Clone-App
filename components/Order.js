import React from 'react'
import { Image } from 'react-native'
import { StyleSheet, Text, View } from 'react-native'

const Order = () => {
    return (
        <View style={StyleSheet.screen}>
            <View style={styles.container}>
                <Text style={{fontWeight:"bold", fontSize:20, marginLeft:10,marginBottom:3}}>Order again</Text>
                <View style={styles.orderContainer}>
                    <Image
                    source={require("../assets/burger.jpg")}
                    style={{
                        height:100,
                        width:100,
                        borderRadius:10,
                        resizeMode:"contain"
                    }}
                    />
                    <View style={styles.textContainer}>
                        <Text style={{fontSize:18, fontWeight:"bold"}}>McDonald's</Text>
                        <Text>38 mins</Text>
                        <Text style={{color:"blue"}}>20% OFF up to $...</Text>
                    </View>
                </View>
            </View>
        </View>
    )
}

export default Order

const styles = StyleSheet.create({
    screen:{
        marginTop:10
    },
    container:{
        flexDirection:"column",
        padding:10
    },
    orderContainer:{
        flexDirection:"row",
        alignItems:"center",
        marginLeft:10
    },
    textContainer:{
        marginLeft:20
    }
})
