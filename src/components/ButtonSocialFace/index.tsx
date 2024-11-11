import React from "react";

import { Container, Title } from "./styles";
import { Feather } from "@expo/vector-icons";
import type { TouchableOpacityProps } from "react-native-gesture-handler";

interface ButtonSocialFacebookProps extends TouchableOpacityProps {
    title: string;
    icon: keyof typeof Feather.glyphMap;
}

const FacebookButton: React.FC<ButtonSocialFacebookProps> = ({
    title,
    icon,
    ...rest
}) => {
    return (
        <Container {...rest}>
            <Feather name={icon} size={24} color="white" />
            <Title>{title}</Title>
        </Container>
    );
};

export { FacebookButton };
