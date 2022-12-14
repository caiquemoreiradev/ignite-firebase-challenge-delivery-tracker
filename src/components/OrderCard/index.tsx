import { useNavigation } from "@react-navigation/native";
import { CardContainer, LeftContent, OrderDate, OrderName, OrderValue, RightContent } from "./styles";

interface OrderProps {
    id: string;
    amount: number;
    date: string;
    name: string;
}

export function OrderCard({ amount, date, name, id }: OrderProps) {

    const navigation = useNavigation();

    function handleNavigateOrderDetails() {

        navigation.navigate('OrderDetails', { orderId: id })
        console.log(id)
    }

    return (
        <CardContainer onPress={handleNavigateOrderDetails}>

            <LeftContent>
                <OrderName>{name}</OrderName>
                <OrderDate>pedido em {date}</OrderDate>
            </LeftContent>

            <RightContent>
                <OrderValue>R$ {amount.toString().replace('.', ',')}</OrderValue>
            </RightContent>
        </CardContainer>
    )
}