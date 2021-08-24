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

export default function Login() {
    const navigation = useNavigation();
    function handleCadastrar() {
        navigation.navigate("Cadastrar");
    }
    function handleMenu() {
        navigation.navigate("Menu");
    }
    return (
        <Container>
            <Form>
                <Image source={require("../../../assets/logo.png")} style={{ width: 200, height: 206, alignContent: "center"}}/>
                <Title>Login</Title>
                <FormRow>
                    <TextInput placeholder="e-mail"></TextInput>
                </FormRow>
                <FormRow>
                    <TextInput placeholder="senha"></TextInput>
                </FormRow>
                <Button title="Login" onPress={handleMenu} />
                <View>
                    <Text> Não tem uma conta?</Text>
                    <ButtonText title="Cadastre-se" onPress={handleCadastrar} />
                </View>
                

            </Form>
        </Container>
    );
}