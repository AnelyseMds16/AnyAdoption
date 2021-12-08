import { AxiosError } from "axios";
import React, { useState, useEffect } from "react";
import { useNavigation } from "@react-navigation/core";
import { Image, Alert, KeyboardAvoidingView } from "react-native";
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
import { useAuth } from "../../hook/auth";
import { IAuthenticate, IUser } from "../../interfaces/User.interface";
import colors from "../../styles/colors";
import { LoginTypes } from "../../types/ScreenStack.types";

export default function Login({ navigation }: LoginTypes) {
    const { signIn } = useAuth();
    const [data, setData] = useState<IAuthenticate>();
    const [isLoading, setIsLoading] = useState(true);
  
    function handleCadastrar() {
      navigation.navigate("Cadastrar");
    }
    
    function handleChange(item: IAuthenticate) {
      setData({ ...data, ...item });
    }

    async function handleSignIn() {
      try {
        if (data?.email && data.password) {
          await signIn(data);
        } else {
          Alert.alert("Preencha todos os campos!!!");
        }
      } catch (error) {
        const err = error as AxiosError;
        const data = err.response?.data as IUser;
        let message = "";
        if (data.data) {
          for (const [key, value] of Object.entries(data.data)) {
            message = `${message} ${value}`;
          }
        }
        Alert.alert(`${data.message} ${message}`);
      }
    }

    return (
        <Container>
            <KeyboardAvoidingView>
                <Form>
                    <Image source={require("../../../assets/logo.png")} style={{ width: 200, height: 206, alignContent: "center"}}/>
                    <Title>Login</Title>
                    <FormRow>
                        <TextInput placeholder="e-mail" keyboardType="email-address"
                            autoCapitalize="none"
                            onChangeText={(i) => handleChange({ email: i })}></TextInput>
                    </FormRow>
                    <FormRow>
                        <TextInput placeholder="senha"  secureTextEntry={true}
                            onChangeText={(i) => handleChange({ password: i })}></TextInput>
                    </FormRow>
                    <Button title="Login" onPress={handleSignIn} />
                    <View>
                        <Text> Não tem uma conta?</Text>
                        <ButtonText title="Cadastre-se" onPress={handleCadastrar} />
                    </View>
                </Form>
            </KeyboardAvoidingView>
        </Container>
    );
}