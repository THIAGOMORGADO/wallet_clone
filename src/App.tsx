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

import * as SplashScreen from "expo-splash-screen";

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
        <View>
            <Text>Hello, World!</Text>
        </View>
    );
}
