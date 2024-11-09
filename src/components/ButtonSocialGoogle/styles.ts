import styled from "styled-components/native";

import { RFValue } from "react-native-responsive-fontsize";
import theme from "@src/styles/theme";

export const Container = styled.Pressable`
    width: ${RFValue(130)}px;
    height: ${RFValue(60)}px;
    border-radius: ${RFValue(5)}px;
    align-items: center;
    justify-content: center;
    flex-direction: row;
    margin-bottom: ${RFValue(6)}px;
    box-shadow: 1px 3px 3px rgba(0, 0, 0, 0.2);

    background-color: ${theme.COLORS.GRAY4};
`;