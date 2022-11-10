import { Text, View } from "react-native";
import React from "react";
import MainCategoryCard from "./MainCategoryCard";

const MainCategorySection = () => {
  return (
    <>
      <Text className="mt-5 px-3 font-extrabold text-2xl uppercase">
        we are
      </Text>
      <View className="mt-2 flex-col items-center w-full">
        <MainCategoryCard
          title="fully biodegradable"
          itemImgUrl="https://images.unsplash.com/photo-1607292819104-c54624be6bc2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
          itemTitle="Oat Drink"
          itemBrand="Oatly"
          imgUrl="https://images.unsplash.com/photo-1611744669444-5edf2ce1dd56?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
        />
        <MainCategoryCard
          title="eco friendly"
          itemImgUrl="https://images.unsplash.com/photo-1607292819104-c54624be6bc2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
          itemTitle="Oat Drink"
          itemBrand="Oatly"
          imgUrl="https://images.unsplash.com/photo-1615290144628-8fa0f0d61658?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80"
        />
        <MainCategoryCard
          title="a doer, not a talker"
          itemImgUrl="https://images.unsplash.com/photo-1607292819104-c54624be6bc2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
          itemTitle="Oat Drink"
          itemBrand="Oatly"
          imgUrl="https://images.unsplash.com/photo-1617953141905-b27fb1f17d88?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2787&q=80"
        />
      </View>
    </>
  );
};

export default MainCategorySection;
