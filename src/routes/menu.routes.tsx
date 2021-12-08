import React from "react";
import { Text, StyleSheet } from "react-native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { Experiencias, Home, Sair } from "../pages";
import PerfilStack from "./perfil.routes";
import EncontrarStack from "./encontrar.routes";
import colors from "../styles/colors";

const Drawer = createDrawerNavigator();

export default function App() {
    return (
        <Drawer.Navigator
            screenOptions={{
                headerShown: true,
                headerStyle: { backgroundColor: `${colors.roxo}` },
                headerTintColor: "white",
                headerTitle: () => <Text style={styles.title}>não compre, adote! </Text>,
            }}
        >
            <Drawer.Screen name="Home" component={Home} />
            <Drawer.Screen name="Perfil" component={PerfilStack} />
            <Drawer.Screen name="Encontrar" component={EncontrarStack} />
            <Drawer.Screen name="Experiências" component={Experiencias} />
            <Drawer.Screen name="Sair" component={Sair} />
        </Drawer.Navigator>
    );
}

const styles = StyleSheet.create({
    title: {
        color: colors.white,
        fontWeight: "bold",
        fontSize: 18,
    },
});