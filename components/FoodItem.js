import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'

const FoodItem = ({title, imgSrc}) => {
    return (
        <View style={styles.container}>
            <Image
            source={{uri: imgSrc}}
            style={{
                height:100,
                width:100,
                resizeMode:"contain",
                borderRadius:50
            }}
            />
            <Text style={{color:"grey"}}>{title}</Text>
        </View>
    )
}

export default FoodItem

const styles = StyleSheet.create({
    container:{
        justifyContent:"center",
        alignItems:"center"
    }
})
