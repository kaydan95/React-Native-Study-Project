import { View, Text, Image, Pressable } from "react-native";
import React, { useState } from "react";
import { HeartIcon as HeartIconOutline } from "react-native-heroicons/outline";
import { HeartIcon as HeartIconSolid } from "react-native-heroicons/solid";

const MainCategoryItemCard = ({ itemImg, itemTitle, itemBrand }) => {
  const [isPressed, setPressed] = useState(false);

  const Pressed = () => {
    setPressed((current) => !current);
  };

  return (
    <View className="flex-row mx-3 space-x-3 items-center">
      <Image
        source={{ uri: itemImg }}
        resizeMode="cover"
        className="w-20 h-20"
      />
      <View className="ml-3 flex-1 border-r-[0.2px]">
        <Text className="font-bold text-lg">{itemTitle}</Text>
        <Text className="font-semibold text-base">{itemBrand}</Text>
        <Text className="pt-1 text-base">$ 4.99</Text>
      </View>
      <Pressable onPressIn={Pressed}>
        {isPressed ? (
          <HeartIconSolid
            size={25}
            color="#464E2E"
            style={{ marginHorizontal: 3 }}
          />
        ) : (
          <HeartIconOutline
            size={25}
            color="#464E2E"
            style={{ marginHorizontal: 3 }}
          />
        )}
      </Pressable>
    </View>
  );
};

export default MainCategoryItemCard;
