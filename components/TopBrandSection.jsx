import { ScrollView, Text } from "react-native";
import React from "react";
import TopBrandCard from "./TopBrandCard";

const TopBrandSection = () => {
  return (
    <>
      <Text className="text-2xl ml-3 mb-3 font-bold">Top brand</Text>
      <ScrollView
        contentContainerStyle={{
          paddingHorizontal: 10,
          marginBottom: 10,
        }}
        horizontal
        showsHorizontalScrollIndicator={false}
      >
        <TopBrandCard
          imgUrl="https://images.unsplash.com/photo-1647455570600-007ff5d78ba0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80"
          name="Melixir"
        />
        <TopBrandCard
          imgUrl="https://images.unsplash.com/photo-1617897903246-719242758050?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
          name="hinok"
        />
        <TopBrandCard
          imgUrl="https://images.unsplash.com/photo-1607292819104-c54624be6bc2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
          name="Oatly"
        />
        <TopBrandCard
          imgUrl="https://images.unsplash.com/photo-1625603539427-35785c450557?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=327&q=80"
          name="Huskee"
        />
        <TopBrandCard
          imgUrl="https://images.unsplash.com/photo-1584305574647-0cc949a2bb9f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60"
          name="toun28"
        />
        <TopBrandCard
          imgUrl="https://images.unsplash.com/photo-1642939447025-3122ebc15a0f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=327&q=80"
          name="Sproud"
        />
      </ScrollView>
    </>
  );
};

export default TopBrandSection;
