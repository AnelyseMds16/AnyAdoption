import React from "react";
import { useNavigation } from "@react-navigation/core";
import { Image } from "react-native";
import {
    Container,
} from "./style";
import { ButtonAction } from "../../components";

export default function Perfil() {
    const navigation = useNavigation();
    function handleCachorros() {
        navigation.navigate("Cachorros");
    }
    function handleGatos() {
        navigation.navigate("Gatos");
    }
    function handleCoelhos() {
        navigation.navigate("Coelhos");
    }
    return (
        <Container>
            <ButtonAction image={require("../../../assets/dog.png")} title="Cachorros" size="define" onPress={handleCachorros} />
            <ButtonAction image={require("../../../assets/cat.png")} title="Gatos" size="define" onPress={handleGatos} />
            <ButtonAction image={require("../../../assets/coelho.png")} title="Coelhos" size="define" onPress={handleCoelhos} />
            <ButtonAction title="Outros" size="define" onPress={handleGatos} />
        </Container>
    );
}