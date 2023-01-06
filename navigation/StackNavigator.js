import React, { Component } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import TabNavigator from "./tabNavigator";
import StoryScreen from "../screen/storyScreen";

const Stack = createStackNavigator()

export default class StackNavigator extends Component{
    render(){
        return(
            <Stack.Navigator initialRouteName="Home" screenOptions={{headerShown: false}}>
                <Stack.Screen name = "Home" component={TabNavigator}/> 
                <Stack.Screen name="Story Screen" component={StoryScreen}/>
            </Stack.Navigator>
        )
    }
}
