import React from "react"
import { StatusBar } from "expo-status-bar";
import {Stylesheet,Image,Text,View} from "react-native";

const LoginScreen=()=>{
    return (
        <View classname="bg-gray-50 dark:bg-gray-900">
            <View classname="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-8">
                <Text className="text-center mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">Login</Text>

            </View>
        </View>
    )
};

export default LoginScreen

 