import React from 'react'
import LearningMore from './LearningMore'
import Features from './Features'
import { Box } from '@chakra-ui/react'
import PopularClass from './PopularClass'
import OurTeacher from './OurTeacher'
import Articles from './Articles'
import Footer from './Footer'

const Home = () => {
  return (
    <Box position="relative" boxSize="sm" width="100%" direction={["column","column", "row"]}>
    <LearningMore/>
    <Features/>
    <PopularClass/>
    <OurTeacher/>
    <Articles/>
    <Footer/>
    </Box>
  )
}

export default Home