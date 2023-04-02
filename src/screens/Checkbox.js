import React from "react";
import { Checkbox, Heading, HStack, VStack, Text, Box, Center, NativeBaseProvider } from "native-base";

const Example = () => {
  const [groupValue, setGroupValue] = React.useState([]);
  return <Box alignItems="center">
      <VStack space={2}>
        <HStack alignItems="baseline">
          <Heading fontSize="lg">Names Team 7:</Heading>
        </HStack>
        <VStack>
          <Box>
            <Text>Selected: ({groupValue.length})</Text>
          </Box>
        </VStack>
        <Checkbox.Group colorScheme="green" defaultValue={groupValue} accessibilityLabel="pick an item" onChange={values => {
        setGroupValue(values || []);
      }}>
          <Checkbox value="Emiliano" my="1">
          Emiliano
          </Checkbox>
          <Checkbox value="Jesús" my="1">
          Jesús
          </Checkbox>
          <Checkbox value="Abraham" my="1">
          Abraham
          </Checkbox>
          <Checkbox value="Sofia" my="1">
          Sofia
          </Checkbox>
        </Checkbox.Group>
      </VStack>
    </Box>;
};

    export default Example;