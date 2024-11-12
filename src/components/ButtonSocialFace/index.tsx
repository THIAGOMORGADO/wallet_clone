import React from "react";

import { Container, Title, FaceboookIcon } from "./styles";
import { FontAwesome6 } from "@expo/vector-icons";
import type { TouchableOpacityProps } from "react-native-gesture-handler";

interface ButtonSocialProps extends TouchableOpacityProps {
    title: string;
    icon: keyof typeof FontAwesome6.glyphMap;
}

const ButtonSocial: React.FC<ButtonSocialProps> = ({
    title,
    icon,
    ...rest
}) => {
    return (
        <Container {...rest}>
            <FaceboookIcon name={icon} />
            <Title>{title}</Title>
        </Container>
    );
};

export { ButtonSocial };
