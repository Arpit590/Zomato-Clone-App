import React from 'react'
import { FlatList, StyleSheet, Text, View } from 'react-native'
import ListItem from './ListItem'

export const data=[{
    id: "m1",
    name:"MAX Safety"
},
    {
      id:"m2",
      name:"PRO"  
    },
    {
        id:"m3",
        name:"Cuisines"
    },
    {
        id:"m4",
        name:"Rating"
    },
    {
        id:"m5",
        name:"Fatest Delivery"
    }, {
        id:"m6",
        name:"Offers"
    },
    {
        id: "m7",
        name: "Takeaway"
    },
    {
        id: "m8",
        name:"More"
    }
]

const ScrollableList = () => {
    return (
        <FlatList
        style={{marginVertical:10}}
        horizontal
        showsHorizontalScrollIndicator={false}
        data={data}
        renderItem={({item})=>(
            <ListItem
            key={item.id}
            name= {item.name}
            />
        )}
        />
            
    )
}

export default ScrollableList

const styles = StyleSheet.create({})
