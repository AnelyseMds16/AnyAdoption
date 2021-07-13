import React, { Children } from "react";
import { ButtonProps } from "../../interfaces/Button.interface";
import { ButtonStyle, ButtonStyleText, ButtonStyleImage } from "./styles";


export default function Button({ size, image, title, onPress, ...rest }: ButtonProps) {
  return (
    <ButtonStyle size={size} onPress={onPress} {...rest}>
      {/* <ButtonStyleImage source={require({image})}/> */}
      <ButtonStyleText>{title}</ButtonStyleText>
    </ButtonStyle>
  );
}