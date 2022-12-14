import { useCallback, useEffect, useState } from "react";
import { StatusBar } from "expo-status-bar";

import firestore from '@react-native-firebase/firestore';

import { ptBR } from "date-fns/locale";
import { categories } from "../../utils/categories";

import { useBottomTabBarHeight } from "@react-navigation/bottom-tabs";

import { RFValue } from "react-native-responsive-fontsize";
import { VictoryPie } from "victory-native";
import { addMonths, format, subMonths } from 'date-fns';

import { HistoryCard } from "../../components/HistoryCard";

import theme from "../../global/styles/theme";

import Intl from 'intl';

import { ChartContainer, Container, Content, Header, Month, MonthSelect, MonthSelectButton, MonthSelectIcon, ResumePerCategoryContainer, Title } from "./styles";

interface OrderProps {
    id: string;
    amount: number;
    date: string;
    name: string;
    category: string;
    dateFormatted: string;
}


interface CategoryData {
    key: string;
    name: string;
    total: number;
    totalFormatted: string;
    color: string;
    percent: string;
}

export function Resume() {

    const [selectedDate, setSelectedDate] = useState(new Date());

    const [totalByCategories, setTotalByCategories] = useState<CategoryData[]>([]);

    function handleChangeDate(action: 'next' | 'prev') {

        if (action === 'next') {
            setSelectedDate(addMonths(selectedDate, 1));
        } else {
            setSelectedDate(subMonths(selectedDate, 1));
        }

    }

    useEffect(() => {

        const date = String(selectedDate);

        const [day, month, year] = date.split('/');
        const result = [year, month, day].join('/');
        const dateResult = new Date(result);
        const dateFormatted = format(dateResult, 'MMMM, yyyy', { locale: ptBR });

        const subscribe = firestore()
            .collection('orders')
            .where('dateFormatted', '==', dateFormatted)
            .onSnapshot(querySnapshot => {

                const data = querySnapshot.docs.map(doc => {

                    return {
                        id: doc.id,
                        ...doc.data()
                    }
                });

                const expenses = data
                    .filter((expense: OrderProps) =>
                        expense.dateFormatted === dateFormatted
                    );


                const expensesTotal = expenses.reduce((accumulator: number, expense: OrderProps) => {

                    return accumulator + Number(expense.amount);
                }, 0)

                const totalByCategory: CategoryData[] = [];



                categories.map(category => {

                    let categorySum = 0;

                    expenses.map((item: OrderProps) => {

                        if (item.category === category.key) {

                            categorySum += item.amount;
                        }
                    })

                    if (categorySum > 0) {

                        const totalFormatted = categorySum.toString().replace('.', ',')
                        const percent = `${(categorySum / expensesTotal * 100).toFixed(0)}%`;

                        totalByCategory.push({
                            key: category.key,
                            name: category.name,
                            color: category.color,
                            total: categorySum,
                            totalFormatted,
                            percent
                        })
                    }
                })

                setTotalByCategories(totalByCategory);
            })

        return () => subscribe();

    }, [ selectedDate ])

    return (
        <Container>
            <StatusBar style="light" backgroundColor={theme.colors.secondary} translucent />

            <Header>
                <Title>Resumo por categoria</Title>
            </Header>

            <Content
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{
                    padding: 24,
                    paddingBottom: useBottomTabBarHeight()
                }}
            >

                <MonthSelect>
                    <MonthSelectButton onPress={() => handleChangeDate('prev')}>
                        <MonthSelectIcon name='chevron-left' />
                    </MonthSelectButton>

                    <Month>
                        {format(selectedDate, 'MMMM, yyyy', { locale: ptBR })}
                    </Month>

                    <MonthSelectButton onPress={() => handleChangeDate('next')}>
                        <MonthSelectIcon name='chevron-right' />
                    </MonthSelectButton>
                </MonthSelect>

                <ChartContainer>
                    <VictoryPie
                        data={totalByCategories}
                        colorScale={totalByCategories.map(category => category.color)}
                        style={{
                            labels: {
                                fontSize: RFValue(18),
                                fontWeight: 'bold',
                                fill: theme.colors.shape
                            }
                        }}

                        labelRadius={50}
                        x='percent'
                        y='total'
                    />
                </ChartContainer>

                <ResumePerCategoryContainer>

                    {totalByCategories.map(category => (
                        <HistoryCard
                            key={category.key}
                            amount={`R$ ${category.totalFormatted}`}
                            color={category.color}
                            title={category.name}
                        />
                    ))}
                </ResumePerCategoryContainer>

            </Content>
        </Container>
    )
}