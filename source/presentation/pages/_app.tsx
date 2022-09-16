import { NativeBaseProvider } from "native-base";
import React from "react";
import { RootStack } from "./_rootStack";

const App = () => {
  return (
    <NativeBaseProvider>
      <RootStack />
    </NativeBaseProvider>
  );
};

export default App;
