import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { Inicio, Experiencias, Encontrar, Home } from "../pages";
import colors from "../styles/colors";

const Drawer = createDrawerNavigator();

export default function App() {
    return (
        <Drawer.Navigator
            screenOptions={{
                headerShown: true,
                headerStyle: {backgroundColor: `${colors.roxo}`},
                headerTintColor: "white"
            }}
        >
        <Drawer.Screen name="Home" component={Home} />
        <Drawer.Screen name="Inicio" component={Inicio} />
        <Drawer.Screen name="Encontrar" component={Encontrar} />
        <Drawer.Screen name="Experiências" component={Experiencias} />
        


        </Drawer.Navigator>
    );
}