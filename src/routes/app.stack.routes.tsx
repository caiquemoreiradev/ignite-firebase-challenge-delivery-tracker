import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { OrderDetails } from '../screens/OrderDetails';
import { Dashboard } from '../screens/Dashboard';

const { Navigator, Screen } = createNativeStackNavigator();

export function AppStackRoutes() {
    return (
        <Navigator
            initialRouteName="Dashboard"
            screenOptions={{
                headerShown: false
            }}
        >

            <Screen
                name="Dashboard"
                component={Dashboard}
            />

            <Screen
                name="OrderDetails"
                component={OrderDetails}
            />
        </Navigator>
    )
}