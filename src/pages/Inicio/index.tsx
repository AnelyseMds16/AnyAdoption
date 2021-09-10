import React from "react";
import { useNavigation } from "@react-navigation/core";

import {
    Container,
    Image,
    Text
} from "./style";
import { Button, ButtonText } from "../../components";

export default function Perfil() {
    const navigation = useNavigation();
    function handleInformacoes() {
        navigation.navigate("Informacoes");
    }
    function handleFavoritos() {
        navigation.navigate("Favoritos");
    }
    function handleMeusAnimais() {
        navigation.navigate("MeusAnimais");
    }
    return (
        <Container>

            <Image source={require("../../../assets/iconepessoa.png")} />
            <Text>Anelyse Maria</Text>
            <Button title="Informacoes" size="define" onPress={handleInformacoes} />
            <Button title="Favoritos" size="define" onPress={handleFavoritos} />
            <Button title="Meus Animais" size="define" onPress={handleMeusAnimais} />

        </Container>
    );
}