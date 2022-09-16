import React from "react";
import tw from "twrnc";
import { Button, View } from "native-base";

export const NavigationBar = (): JSX.Element => {
  return (
    <View style={tw`flex-row justify-between w-full`}>
      <Button style={tw`w-1/4`} onPress={() => console.log("home")}>
        Home
      </Button>
      <Button style={tw`w-1/4`} onPress={() => console.log("home")}>
        Home
      </Button>
      <Button
        style={tw`w-1/4 rounded-full`}
        onPress={() => console.log("home")}
      >
        Home
      </Button>
    </View>
  );
};
