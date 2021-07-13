import React from "react";
import { useNavigation } from "@react-navigation/core";
import { Image } from "react-native";
import {
    Container,
    View,
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
    return (
        <Container>
            <View>
                <Button title="Cachorros" size="define" onPress={handleInformacoes} />
                <Button title="Gato" size="define" onPress={handleFavoritos} />
                <Button title="Coelhos" size="define" onPress={handleFavoritos} />
                <Button title="Outros" size="define" onPress={handleFavoritos} />
            </View>
        </Container>
    );
}