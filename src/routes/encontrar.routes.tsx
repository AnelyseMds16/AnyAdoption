import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { Gatos, Cachorros, Encontrar, Coelhos } from "../pages";

const Stack = createStackNavigator();

export default function EncontrarRoute() {
    return (
        <Stack.Navigator headerMode="none">
            <Stack.Screen name="Encontrar" component={Encontrar} />
            <Stack.Screen name="Gatos" component={Gatos} />
            <Stack.Screen name="Cachorros" component={Cachorros} />
            <Stack.Screen name="Coelhos" component={Coelhos} />
        </Stack.Navigator>
    );
}