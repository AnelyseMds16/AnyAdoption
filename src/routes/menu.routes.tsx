import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { Perfil, Experiencias, Encontrar, Home } from "../pages";

const Drawer = createDrawerNavigator();

export default function App() {
    return (
        <Drawer.Navigator
            screenOptions={{
                headerShown: true,
            }}
        >
        <Drawer.Screen name="Home" component={Home} />
        <Drawer.Screen name="Perfil" component={Perfil} />
        <Drawer.Screen name="Experiências" component={Experiencias} />
        <Drawer.Screen name="Encontrar" component={Encontrar} />


        </Drawer.Navigator>
    );
}