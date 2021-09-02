import {NavigationContainer} from "@react-navigation/native";
import React from 'react';
import { StyleSheet, View, Text} from 'react-native';
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import Home from "./screens/Home";
import {SimpleLineIcons, Foundation, MaterialCommunityIcons, FontAwesome} from "@expo/vector-icons";
import GoOut from "./screens/GoOut";
import Grocery from "./screens/Grocery";
import Nutrition from "./screens/Nutrition";
import Pro from "./screens/Pro"

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={{
        headerShown:false,
        tabBarStyle: {
          height:70,
          
        }
      }}>
        <Tab.Screen name="Order" component={Home}
        options={{
          tabBarShowLabel: false,
          tabBarIcon:({focused})=>(
            <View style={styles.screen}>
              <SimpleLineIcons
              name="handbag"
              size={24}
              color="black"
              />
              <Text>Order</Text>
            </View>
          )
        }}
        />
        <Tab.Screen name="Go-out" component={GoOut}
        options={{
          tabBarShowLabel: false,
          tabBarIcon:({focused})=>(
            <View style={styles.screen}>
              <Foundation name="foot"
               size={24}
              color="black" />
              <Text>Go-out</Text>
            </View>
          )
        }}
        />
        <Tab.Screen name="Pro" component={Pro}
        options={{
          tabBarShowLabel: false,
          tabBarIcon:({focused})=>(
            <View style={styles.screen}>
              <MaterialCommunityIcons name="police-badge-outline"
               size={24} color="black" />
              <Text>Pro</Text>
            </View>
          )
        }}
        />
        <Tab.Screen name="Grocery" component={Grocery}
        options={{
          tabBarShowLabel: false,
          tabBarIcon:({focused})=>(
            <View style={styles.screen}>
              <FontAwesome name="shopping-basket"
               size={24} color="black" />
              <Text>Grocery</Text>
            </View>
          )
        }}
        />
        <Tab.Screen name="Nutrition" component={Nutrition}
        options={{
          tabBarShowLabel: false,
          tabBarIcon:({focused})=>(
            <View style={styles.screen}>
              <MaterialCommunityIcons
               name="heart-flash"
                size={24} color="black" />
              <Text>Nutrition</Text>
            </View>
          )
        }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  screen: {
    alignItems: "center",
  },
});
