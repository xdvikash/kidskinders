import { Button, Image, Grid, GridItem, Text, Stack } from "@chakra-ui/react";
import React from "react";
import kids from '../assets/img/kidsimg.png'; 

const LearningMore = () => {
  return (
    <Stack>
    <Grid
      templateColumns={{ base: "1fr", md: "2fr 1fr" }}
      bgColor="#17a2b8"
      width="100%"
      height="80vh"
      p={10}
      gap={6}
      alignItems="center"
      direction={["column", "row"]}
    >
      <GridItem display="flex" flexDirection="column" justifyContent="center" p={10}>
        <Text fontSize="2xl" color="white" mb={4}>
          Kids Learning Center
        </Text>
        <Text fontSize="4xl" color="white" mb={4}>
          New Approach to Kids Education
        </Text>
        <Text fontSize="lg" color="white" mb={6}>
          Sea ipsum kasd eirmod kasd magna, est sea et diam ipsum est amet sed
          sit. Ipsum dolor no justo dolor et, lorem ut dolor erat dolore sed
          ipsum at ipsum nonumy amet. Clita lorem dolore sed stet et est justo
          dolore.
        </Text>
        <Button
          colorScheme="teal"
          variant="solid"
          width="100px"
          height="40px"
          bgColor="#00394f"
        >
          Learn More
        </Button>
      </GridItem>
      <GridItem display="flex" justifyContent="center" alignItems="center">
        <Image src={kids} alt="img" width={{ base: "300px", md: "450px" }} height="auto" />
      </GridItem>
    </Grid>
    </Stack>
  );
};

export default LearningMore;
