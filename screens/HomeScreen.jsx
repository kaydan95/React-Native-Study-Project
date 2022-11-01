import { View, Text, SafeAreaView, Image } from 'react-native'
import React, {useLayoutEffect} from 'react'
import { useNavigation } from '@react-navigation/native'
import { UserIcon, ChevronDownIcon, AdjustmentsVerticalIcon } from "react-native-heroicons/outline";


const HomeScreen = () => {

    const navigation = useNavigation();

    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown : false,
        });
    }, []);


    return (
        <SafeAreaView className='bg-white pt-5'>
            {/* header */}
            <View className='flex-row pb-3 items-center mx-4 space-x-2'>
                <Image source={{
                    uri : 'https://links.papareact.com/wru',
                }}
                className='h-8 w-8 p-4 rounded-full '/>
                
                
                <View className='w-fit flex-col flex-1 justify-center'>
                    <Text className='text-xs text-gray-400 font-bold'>Deliever now!</Text>
                    <Text className='text-xl font-bold'>
                        Current Location
                        <ChevronDownIcon size={22} color="#00CCBB"/>
                    </Text>
                </View>
                <UserIcon size={33} color="#00CCBB"/>
            </View>
        </SafeAreaView>
    )
}

export default HomeScreen