import React from "react";
import { useNavigation } from "@react-navigation/core";
import { ButtonVoltar } from "../../components";

import {
    Container,
    View,
    Text
} from "./style"

export default function MeusAnimais() {
    const navigation = useNavigation();
    function handleVoltar() {
        navigation.navigate("Inicio");
    }
    return (
        <Container>
            <ButtonVoltar image={require("../../../assets/sair.png")} title="sair" onPress={handleVoltar} />
        </Container>
    )
}