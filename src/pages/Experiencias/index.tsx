import React from "react";

import {
    Container,
    Text,
    View,
    Image
} from "./style";


export default function Experiencias() {
    
    return (
        <Container>
            <View>
                <Image source={require("../../../assets/iconepessoa.png")}/>
                <Text>Lázaro Eduardo, 20 anos</Text>
                <Text>Varginha, MG</Text>
                
                <Text> Eu adotei pelo Any Adoption e hoje sou muito mais feliz, 
                    um companheiro deixa tudo mais leve e a vida mais linda!! 
                    Adote um pet e não tenha mais depressão!! </Text>
            </View>

            {/* <View>
                <Image source={require("../../../assets/iconepessoa.png")}/>
                <Text>Lázaro Eduardo, 20 anos</Text>
                <Text>Varginha, MG</Text>
                <Text> Eu adotei pelo Any Adoption e hoje sou muito mais feliz, 
                    um companheiro deixa tudo mais leve e a vida mais linda!! 
                    Adote um pet e não tenha mais depressão!! </Text>
            </View> */}
        </Container>
        
    );
}