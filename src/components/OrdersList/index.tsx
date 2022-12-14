import { useEffect, useState } from "react";
import { FlatList } from "react-native";

import firestore from '@react-native-firebase/firestore';

import { OrderCard } from "../OrderCard";


interface OrderProps {
    amount: number;
    category: string;
    date: string;
    id: string;
    name: string;
}

export function OrdersList() {

    const [orders, setOrders] = useState<OrderProps[]>([]);

    useEffect(() => {

        const subscribe = firestore()
            .collection('orders') 
            .orderBy('createdAt', 'desc')
            .onSnapshot(querySnapshot => {

                const data = querySnapshot.docs.map(doc => {

                    return {
                        id: doc.id,
                        ...doc.data()
                    }
                }) as OrderProps[];

                setOrders(data);
            })

        return () => subscribe();
    }, [])

    return (
        <FlatList
            data={orders}
            keyExtractor={item => item.id}
            renderItem={({ item }) => (
                <OrderCard id={item.id} amount={item.amount} date={item.date} name={item.name} />
            )}
            showsVerticalScrollIndicator={false}
        />
    )
}