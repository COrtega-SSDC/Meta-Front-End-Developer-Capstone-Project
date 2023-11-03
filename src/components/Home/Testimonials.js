import { Box, Flex, HStack, VStack } from '@chakra-ui/react'

function Testimonials() {

    return (
        <Flex bg="#EDEFEE" height="590px" justifyContent="center">
            <VStack spacing="77px">
                <Box as='h1' style={{color: 'black', paddingTop: '80px'}}>Testimonials</Box>
                <HStack spacing="20px">
                    <Box width="200px" height="175px" bg="#FFFFFF">

                    </Box>
                    <Box width="200px" height="175px" bg="#FFFFFF">

                    </Box>
                    <Box width="200px" height="175px" bg="#FFFFFF">

                    </Box>
                    <Box width="200px" height="175px" bg="#FFFFFF">

                    </Box>
                </HStack>
            </VStack>


        </Flex>
    );

}

export default Testimonials;