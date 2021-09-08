import React from "react";
import { Text, StyleSheet } from "react-native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { Inicio, Experiencias, Encontrar, Home } from "../pages";
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
            <Drawer.Screen name="Perfil" component={Inicio} />
            <Drawer.Screen name="Encontrar" component={Encontrar} />
            <Drawer.Screen name="Experiências" component={Experiencias} />
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