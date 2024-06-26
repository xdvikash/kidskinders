import { Box, Heading, Image, Stack, Text, Wrap, WrapItem } from "@chakra-ui/react";
import React from "react";
import teacher1 from "../assets/teacher/team-1.jpg";
import teacher2 from "../assets/teacher/team-2.jpg";
import teacher3 from "../assets/teacher/team-3.jpg";
import teacher4 from "../assets/teacher/team-4.jpg";

const OurTeacher = () => {
  const Feature = ({ imageSrc, title, desc }) => (
    
    <Box p={5} width="338px" shadow="md" borderWidth="1px"  borderRadius="md">
      <Box mb={4} display="flex" justifyContent="center">
        <Image
          src={imageSrc}
          alt="class image"
          borderRadius="full"
          boxSize="250px" // Adjust the size as needed
        />
      </Box>
      <Heading textAlign="center" fontSize="xl" mb={2}>
        {title}
      </Heading >
      <Text textAlign="center">{desc}</Text>
    </Box>
  );

  return (
    <Stack>
        <Text textAlign="Center" fontSize="20px">OUR TEACHERS</Text>
        <Stack>
            <Text textAlign="Center" fontSize="50px">Meet Our Teachers</Text>
        </Stack>
    <Wrap spacing="30px" justify="center"  p={8}>
      <WrapItem>
        <Feature imageSrc={teacher1} title="Julia Smith" desc="Music Teacher" />
      </WrapItem>
      <WrapItem>
        <Feature imageSrc={teacher2} title="Jhon Doe" desc="Language Teacher" />
      </WrapItem>

      <WrapItem>
        <Feature imageSrc={teacher3} title="Mollie Ross" desc="Dance Teacher" />
      </WrapItem>
      <WrapItem>
        <Feature imageSrc={teacher4} title="Donald John" desc="Art Teacher" />
      </WrapItem>
    </Wrap>
    </Stack>
  );
};

export default OurTeacher;
