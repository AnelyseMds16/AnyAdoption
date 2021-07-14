import React from "react";
import { useNavigation } from "@react-navigation/core";
import { Image } from "react-native";
import {
    Container,
    View
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
    return (
        <Container>
            
        
        </Container>
    );
}