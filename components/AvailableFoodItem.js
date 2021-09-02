import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import FoodItem from './FoodItem'
import {MaterialIcons} from "@expo/vector-icons";

const AvailableFoodItem = () => {
    return (
        <View style={styles.screen}>
            <View style={styles.container}>
                <Text style={{fontWeight:"bold", fontSize:20}}>Eat what makes you happy</Text>
                <View style={styles.rowContainer}>
                    <View style={styles.row}>
                        <FoodItem title="Healthy"
                        imgSrc="https://64.media.tumblr.com/6f372558bb4cdfc1e3f8cbfd1fca61da/tumblr_inline_okzl9rgdtY1tp60y0_500.png"
                        />
                        <FoodItem title="Chole Bature"
                        imgSrc="https://img-global.cpcdn.com/recipes/1d9ce5d3344e6a34/1200x630cq70/photo.jpg"
                        />
                        <FoodItem title="Pizza"
                        imgSrc="https://img.buzzfeed.com/thumbnailer-prod-us-east-1/video-api/assets/216054.jpg"
                        />
                    </View>
                    <View style={styles.row}>
                        <FoodItem title="Burger"
                        imgSrc="https://d4t7t8y8xqo0t.cloudfront.net/eazymedia/group%2F663%2Fmenu020210309144419.jpg"
                        />
                        <FoodItem title="Momos"
                        imgSrc="https://femina.wwmindia.com/thumb/content/2020/jul/momos-01-thumb1596107536.jpg?width=1200&height=900"
                        />
                        <FoodItem title="Butter Chicken"
                        imgSrc="https://static.toiimg.com/thumb/53205522.cms?imgsize=302803&width=800&height=800"
                        />
                    </View>
                </View>
                <View style={styles.moreContainer}> 
                    <Text>see more</Text>
                    <MaterialIcons name="keyboard-arrow-down" size={24} color="black" />
                </View>
            </View>
        </View>
    )
}

export default AvailableFoodItem

const styles = StyleSheet.create({
    container:{
        padding:10
    },
    rowContainer:{
        padding: 10,
    },
    row:{
        flexDirection:"row",
        justifyContent:"space-between",
        marginVertical:5
    },
    moreContainer:{
        flexDirection: "row",
        justifyContent:"center",
        alignItems:"center",
        marginVertical:5,
        borderWidth:1,
        borderColor:"black",
        borderRadius:10
    }
})
