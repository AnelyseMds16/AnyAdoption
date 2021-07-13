import React from "react";
import { useNavigation } from "@react-navigation/core";

import {
    Container,
    Image,
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
            
                <Image source={require("../../../assets/iconepessoa.png")}/>
            

            <Button title="Informações" size="define" onPress={handleInformacoes}/>
            <Button title="Favoritos" size="define" onPress={handleFavoritos} />
           
        </Container>
    );
}