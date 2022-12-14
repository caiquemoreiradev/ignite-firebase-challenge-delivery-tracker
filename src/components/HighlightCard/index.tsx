import React, { useEffect, useState } from 'react';

import { Ionicons } from '@expo/vector-icons';

import firestore from '@react-native-firebase/firestore';

import {
    Container, Divider, Left, OrdersQuantityMessage, Right,
} from './styles';

export function HighlightCard() {

    const [ordersQuantity, setOrdersQuantity] = useState(0);

    useEffect(() => {

        const subscribe = firestore()
            .collection('orders')
            .onSnapshot(querySnapshot => {

                const data = querySnapshot.docs.length;

                setOrdersQuantity(data);
            })

        return () => subscribe();

    }, []);

    return (
        <Container>

            <Left>
                <Ionicons name="fast-food-sharp" size={32} color="#fff" />
            </Left>

            <Divider />

            <Right>
                <OrdersQuantityMessage>Você fez {ordersQuantity} pedidos essa semana</OrdersQuantityMessage>
            </Right>
        </Container>
    )
}