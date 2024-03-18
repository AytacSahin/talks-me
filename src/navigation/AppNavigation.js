// Navigation
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { RootSiblingParent } from 'react-native-root-siblings';
// Screens
import WelcomeScreen from '../screens/WelcomeScreen';
import LoginScreen from '../screens/Login';
import RegisterScreen from '../screens/Register';
import ChatMainPageScreen from '../screens/ChatMainPage';
import ConversationDetailsScreen from '../components/ConversationDetails';

const Stack = createStackNavigator();

const AppNavigation = () => {
    return (
        <RootSiblingParent>
            <NavigationContainer >
                <Stack.Navigator screenOptions={{ headerShown: false }}>
                    <Stack.Screen name="Welcome" component={WelcomeScreen} />
                    <Stack.Screen name="Login" component={LoginScreen} />
                    <Stack.Screen name="Register" component={RegisterScreen} />
                    <Stack.Screen name="ChatMainPage" component={ChatMainPageScreen} />
                    <Stack.Screen name="ConversationDetails" component={ConversationDetailsScreen} />
                </Stack.Navigator>
            </NavigationContainer>
        </RootSiblingParent>
    );
};

export default AppNavigation;
