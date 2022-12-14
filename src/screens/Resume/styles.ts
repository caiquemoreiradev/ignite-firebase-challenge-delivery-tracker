import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

import { Feather } from '@expo/vector-icons';

export const Container = styled.View`

    padding-bottom: 40px;

    background-color: ${({ theme }) => theme.colors.background};
`;

export const Header = styled.View`

    padding: 48px 24px 32px;

    align-items: center;
    justify-content: center;

    background-color: ${({ theme }) => theme.colors.secondary};
`;

export const Title = styled.Text`

    color: ${({ theme }) => theme.colors.shape};

    font-size: 18px;

    font-weight: bold;

    margin-top: 16px;
`;

export const ResumePerCategoryContainer = styled.ScrollView`
    padding: 24px 8px;
`;

// Content list

export const Content = styled.ScrollView``;

// Month Select

export const MonthSelect = styled.View`
    width: 100%;

    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    margin-top: 8px;
`;

export const MonthSelectButton = styled.TouchableOpacity``;

export const MonthSelectIcon = styled(Feather)`
    font-size: ${RFValue(24)}px;
`;

export const Month = styled.Text`
    font-family: ${({ theme }) => theme.fonts.regular};
    font-size: ${RFValue(20)}px;
`;

// Chart

export const ChartContainer = styled.View`
    width: 100%;
    align-items: center;

    margin-bottom: ${RFValue(4)}px;
`;