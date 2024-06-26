import { Box, Heading, Text, Wrap, WrapItem } from '@chakra-ui/react';
import React from 'react';

// Define the Feature component
const Feature = ({ title, desc }) => (
  <Box p={5} width="250px" shadow="md" borderWidth="1px" borderRadius="md">
    <Heading fontSize="xl">{title}</Heading>
    <Text mt={4}>{desc}</Text>
  </Box>
);

const Features = () => {
  return (
    <Wrap spacing="30px" justify="center" p={8}>
      <WrapItem>
        <Feature
          title="Play Ground"
          desc="Kasd labore kasd et dolor est rebum dolor ut, clita dolor vero lorem amet elitr vero..."
        />
      </WrapItem>
      <WrapItem>
        <Feature
          title="Music and Dance"
          desc="Kasd labore kasd et dolor est rebum dolor ut, clita dolor vero lorem amet elitr vero..."
        />
      </WrapItem>
      <WrapItem>
        <Feature
          title="Arts and Crafts"
          desc="Kasd labore kasd et dolor est rebum dolor ut, clita dolor vero lorem amet elitr vero..."
        />
      </WrapItem>
      <WrapItem>
        <Feature
          title="Safe Transportation"
          desc="Kasd labore kasd et dolor est rebum dolor ut, clita dolor vero lorem amet elitr vero..."
        />
      </WrapItem>
      <WrapItem>
        <Feature
          title="Healthy Food"
          desc="Kasd labore kasd et dolor est rebum dolor ut, clita dolor vero lorem amet elitr vero..."
        />
      </WrapItem>
    </Wrap>
  );
};

export default Features;
