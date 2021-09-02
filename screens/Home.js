import React from 'react'
import { ScrollView } from 'react-native'
import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import Ads from '../components/Ads'
import AvailableFoodItem from '../components/AvailableFoodItem'
import Header from '../components/Header'
import MealsList from '../components/MealsList'
import Order from '../components/Order'
import ScrollableList from '../components/ScrollableList'

const Home = () => {
    return (
        <ScrollView style={styles.screen}>
            <Header/>
            <ScrollableList/>
            <Ads/>
            <Order/>
            <AvailableFoodItem/>
            <MealsList/>
        </ScrollView>
    )
}

export default Home

const styles = StyleSheet.create({
    screen: {
        marginTop: 30,
        backgroundColor:"white"
    }
})
