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
import { Alert, SafeAreaView, Text } from "react-native";
import { ButtonSocialGoogle } from "@src/components/ButtonSocialGoogle";
import { ButtonSocial } from "@src/components/ButtonSocialFace";

export default function Login() {
    return (
        <Container>
            <SafeAreaView>
                <ContentHeader>
                    <Title>Seja Bem Vindo(a) {"\n"} a App de Cateira</Title>
                    <Description>Entra com rede sociais</Description>
                    <ViewButton>
                        <ButtonSocialGoogle title="Google" />
                        <ButtonSocial title="Facebook" icon="facebook-f" />
                    </ViewButton>
                </ContentHeader>

                <ContentBody></ContentBody>

                <ContentFooter></ContentFooter>
            </SafeAreaView>
        </Container>
    );
}

export { Login };
