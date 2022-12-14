import { TouchableOpacityProps } from "react-native";
import { ButtonTitle, Container } from "./styles";

interface ButtonProps extends TouchableOpacityProps {
    title: string;
}

export function FormButton({ title, ...rest }: ButtonProps) {

    return (
        <Container { ...rest }>
            <ButtonTitle>{ title }</ButtonTitle>
        </Container>
    )
}