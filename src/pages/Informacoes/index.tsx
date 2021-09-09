import React from "react";
import { FlatList } from "react-native";
import { useNavigation } from "@react-navigation/core";
import { ButtonVoltar } from "../../components";
import data from "../../services/data"

import {
    Container,
    Text,
    Text1,
    View,
    Image
} from "./style";


export default function Informacoes() {
    const navigation = useNavigation();
    function handleVoltar() {
        navigation.navigate("Inicio");
    }
    return (
        <Container>


            <ButtonVoltar image={require("../../../assets/sair.png")} title="sair" onPress={handleVoltar} />
        </Container>
    );
}