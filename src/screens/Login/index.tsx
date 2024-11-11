import React from "react";

import {
    Container,
    Title,
    Description,
    ViewButton,
    ContentHeader,
    ContentBody,
    ContentFooter,
} from "./styles";
import { SafeAreaView, Text } from "react-native";
import { ButtonSocialGoogle } from "@src/components/ButtonSocialGoogle";

export default function Login() {
    return (
        <Container>
            <SafeAreaView>
                <ContentHeader>
                    <Title>Seja Bem Vindo(a) {"\n"} a App de Cateira</Title>
                    <Description>Entra com rede sociais</Description>
                    <ViewButton>
                        <ButtonSocialGoogle title="Google" />
                    </ViewButton>
                </ContentHeader>

                <ContentBody></ContentBody>

                <ContentFooter></ContentFooter>
            </SafeAreaView>
        </Container>
    );
}

export { Login };
