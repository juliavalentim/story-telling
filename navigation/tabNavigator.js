import React, { Component } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";

import Feed from "../screen/feed";
import CreateStory from "../screen/createStory";

const Tab = createBottomTabNavigator()

export default class TabNavigator extends Component{
    render(){
        return(
            <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName;
                    if (route.name === 'Feed') {
                        iconName = focused
                            ? 'book'
                            : 'book-outline';
                    } else if (route.name === 'Create Story') {
                        iconName = focused ? 'create' : 'create-outline';
                    }
                    return <Ionicons name={iconName} size={size} color={color} />;
                },
            })}
            tabBarOptions={{
                activeTintColor: 'tomato',
                inactiveTintColor: 'gray',
            }}
            >
                <Tab.Screen name = "Feed" component = {Feed}/>
                <Tab.Screen name = "Create Story" component = {CreateStory}/>

            </Tab.Navigator>
        )
    }
}