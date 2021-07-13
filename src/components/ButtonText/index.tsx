import React from "react";
import { ButtonProps } from "../../interfaces/Button.interface";
import { ButtonStyle, ButtonStyleText, Text} from "./styles";


export default function Button({ size, title, onPress, ...rest }: ButtonProps) {
    return (
        <ButtonStyle onPress={onPress} {...rest}>
            <Text> Não tem uma conta? </Text>
            <ButtonStyleText>{title}</ButtonStyleText>
        </ButtonStyle>
    );
}