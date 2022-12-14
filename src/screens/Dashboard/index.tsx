import React, { useState } from "react";
import { ActivityIndicator } from 'react-native';
import { HighlightCard } from "../../components/HighlightCard";
import { OrdersList } from "../../components/OrdersList";

import {
    Container,
    Header,
    UserWrapper,
    UserInfo,
    UserImage,
    User,
    UserGreeting,
    UserGreetingSubtext,
    HighlightCards,
    Orders,
    Title,
} from "./styles";

export function Dashboard() {

    return (
        <Container>

            <Header>
                <UserWrapper>
                    <UserInfo>
                        <UserImage source={{ uri: 'https://avatars.githubusercontent.com/u/56305107?v=4' }} />

                        <User>
                            <UserGreeting>Olá, Caique</UserGreeting>
                            <UserGreetingSubtext>acompanhe seus gastos com delivery</UserGreetingSubtext>
                        </User>
                    </UserInfo>
                </UserWrapper>
            </Header>

            <HighlightCards >
                <HighlightCard />
            </HighlightCards>

            <Orders>
                <Title>Meus pedidos</Title>

                <OrdersList />

            </Orders>
        </Container >
    )
}