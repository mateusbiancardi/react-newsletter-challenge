import { Flex, Heading, Image, Box, Text, Button } from "@chakra-ui/react";
import iconSuccessImage from '../../../assets/images/icon-success.svg'
import '@fontsource/roboto'
import { confirmation } from "@/app/store";
import { useEffect, useState } from "react";

export default function Confirmation () {
  const isConfirmed = confirmation.useState(state => state.emailConfirmation);
  const email = confirmation.useState(state => state.email);
  const [emailConfirmed, setEmailConfirmed] = useState<string>('none');

  useEffect (() => {
    if (isConfirmed) {
      setEmailConfirmed('flex');
    }
    else {
      setEmailConfirmed('none');
    }
  }, [isConfirmed]);

  const handleClick = () => {
    confirmation.update(s => {
      s.emailConfirmation = false;
      s.email = '';
    })
  }

  return (
    <Flex
      minH="100vh" 
      justifyContent="center" 
      alignItems="center" 
      bgColor='#36384e'
      display={emailConfirmed}
    >
      <Box
        w="30rem"
        bgColor="white" 
        borderRadius={25}
        p={12}
      >
        <Image src={iconSuccessImage.src} alt='iconSuccessImage' h={14}/>
        <Heading marginTop="2rem" marginBottom="0.5rem" fontWeight={700} fontSize="5xl">Thanks for subscribing!</Heading>
        <Text fontWeight="medium" marginBottom="1.5rem" fontSize='sm'>A confirmation email has been sent to <strong>{email}</strong>. Please open it and click the button inside to confirm your subscription.</Text>
        <Button onClick={handleClick} _hover={{ bgColor: "#ff6257" }} w="100%" fontWeight="medium"textColor="white" bgColor="#242742">Dismiss message</Button>
      </Box>
    </Flex>
  )
}