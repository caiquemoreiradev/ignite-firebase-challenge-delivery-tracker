import styled from "styled-components/native";

export const Container = styled.View`

    flex: 1;
`;

export const Content = styled.ScrollView``;

export const BackButtonContainer = styled.TouchableOpacity`

    margin: 16px 56px 0 0;
`;

export const Header = styled.View`

    flex-direction: row;
    align-items: center;
    
    padding: 48px 24px 32px;

    background-color: ${({ theme }) => theme.colors.secondary};
`;

export const HeaderTitle = styled.Text`

    color: ${({ theme }) => theme.colors.shape};

    font-size: 18px;

    font-weight: bold;

    margin-top: 16px;
`;

export const OrderTopInfo = styled.View`

    width: 100%;

    flex-direction: row;

    align-items: center;
    justify-content: space-between;

    padding: 32px 24px;
`;

export const OrderTitle = styled.Text`

    flex: 1;

    padding-bottom: 8px;

    font-size: 20px;
    font-weight: bold;

    border-bottom-width: 1px;
    border-bottom-color: ${({ theme }) => theme.colors.text_dark};

    color: ${({ theme }) => theme.colors.text_dark};
`;

export const OrderTotal = styled.Text``;

export const OrderCategoryContainer = styled.View`

    flex-direction: row;

    padding: 8px 24px;

    border-radius: 8px;
    
    background-color: ${({ theme }) => theme.colors.secondary};
`;

export const OrderCategory = styled.Text`

    font-weight: bold ;
    color: ${({ theme }) => theme.colors.shape};

    margin-left: 8px;
`;

export const OrderCategoryImage = styled.Image`

    width: 20px;
    height: 20px;
`;

export const OrderDetailsContainer = styled.View`

    padding: 16px 24px;
`;

export const OrderDetailsTop = styled.View`

    flex-direction: row;

    align-items: center;
    justify-content: space-between;

    margin-bottom: 16px;
`;

export const OrderValue = styled.Text`

    font-size: 20px;
    font-weight: bold;
`;

export const OrderDate = styled.Text``;

export const OrderImageContainer = styled.View`
    align-items: center;

    margin-top: 32px;

    padding: 0 24px 56px;
`;

export const OrderImageTitle = styled.Text`

    padding-bottom: 8px;
    margin-bottom: 24px;

    font-size: 20px;
    font-weight: bold;

    border-bottom-width: 1px;
    border-bottom-color: ${({ theme }) => theme.colors.text_dark};

    color: ${({ theme }) => theme.colors.text_dark};
`;

export const OrderImage = styled.Image`

    width: 100%;
    height: 400px;
`;


