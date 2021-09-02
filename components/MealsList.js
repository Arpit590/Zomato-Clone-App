import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Meal from './Meal'

const MealsList = () => {
    return (
        <View style={styles.screen}>
            <View style={styles.container}>
                <Text style={{fontWeight:"bold", fontSize:20, marginBottom:10}}>1576 restaurants around you</Text>
                <Meal
                imgSrc="https://myfoodstory.com/wp-content/uploads/2018/08/Dal-Makhani-New-3.jpg"
                title="4U"
                rating={3.6}
                description="North Indian, Chinese, Fast Food"
                per="200"
                />
                <Meal
                imgSrc="https://www.eweek.com/wp-content/uploads/2020/10/Dominos.pizza_.jpg"
                title="Domino's Pizza"
                rating={4.2}
                description="Pizza, Fast Food, Desserts"
                per="150"
                />
                <Meal
                imgSrc="https://i.insider.com/5bbd187101145529745a9895?width=700"
                title="Burger King"
                rating={4.1}
                description="Burger, Desserts, Beverages"
                per="150"
                />
                <Meal
                imgSrc="https://i.guim.co.uk/img/media/55fa49ab59f142e656d909bfb304f8c39431cbe9/88_0_3978_2388/master/3978.jpg?width=1200&height=900&quality=85&auto=format&fit=crop&s=9a37a2d48acaccc1ee2f7d7a6ef80bae"
                title="Subway"
                rating={4.0}
                description="Healthy Food, Fast Food, Salad"
                per="200"
                />
                <Meal
                imgSrc="https://b.zmtcdn.com/data/pictures/chains/7/2302247/9d748144ebdbd9acb7257f356e7a65b5.jpg?fit=around|771.75:416.25&crop=771.75:416.25;*,*"
                title="WOW! Momo"
                rating={3.9}
                description="Momos, Tibetan, Fast Food"
                per="200"
                />
            </View>
        </View>
    )
}

export default MealsList

const styles = StyleSheet.create({
    screen:{
        marginVertical:10
    },
    container:{
        padding:10
    }
})
