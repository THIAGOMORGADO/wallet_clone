import React, { useEffect } from "react";
import { ActivityIndicator, Image, Text, View } from "react-native";
import {
    Poppins_300Light,
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_700Bold,
    useFonts,
} from "@expo-google-fonts/poppins";
import { DMSans_400Regular } from "@expo-google-fonts/dm-sans";
import { DMSerifDisplay_400Regular_Italic } from "@expo-google-fonts/dm-serif-display";
import { ThemeProvider } from 'styled-components/native'

import * as SplashScreen from "expo-splash-screen";
import theme from "./styles/theme";



SplashScreen.preventAutoHideAsync();

export default function App() {
    const [fontsloaded] = useFonts({
        Poppins_300Light,
        Poppins_400Regular,
        Poppins_500Medium,
        Poppins_700Bold,
        DMSans_400Regular,
        DMSerifDisplay_400Regular_Italic,
    })

    useEffect(() => {
        SplashScreen.hideAsync();
    }, [fontsloaded])

    if(!fontsloaded) {
        return null; // or some other loading indicator
    }


    return (
        <ThemeProvider theme={theme}>
            <View style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flex: 1,
            backgroundColor: theme.COLORS.BACKGROUND,
        }}>
            <Text style={{
                fontFamily: theme.FONTS.POPPINSBOLD,
                fontSize: 32,
            }}>Hello, World!</Text>
        </View>
        </ThemeProvider>
        
    );
}
