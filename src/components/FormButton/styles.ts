import { TouchableOpacity } from "react-native";
import styled from "styled-components/native";

export const Container = styled(TouchableOpacity)`

    background-color: ${({ theme }) => theme.colors.success};

    padding: 12px 32px;

    border-radius: 8px;

    align-items: center;

    width: 100%;
`;

export const ButtonTitle = styled.Text`

    color: ${({ theme }) => theme.colors.shape};
`;