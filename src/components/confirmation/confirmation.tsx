import { Flex, Heading, Image, Box, Text, Button } from "@chakra-ui/react";
import iconSuccessImage from '../../../assets/images/icon-success.svg'
import '@fontsource/roboto'

export default function Confirmation () {
  return (
    <Flex
      minH="100vh" 
      justifyContent="center" 
      alignItems="center" 
      bgColor='#36384e'
    >
      <Box
        w="30rem"
        bgColor="white" 
        borderRadius={25}
        p={12}
      >
        <Image src={iconSuccessImage.src} alt='iconSuccessImage' h={14}/>
        <Heading marginTop="2rem" marginBottom="0.5rem" fontWeight={700} fontSize="5xl">Thanks for subscribing!</Heading>
        <Text fontWeight="medium" marginBottom="1.5rem" fontSize='sm'>A confirmation email has been sent to <strong>ash@loremcompany.com</strong>. Please open it and click the button inside to confirm your subscription.</Text>
        <Button _hover={{ bgColor: "#ff6257" }} w="100%" fontWeight="medium"textColor="white" bgColor="#242742">Dismiss message</Button>
      </Box>
    </Flex>
  )
}