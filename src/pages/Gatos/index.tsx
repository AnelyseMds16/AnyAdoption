import React from "react";
import { FlatList } from "react-native";
import ButtonAnimal from "../../components/ButtonAnimal";
import dataCat from "../../services/data";
import { ButtonVoltar } from "../../components";
import { useNavigation } from "@react-navigation/core";

import {
    Container,
    View,
    Text
} from "./style"

export default function Gatos() {
    const navigation = useNavigation();
    function handleAnimal() {
        navigation.navigate("Animal");
    }
    function handleVoltar() {
        navigation.navigate("Encontrar");
    }
    return (
        <Container>
            <FlatList data={dataCat} renderItem={({ item }) => (
                <View key={item.id}>
                    {/* <ButtonAnimal image={item.imagem} onPress={handleAnimal}>
                        <>
                            <Text> {item.nome} </Text>
                            <Text> {item.idade}, {item.raca} </Text>
                            <Text> {item} </Text>
                        </>
                    </ButtonAnimal> */}
                </View>
            )}
                keyExtractor={item => String(item.id)}
            />
            <ButtonVoltar image={require("../../../assets/sair.png")} title="sair" onPress={handleVoltar} />
        </Container>
    )
}