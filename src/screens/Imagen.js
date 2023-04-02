import React from "react";
import { Center, Image, NativeBaseProvider } from "native-base";

function Example() {
  return <Center>
      <Image source={{
      uri: "https://media.revistagq.com/photos/5ca5fe80bda59482f933e7e8/4:3/w_1440,h_1080,c_limit/anonymous_182.jpg"
    }} alt="Alternate Text" size="xl" />
    </Center>;
}

    export default Example;