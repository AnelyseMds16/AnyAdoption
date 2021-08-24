import React from "react";
import { useNavigation } from "@react-navigation/core";
import { Image } from "react-native";
import {
    Container,
    FormRow,
    TextInput,
    Title,
    Form,
    View,
    Text
} from "./style";
import { Button, ButtonText } from "../../components";

export default function Cadastrar() {
    const navigation = useNavigation();
    function handleLogin() {
        navigation.navigate("Login");
    }
    function handleMenu() {
        navigation.navigate("Menu");
    }
    return (
        <Container>
            <Form>
                <Image source={require("../../../assets/logo.png")} style={{ width: 200, height: 206, alignContent: "center"}}/>
                <Title>Cadastrar</Title>
                <FormRow>
                    <TextInput placeholder="e-mail"></TextInput>
                </FormRow>
                <FormRow>
                    <TextInput placeholder="senha"></TextInput>
                </FormRow>
                <Button title="Cadastrar" onPress={handleMenu} />
                <View>
                    <Text> Já tem uma conta?</Text>
                    <ButtonText title="Login" onPress={handleLogin} />
                </View>
                
            </Form>
        </Container>
    );
}