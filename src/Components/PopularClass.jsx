import { Box, Heading, Image, Stack, Text, Wrap, WrapItem } from '@chakra-ui/react';
import React from 'react';
import Class1 from '../assets/img/class-1.png';
import Class2 from '../assets/img/class-2.png';
import Class3 from '../assets/img/class-3.png';

const PopularClass = () => {
  const Feature = ({ imageSrc, title, desc }) => (
    <Box p={5} width="438px" shadow="md" borderWidth="1px" borderRadius="md">
      <Box mb={4}>
        <Image src={imageSrc} alt="class image" />
      </Box>
      <Heading fontSize="xl" mb={2}>{title}</Heading>
      <Text>{desc}</Text>
    </Box>
  );

  return (
    <Stack>
        <Text textAlign="Center" fontSize="20px">POPULAR CLASSES
        </Text>
        <Stack>
            <Text textAlign="Center" fontSize="50px">Classes for Your Kids</Text>
        </Stack>
    <Wrap spacing="30px" justify="center" p={8}>
      <WrapItem>
        <Feature
          imageSrc={Class1}
          title="Drawing Class"
          desc="Justo ea diam stet diam ipsum no sit, ipsum vero et et diam ipsum duo et no et, ipsum ipsum erat duo amet clita duo"
        />
      </WrapItem>
      <WrapItem>
        <Feature
          imageSrc={Class2}
          title="Language Learning"
          desc="Justo ea diam stet diam ipsum no sit, ipsum vero et et diam ipsum duo et no et, ipsum ipsum erat duo amet clita duo"
        />
      </WrapItem>
      
      <WrapItem>
        <Feature
          imageSrc={Class3}
          title="Basic Science"
          desc="Justo ea diam stet diam ipsum no sit, ipsum vero et et diam ipsum duo et no et, ipsum ipsum erat duo amet clita duo"
        />
      </WrapItem>
    </Wrap>
    </Stack>
  );
};

export default PopularClass;
