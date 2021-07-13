import React from "react";
import { useNavigation } from "@react-navigation/core";
import { Image } from "react-native";
import {
    Container,
    FormRow,
    Label,
    TextInput,
    Title,
    Form,
} from "./style";
import { Button, ButtonText } from "../../components";

export default function Cadastrar() {
    const navigation = useNavigation();
    function handleLogin() {
        navigation.navigate("Login");
    }
    function handleHome() {
        navigation.navigate("Home");
    }
    return (
        <Container>
            <Form>
                <Image source={require("../../../assets/logo.png")} style={{ width: 200, height: 206, alignContent: "center"}}/>
                <Title>Cadastrar</Title>
                <FormRow>
                    <Label>E-mail</Label>
                    <TextInput placeholder="e-mail"></TextInput>
                </FormRow>
                <FormRow>
                    <Label>Senha</Label>
                    <TextInput placeholder="senha"></TextInput>
                </FormRow>
                <Button title="Cadastrar" onPress={handleHome} />
                <ButtonText title="Login" onPress={handleLogin} />
            </Form>
        </Container>
    );
}