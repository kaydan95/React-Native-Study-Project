import { View, Text, Image } from "react-native";
import React from "react";
import MainCategoryItemCard from "./MainCategoryItemCard";

const MainCategoryCard = ({
  imgUrl,
  title,
  itemImgUrl,
  itemTitle,
  itemBrand,
}) => {
  return (
    <View className="w-full px-3 mt-1 mb-6">
      <Image
        source={{ uri: imgUrl }}
        resizeMode="cover"
        className="w-full h-80 rounded-lg opacity-80"
      />
      <View className="pt-3">
        <Text className="font-extrabold text-2xl text-right uppercase">
          {title}
        </Text>
        <Text className="font-light">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore quos,
          perspiciatis asperiores eaque repellendus recusandae suscipit incidunt
          totam reprehenderit sed ipsam, delectus est, nulla perferendis aut?
          Illum ad consequuntur labore?
        </Text>
      </View>
      {/* main item section */}
      <View className="py-3 mt-5 border-t-[0.2px] border-b-[0.2px]">
        <MainCategoryItemCard
          itemImg={itemImgUrl}
          itemTitle={itemTitle}
          itemBrand={itemBrand}
        />
      </View>
    </View>
  );
};

export default MainCategoryCard;
