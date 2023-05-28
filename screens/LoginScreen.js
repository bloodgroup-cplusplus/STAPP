import React from "react"
import { useState } from "react";
import { StatusBar } from "expo-status-bar";
import {Text,View,TextInput,Button,Linking,} from "react-native";
let isPending=true;
let error=false;

const LoginScreen=()=>{
    const[email,setEmail] = useState("")
    const[password,setPassword] = useState("")

    const handleSubmit=(e)=>{
        e.preventDefault()

    }

    return (

        <View className="bg-gray-50 dark:bg-gray-900">
        <View className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
            <Text className="text-center mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">Login</Text>
           
            <View className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                <View className="p-6 space-y-4 md:space-y-6 sm:p-8">
                    <Text className=" align-center text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                        Sign in to your account
                    </Text>
                    <View className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
                        <View>
                            <Text for="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</Text>
                            <TextInput type="email" name="email" id="email" value={email} onChange={(e)=>setEmail(e.target.value)} className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-black dark:focus:border-black" placeholder="name@company.com" required=""/>
                        </View>
                        <View>
                            <Text for="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</Text>
                            <TextInput secureTextEntry={true} type="password" name="password" id="password" value={password} onChange={(e)=>setPassword(e.target.value)} placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-black dark:focus:border-black" required=""/>
                        </View>
                        <View className="flex items-center justify-between">
                            <View className="flex items-start">
                                <View className="flex items-center h-5">
                                  <TextInput id="remember" aria-describedby="remember" type="checkbox" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800" required=""/>
                                </View>
                                <View className="ml-3 text-sm">
                                  <Text for="remember" className="text-gray-500 dark:text-gray-300">Remember me</Text>
                                </View>
                            </View>
                        </View>
                        <Button title="Login"  className="w-full text-white bg-black hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"/>
                    </View>
                </View>
            </View>
        </View>
      </View>
      
    

    )
};

export default LoginScreen

 