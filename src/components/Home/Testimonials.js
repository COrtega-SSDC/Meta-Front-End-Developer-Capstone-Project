import { Box, Flex, HStack, Heading, VStack } from '@chakra-ui/react'

function Testimonials() {


    const head = {
        fontFamily: 'Markazi Text',
        fontSize: 64,
        fontWeight: 400,
        wordWrap: 'break-word'
    }
    return (
        <Flex bg="#EDEFEE" height="590px" justifyContent="center">
            <VStack spacing="77px">
                <Heading style={head} paddingTop="80px">
                    Testimonials
                </Heading>
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