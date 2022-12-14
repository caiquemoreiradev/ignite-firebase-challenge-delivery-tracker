import { FlatList } from 'react-native';

import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

import { Feather } from '@expo/vector-icons';

export const Container = styled.View`
    flex: 1;

    background-color: ${({ theme }) => theme.colors.background};
`;

export const Header = styled.View`
    width: 100%;
    height: ${RFPercentage(24)}px;

    background-color: ${({ theme }) => theme.colors.secondary};

    justify-content: center;
    align-items: flex-start;
    flex-direction: row;
`;

export const UserWrapper = styled.View`
    width: 100%;

    padding: 0 24px;
    margin-top: 56px;

    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`;

// User Profile

export const UserInfo = styled.View`
    flex-direction: row;
    align-items: center;
`;

export const UserImage = styled.Image`
    width: ${RFValue(50)}px;
    height: ${RFValue(50)}px;

    border-radius: 25px;
`;

export const User = styled.View`
    margin-left: 17px;
`;

export const UserGreeting = styled.Text`
    color: ${({ theme }) => theme.colors.shape};

    font-size: ${RFValue(17)}px;
    font-family: ${({ theme }) => theme.fonts.medium};
`;

export const UserGreetingSubtext = styled.Text`
    color: ${({ theme }) => theme.colors.shape};

    font-size: ${RFValue(12)}px;
    font-family: ${({ theme }) => theme.fonts.regular};
`;


export const LogoutButton = styled.TouchableOpacity``;

export const Icon = styled(Feather)`
    color: ${({ theme }) => theme.colors.secondary};
    
    font-size: ${RFValue(24)}px;
`;

// HighlightCard List 

export const HighlightCards = styled.View`
    width: 100%;

    padding: 0 24px;

    position: absolute;
    margin-top: ${RFPercentage(20)}px;
`;

// Transactions List

export const Orders = styled.View`
    flex: 1;
    padding: 0 24px;

    margin-top: ${RFPercentage(12)}px;
`;

export const Title = styled.Text`
    font-size: ${RFValue(18)}px;
    font-family: ${({ theme }) => theme.fonts.regular};

    margin-bottom: 24px;

    padding-bottom: 8px;

    border-bottom-color: ${({ theme }) => theme.colors.text_dark};
    border-bottom-width: 1px;
`;