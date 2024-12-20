import { FontAwesome6 } from "@expo/vector-icons";
import styled from "styled-components/native";

import { RFValue } from "react-native-responsive-fontsize";
import theme from "@src/styles/theme";

export const Container = styled.TouchableOpacity`
    width: ${RFValue(130)}px;
    height: ${RFValue(60)}px;
    border-radius: ${RFValue(5)}px;
    align-items: center;
    justify-content: center;
    flex-direction: row;
    margin-bottom: ${RFValue(16)}px;
    box-shadow: 1px 3px 3px rgba(0, 0, 0, 0.2);

    background-color: ${theme.COLORS.BLUE};
`;
export const FaceboookIcon = styled(FontAwesome6)`
    font-size: ${RFValue(25)}px;
    color: ${theme.COLORS.WHITE};
`;

export const Title = styled.Text`
    font-size: ${RFValue(17)}px;
    font-family: ${theme.FONTS.POPPINSLIGHT};
    margin-left: ${RFValue(10)}px;
    color: ${theme.COLORS.WHITE};
`;
