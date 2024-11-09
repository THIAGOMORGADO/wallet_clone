import styled from "styled-components/native";
import theme from "../../styles/theme";
import { RFValue } from "react-native-responsive-fontsize";

export const Container = styled.View`
    padding: ${RFValue(10)}px;
`;
export const Title = styled.Text`
    font-size: ${RFValue(25)}px;
    text-align: center;
    font-family: ${theme.FONTS.POPPINSMEDIUM};
    margin-top: ${RFValue(60)}px;
`;
export const Description = styled.Text`
    margin-top: ${RFValue(40)}px;
    font-size: ${RFValue(15)}px;
    font-family: ${theme.FONTS.POPPINSLIGHT};
`;

export const ViewButton = styled.View``;

export const ContentHeader = styled.View`
    padding: ${RFValue(20)}px;

    align-items: center;
    justify-content: center;
`;
export const ContentBody = styled.View``;
export const ContentFooter = styled.View``;
