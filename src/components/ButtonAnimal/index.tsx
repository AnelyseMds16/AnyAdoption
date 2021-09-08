import React from "react";
import { TouchableOpacity } from "react-native";
import { ButtonProps } from "../../interfaces/Button.interface";

import {
  Text,
  Image
} from "./style";

export default function ButtonAnimal({
  nome,
  image,
  idade,
  raca,
  sexo,
  distancia,
  children,
  onPress,
  ...rest
}: ButtonProps) {
  return (
    <TouchableOpacity onPress={onPress} {...rest}>
      {image && <Image source={image} />}
      {children}
    </TouchableOpacity>
  );
}


