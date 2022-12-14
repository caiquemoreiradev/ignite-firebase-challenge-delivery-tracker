import { useEffect, useState } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";

import firestore from '@react-native-firebase/firestore';

import { Feather } from '@expo/vector-icons';
import storage from '@react-native-firebase/storage';

import { BackButtonContainer, Container, Content, Header, HeaderTitle, OrderCategory, OrderCategoryContainer, OrderCategoryImage, OrderDate, OrderDetailsContainer, OrderDetailsTop, OrderImage, OrderImageContainer, OrderImageTitle, OrderTitle, OrderTopInfo, OrderTotal, OrderValue } from "./styles";
import { categories } from "../../utils/categories";

interface OrderProps {
    id: string;
    amount: number;
    date: string;
    name: string;
    category: string;
    dateFormatted: string;
}

interface Category {
    key: string;
    name: string;
    icon: string;
}

interface Params {
    orderId: string;
}

export function OrderDetails() {

    const navigation = useNavigation();

    const route = useRoute();
    const { orderId } = route.params as Params;

    const [selectedOrder, setSelectedOrder] = useState<OrderProps>({} as OrderProps);
    const [selectedCategory, setSelectedCategory] = useState<Category>({} as Category);

    const [imageUrl, setImageUrl] = useState('initial state');

    function handleNavigateGoBack() {

        navigation.goBack();
    }

    function updateCategory() {

        const categorySelected = categories.filter(category => category.key === selectedOrder.category);

        console.log(categorySelected[0])

        setSelectedCategory(categorySelected[0]);
    }

    async function loadImage() {

        const imageUrl = await storage().ref(`/images/${orderId}`).getDownloadURL();

        setImageUrl(imageUrl);
    }

    useEffect(() => {

        firestore()
            .collection('orders')
            .doc(orderId)
            .get()
            .then(response => setSelectedOrder(response.data()));

        loadImage();
    }, [])

    useEffect(() => {

        updateCategory();
    }, [selectedOrder])



    return (
        <Container>

            <Header>
                <BackButtonContainer onPress={handleNavigateGoBack}>
                    <Feather name="arrow-left" color={'#fff'} size={24} />
                </BackButtonContainer>
                <HeaderTitle>Detalhes do pedido</HeaderTitle>
            </Header>

            <Content>
                <OrderTopInfo>
                    <OrderTitle>{selectedOrder.name}</OrderTitle>
                </OrderTopInfo>

                <OrderDetailsContainer>
                    <OrderDetailsTop>
                        <OrderCategoryContainer>
                            <OrderCategoryImage source={{ uri: selectedCategory?.icon }} />
                            <OrderCategory>{selectedCategory?.name}</OrderCategory>
                        </OrderCategoryContainer>
                        <OrderValue>R$ {selectedOrder?.amount?.toString().replace('.', ',')}</OrderValue>
                    </OrderDetailsTop>

                    <OrderDate>pedido em {selectedOrder.date}</OrderDate>
                </OrderDetailsContainer>

                <OrderImageContainer>
                    <OrderImageTitle>Print do pedido</OrderImageTitle>
                    <OrderImage source={{ uri: imageUrl }} />
                </OrderImageContainer>
            </Content>

        </Container>
    )
}