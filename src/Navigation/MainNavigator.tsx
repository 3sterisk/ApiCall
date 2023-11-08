import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native';
import ApiCallScreen from '../Screens/ApiCallScreen';
import HomeScreen from '../Screens/HomeScreen';
import { TransitionPresets } from '@react-navigation/stack';
import Search from '../assets/Images/Search.svg'
import Bag from '../assets/Images/Bag.svg'
import Favorite from '../assets/Images/Favorite.svg'

const MainNavigator = () => {

    const Stack = createStackNavigator();

    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName='HomeScreen' screenOptions={{
                ...TransitionPresets.SlideFromRightIOS,

            }}

            >
                <Stack.Screen name='HomeScreen' component={HomeScreen} />
                <Stack.Screen name='ApiCall' component={ApiCallScreen} options={
                    {
                        headerRight: () => (
                            <View style={{ flexDirection: 'row', gap: 20, marginRight: 15 }}>
                                <TouchableOpacity>
                                    <Search />
                                </TouchableOpacity>
                                <TouchableOpacity>
                                    <Favorite />
                                </TouchableOpacity>
                                <TouchableOpacity>
                                    <Bag />
                                </TouchableOpacity>
                            </View>
                        )
                    }
                } />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default MainNavigator

const styles = StyleSheet.create({})