import React from 'react';

import { MaterialIcons } from '@expo/vector-icons';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { Dashboard } from '../screens/Dashboard';
import { Register } from '../screens/Register';
import { Resume } from '../screens/Resume';

import { useTheme } from 'styled-components';
import { AppStackRoutes } from './app.stack.routes';

const { Navigator, Screen } = createBottomTabNavigator();

export function AppRoutes() {

    const theme = useTheme();

    return (
        <Navigator
            screenOptions={{
                headerShown: false,
                tabBarActiveTintColor: theme.colors.secondary,
                tabBarInactiveTintColor: theme.colors.text,
                tabBarLabelPosition: 'beside-icon',
                tabBarStyle: {
                    height: 62,
                }
            }}
        >
            <Screen
                name='Home'
                component={AppStackRoutes}
                options={{
                    tabBarIcon: (({ size, color }) =>
                        <MaterialIcons
                            name="home"
                            size={size}
                            color={color}
                        />
                    )
                }}
            />

            <Screen
                name='Cadastrar'
                component={Register}
                options={{
                    tabBarIcon: (({ size, color }) =>
                        <MaterialIcons
                            name="fastfood"
                            size={size}
                            color={color}
                        />
                    )
                }}
            />

            <Screen
                name='Resumo'
                component={Resume}
                options={{
                    tabBarIcon: (({ size, color }) =>
                        <MaterialIcons
                            name="pie-chart"
                            size={size}
                            color={color}
                        />
                    )
                }}
            />
        </Navigator>
    )
}