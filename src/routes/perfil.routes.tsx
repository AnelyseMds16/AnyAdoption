import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { Informacoes, Inicio } from "../pages";

const Stack = createStackNavigator();

export default function PerfilRoute() {
    return (
        <Stack.Navigator headerMode="none">
            <Stack.Screen name="Inicio" component={Inicio} />
            <Stack.Screen name="Informacoes" component={Informacoes} />

        </Stack.Navigator>
    );
}