import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'

const ListItem = ({name}) => {
    return (
        <TouchableOpacity activeOpacity={0.6} style={styles.screen}>
            <Text style={styles.text}>{name}</Text>
        </TouchableOpacity>
    )
}

export default ListItem

const styles = StyleSheet.create({
    screen:{
        borderWidth:2,
        borderColor: "lightgrey",
        marginHorizontal: 10,
        borderRadius:10
    }
    ,
    text:{
        padding:8
    }
})
