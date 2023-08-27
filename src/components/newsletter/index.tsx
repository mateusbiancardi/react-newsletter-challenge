'use client'

import {Flex, Text, Image, Box, Heading, Button, FormControl, FormLabel, Input} from "@chakra-ui/react";
import desktopImage from '../../../assets/images/illustration-sign-up-desktop.svg'
import mobileImage from '../../../assets/images/illustration-sign-up-mobile.svg'
import iconList from '../../../assets/images/icon-list.svg'
import '@fontsource/roboto'
import { useState, useEffect } from "react";
import { confirmation } from "@/app/store";


export default function Home() {
  const [valid, setValid] = useState<boolean>(true);
  const [invalid, setInvalid] = useState<boolean>(false);
  const isConfirmed = confirmation.useState(state => state.emailConfirmation)
  const email: string = confirmation.useState(state => state.email)

  const [emailConfirmed, setEmailConfirmed] = useState<string>('none');

  useEffect (() => {
    if (isConfirmed) {
      setEmailConfirmed('none');
    }
    else {
      setEmailConfirmed('flex');
    }
    }, [isConfirmed]);

  const handleEmail = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const getEmail = event.target.value

    confirmation.update(s => {
      s.email = getEmail;
    })
  };

  const handleClick = () => {
    if (!valid) {
      confirmation.update(s => {
        s.emailConfirmation = false;
      })

      setInvalid(true);
    }
    else {
      confirmation.update(s => {
        s.emailConfirmation = true;
      })

      setInvalid(false);
    }

  };

  useEffect(() => {
    if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)) {
      setValid(false);
    }
    else {
      setValid(true)
    }
  }, [email]);

  
  return (
    <Flex 
      minH="100vh" 
      justifyContent="center" 
      alignItems="center" 
      bgColor='#36384e'
      display={emailConfirmed}
    >
      <Flex 
        gap="6" 
        bgColor="white" 
        borderRadius={25} 
        justifyContent="space-evenly"
        flexDirection={{base: "column", md: "row"}}
      >
        <Image src={mobileImage.src} alt='mobileImage' display={{base: "block", md: "none"}} />
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
            <FormLabel display='flex' justifyContent="space-between" fontWeight={700} fontSize='x-small'><Text>Email address</Text><Text display={ invalid ? '-moz-initial' : 'none'} color='red'>Valid email required</Text></FormLabel>
            <Input borderColor={ invalid ? 'red' : 'gray'} focusBorderColor={ invalid ? 'gray' : 'red'} bgColor={ invalid ? 'red.100' : '-moz-initial'} marginBottom="1rem" size="md" placeholder='email@company.com' onChange={handleEmail}/>
            <Button _hover={{ bgColor: "#ff6257" }} w="100%" fontWeight={500} textColor="white" bgColor="#242742" onClick={handleClick}>Subscribe to monthly newsletter</Button>
          </FormControl>

        </Box>
        <Image margin={6} justifySelf="center" w="20rem" src={desktopImage.src} alt='DesktopImage' hideBelow="md" />
      </Flex>
    </Flex>
  )
}