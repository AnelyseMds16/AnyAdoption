import React from "react";
import { TouchableOpacity} from "react-native";
import { ButtonProps } from "../../interfaces/Button.interface";

import{
    Text,
    Image
} from "./style";

export default function ButtonAnimal({
    title,
    image,
    onPress,
    ...rest
  }: ButtonProps) {
    return (
      <TouchableOpacity onPress={onPress} {...rest}>
          {image && <Image source={image} />}
          <Text>{title}</Text>
      </TouchableOpacity>
    );
}


