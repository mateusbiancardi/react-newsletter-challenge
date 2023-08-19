'use client'

import {Flex, Text, Image, Box, Heading, Button, Container, FormControl, FormLabel, Input} from "@chakra-ui/react";
import desktopImage from '../../assets/images/illustration-sign-up-desktop.svg'
import iconList from '../../assets/images/icon-list.svg'
import '@fontsource/roboto/100.css';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import '@fontsource/roboto/900.css';


export default function Home() {
  return (
    <Flex 
      h="100vh" 
      justifyContent="center" 
      alignItems="center" 
      bgColor='#36384e'
    >
      <Flex 
        gap="6" 
        bgColor="white" 
        borderRadius={25} 
        justifyContent="space-evenly"
      >
        <Box margin={12} w="20rem" alignSelf="center">
          <Heading marginBottom="0.5rem" fontWeight={700} fontSize="5xl">Stay updated!</Heading>
          <Text marginBottom="1.5rem" fontSize='sm'>Join 60,000+ product managers receiving monthly updates on:</Text>

          <Flex marginBottom="0.5rem" gap={4}>
            <Image src={iconList.src} alt="iconList" />
            <Text fontSize='sm'>Product discovery and building what matters</Text>
          </Flex>

          <Flex marginBottom="0.5rem" gap={4}>
            <Image src={iconList.src} alt="iconList" />
            <Text fontSize='sm'>Measuring to ensure updates are a success</Text>
          </Flex>

          <Flex marginBottom="1.5rem" gap={4}>
            <Image src={iconList.src} alt="iconList" />
            <Text fontSize='sm'>And much more!</Text>
          </Flex>

          <FormControl>
            <FormLabel fontWeight={700} fontSize='x-small'>Email address</FormLabel>
            <Input marginBottom="1rem" focusBorderColor="gray" size="md" placeholder='email@company.com' />
            <Button _hover={{ bgColor: "#ff6257" }} w="100%" fontWeight={500} textColor="white" bgColor="#242742">Subscribe to monthly newsletter</Button>
          </FormControl>

        </Box>
        <Image margin={6} justifySelf="center" w="20rem" src={desktopImage.src} alt='DesktopImage'/>
      </Flex>
    </Flex>
  )
}
