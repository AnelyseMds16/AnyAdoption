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
    Text, 
} from "./style";
import { Button, ButtonText } from "../../components";
import { useAuth } from "../../hook/auth";
import { IRegister, IUser } from "../../interfaces/User.interface";
import { LoginTypes } from "../../types/ScreenStack.types";

export default function Cadastrar({ navigation }: LoginTypes) {
    const { register } = useAuth();
    const [data, setData] = useState<IRegister>();

    function handleChange(item: IRegister) {
        setData({ ...data, ...item });
      }
    function handleLogin() {
      navigation.navigate("Login");
    }

    async function handleRegister() {
        try {
          if (data?.email && data.name && data.password) {
            await register(data);
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
        <>
            <Container>
                <KeyboardAvoidingView>
                    <Form>
                        <Image source={require("../../../assets/logo.png")} style={{ width: 200, height: 206, alignContent: "center"}}/>
                        <Title>Cadastrar</Title>

                        <FormRow>
                            <TextInput placeholder="name" onChangeText={(i) => handleChange({ name: i })}></TextInput>
                        </FormRow>

                        <FormRow>
                            <TextInput placeholder="e-mail" keyboardType="email-address"  autoCapitalize="none"
                                onChangeText={(i) => handleChange({ email: i })}></TextInput>
                        </FormRow>
                        <FormRow>
                            <TextInput placeholder="senha" secureTextEntry={true}
                                onChangeText={(i) => handleChange({ password: i })}></TextInput>
                        </FormRow>
                        <Button title="Cadastrar" onPress={handleRegister} />
                        <View>
                            <Text> Já tem uma conta?</Text>
                            <ButtonText title="Login" onPress={handleLogin} />
                        </View>
                    </Form>
                </KeyboardAvoidingView>
            </Container>
        </>
    );
}