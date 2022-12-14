import styled, { css } from "styled-components/native";



export const Container = styled.View`
    width: 100%;
    height: 80px;

    background-color: ${({ theme }) => theme.colors.text_dark};

    padding: 8px 24px;

    border-radius: 8px;

    flex-direction: row;
    align-items: center;
    justify-content: space-around;
`;

export const Left = styled.View``;

export const Divider = styled.View`
    width: 1px;
    height: 40px;

    background-color: ${({ theme }) => theme.colors.shape};
`;

export const Right = styled.View``;

export const OrdersQuantityMessage = styled.Text`
    color: ${({ theme }) => theme.colors.shape};

    width: 180px;
`;
