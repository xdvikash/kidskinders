import React from "react";
import { Button, Stack, Text } from "@chakra-ui/react";

const Header = () => {
  return (
    <Stack
      direction={["column", "row", "row"]}
      justifyContent="space-between"
      alignItems="center"
      spacing="24px"
      width="100%"
      p="4"
      top="0"
      left="0"
      right="0"
      px="100px"
    >
      <Text>KidKinder</Text>
      <Stack direction="row" spacing="24px" justifyContent="center">
        <Text>Home</Text>
        <Text>About</Text>
        <Text>Classes</Text>
        <Text>Teachers</Text>
        <Text>Contect-Us</Text>
      </Stack>
      <Stack direction="row" spacing="24px" justifyContent="center">
      <Button>Join Class</Button>
      </Stack>
    </Stack>
  );
};

export default Header;
