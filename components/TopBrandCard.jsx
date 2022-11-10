import { View, Text, TouchableOpacity, ImageBackground } from "react-native";
import React from "react";

const TopBrandCard = ({ imgUrl, name }) => {
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      className="w-28 h-20 mr-3 mb-3 flex-row"
    >
      <ImageBackground
        source={{ uri: imgUrl }}
        resizeMode="cover"
        imageStyle={{
          borderRadius: 10,
        }}
        className="w-full h-full opacity-70 absolute"
      />
      <Text className="z-10 m-auto relative left-0 text-lg color-[#ffffffed] font-bold">
        {name}
      </Text>
    </TouchableOpacity>
  );
};

export default TopBrandCard;
