import styled from "styled-components/native";

export const Container = styled.View`

    flex: 1;
    background-color: ${({ theme }) => theme.colors.background};
`;

export const Header = styled.View`
   
    padding: 48px 24px 32px;

    align-items: center;
    justify-content: center;

    background-color: ${({ theme }) => theme.colors.secondary};
`;

export const Title = styled.Text`

    font-size: 18px;
    color: ${({ theme }) => theme.colors.shape};

    font-weight: bold;

    margin-top: 16px;
`;

export const FormContainer = styled.ScrollView`

    padding: 32px 24px 24px;

    flex: 1;
`;

export const InputsContainer = styled.View``;

export const UploadPhotoTitle = styled.Text`

    align-items: center;

    font-size: 16px;
    color: ${({ theme }) => theme.colors.text_dark};

    font-weight: bold;

    margin-top: 16px;
`;

export const UploadPhotoContainer = styled.View`

    align-items: center;
    
    padding: 32px 0 48px;
`;

export const ButtonsContainer = styled.View`

    align-items: center;

    width: 100%;

    padding: 0 0 48px;
`;