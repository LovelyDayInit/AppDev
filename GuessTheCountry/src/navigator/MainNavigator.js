import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import GuessTheCountry from '../screens/GuessTheCountry';
import WinScreen from '../screens/WinScreen';

const Stack = createStackNavigator();

const MainNavigator = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home">
                <Stack.Screen
                    name="Home"
                    component={GuessTheCountry}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="Win"
                    component={WinScreen}
                    options={{ headerShown: false }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
};

export default MainNavigator;