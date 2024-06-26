import {
    Box,
    Button,
    Heading,
    Image,
    Stack,
    Text,
    Wrap,
    WrapItem,
  } from "@chakra-ui/react";
  import React from "react";
  import blog1 from "../assets/img/blog-1.jpg";
  import blog2 from "../assets/img/blog-2.jpg";
  import blog3 from "../assets/img/blog-3.jpg";
  
  const Articles = () => {
    const Feature = ({ imageSrc, title, desc }) => (
      <Box p={5} width="350px" shadow="md" borderWidth="1px" borderRadius="md">
        <Box mb={4}>
          <Image src={imageSrc} alt="class image" />
        </Box>
        <Heading fontSize="xl" mb={2}>
          {title}
        </Heading>
        <Text mb={4}>{desc}</Text>
        <Button bgColor="#00394f" color="white" width="100%">Read More</Button>
      </Box>
    );
  
    return (
      <Stack>
        <Text textAlign="center" fontSize="20px">
          LATEST BLOG
        </Text>
        <Stack>
          <Text textAlign="center" fontSize="50px">
            Latest Articles From Blog
          </Text>
        </Stack>
        <Wrap spacing="30px" justify="center" p={8}>
          <WrapItem>
            <Feature
              imageSrc={blog1}
              title="Diam amet eos at no eos"
              desc="Justo ea diam stet diam ipsum no sit, ipsum vero et et diam ipsum duo et no et, ipsum ipsum erat duo amet clita duo"
            />
          </WrapItem>
          <WrapItem>
            <Feature
              imageSrc={blog2}
              title="Diam amet eos at no eos"
              desc="Justo ea diam stet diam ipsum no sit, ipsum vero et et diam ipsum duo et no et, ipsum ipsum erat duo amet clita duo"
            />
          </WrapItem>
          <WrapItem>
            <Feature
              imageSrc={blog3}
              title="Diam amet eos at no eos"
              desc="Justo ea diam stet diam ipsum no sit, ipsum vero et et diam ipsum duo et no et, ipsum ipsum erat duo amet clita duo"
            />
          </WrapItem>
        </Wrap>
      </Stack>
    );
  };
  
  export default Articles;
  