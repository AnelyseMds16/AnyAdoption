import React from "react";
import { FlatList } from "react-native";
import ButtonAnimal from "../../components/ButtonAnimal";
import dataCat from "../../services/data";
import { useNavigation } from "@react-navigation/core";

import {
    Container,
    View
} from "./style"

export default function Gatos() {
    const navigation = useNavigation();
    function handleAnimal() {
        navigation.navigate("Animal");
    }
    return (
        <Container>
            <FlatList data={dataCat} renderItem={({ item }) => (
                <View key={item.id}>
                    {/* <ButtonAnimal image={item.imagem} onPress={handleAnimal}>

                    </ButtonAnimal> */}
                </View>
            )}
                keyExtractor={item => String(item.id)}
            />
        </Container>
    )
}