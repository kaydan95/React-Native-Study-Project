import { View, Text, SafeAreaView, Image, TextInput, ScrollView } from 'react-native'
import React, {useLayoutEffect} from 'react'
import { useNavigation } from '@react-navigation/native'
import { UserIcon, ChevronDownIcon, AdjustmentsVerticalIcon, MagnifyingGlassIcon, AdjustmentsHorizontalIcon } from "react-native-heroicons/outline";
import TopBrandSection from '../components/TopBrandSection';


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
                        <ChevronDownIcon size={22} color="#464E2E"/>
                    </Text>
                </View>
                <UserIcon size={33} color="#464E2E"/>
            </View>

            {/* search section */}
            <View className='flex-row items-center space-x-2 px-3 pb-3'>
                <View className='flex-row flex-1 bg-[#F3F3F3] space-x-2 p-2 rounded-lg'>
                    <MagnifyingGlassIcon size={22} color="#464E2E" />
                    <TextInput className='text-[#464E2E]' placeholder='Keep our planet' keyboardType='default'/>
                </View>
                <AdjustmentsHorizontalIcon size={22} color="#464E2E"/>
            </View>

            {/* body */}
            <ScrollView>
                <TopBrandSection className='absolute'/>
            </ScrollView>
        </SafeAreaView>
    )
}

export default HomeScreen