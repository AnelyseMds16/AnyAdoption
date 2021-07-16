import React from "react";
import { useNavigation } from "@react-navigation/core";
import { Image } from "react-native";
import {
    Container,
    View
} from "./style";
import { ButtonAction } from "../../components";

export default function Perfil() {
    const navigation = useNavigation();
    function handleInformacoes() {
        navigation.navigate("Informacoes");
    }
    function handleFavoritos() {
        navigation.navigate("Favoritos");
    }
    return (
        <Container>
            <ButtonAction image={require("../../../assets/dog.png")} title="Cachorros" size="define" onPress={handleInformacoes} />
            <ButtonAction image={require("../../../assets/cat.png")} title="Gatos" size="define" onPress={handleFavoritos} />
            <ButtonAction image={require("../../../assets/coelho.png")} title="Coelhos" size="define" onPress={handleFavoritos} />
            <ButtonAction title="Outros" size="define" onPress={handleFavoritos} />
        </Container>
    );
}