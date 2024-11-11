import React from "react";

import { Container, IconGoogle, Title } from "./styles";
import GoogleIcon from "../../assets/google.png";
import type { TouchableOpacityProps } from "react-native-gesture-handler";

interface ButtonSocialGoogleProps extends TouchableOpacityProps {
    title: string;
}

const ButtonSocialGoogle: React.FC<ButtonSocialGoogleProps> = ({
    title,
    ...rest
}) => {
    return (
        <Container {...rest}>
            <IconGoogle source={GoogleIcon} resizeMode="cover" />
            <Title>{title}</Title>
        </Container>
    );
};

export { ButtonSocialGoogle };
