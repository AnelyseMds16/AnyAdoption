import React from "react";
import { useNavigation } from "@react-navigation/core";
import { Container, Text, Image } from "../styles/Container";
import { Button} from "../components";

export default function Home() {
  const navigation = useNavigation();
  function handleLogin() {
    navigation.navigate("Login");
  }
  return (
    <Container>
      <Image source={require("../../assets/splash.png")}/>
      <Text>O aplicativo Any Adoption foi feito para você que está a 
        procura de um amiguinho para adotar ou com 
        animalzinhos para adoção </Text>
      <Text>Entre agora e comece a ajudar os animais</Text>
      <Button onPress={handleLogin} title="Iniciar" />{/* o que ta escrito no botão */}
    </Container>
  );
}