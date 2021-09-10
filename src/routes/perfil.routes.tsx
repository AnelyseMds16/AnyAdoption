import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { Informacoes, Inicio, Favoritos, MeusAnimais } from "../pages";

const Stack = createStackNavigator();

export default function PerfilRoute() {
    return (
        <Stack.Navigator headerMode="none">
            <Stack.Screen name="Inicio" component={Inicio} />
            <Stack.Screen name="Informacoes" component={Informacoes} />
            <Stack.Screen name="Favoritos" component={Favoritos} />
            <Stack.Screen name="Meus Animais" component={MeusAnimais} />
        </Stack.Navigator>
    );
}