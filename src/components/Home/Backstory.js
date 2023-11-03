import { Flex, VStack, Box, HStack } from '@chakra-ui/react'

import brothers from '../../images/Mario and Adrian A.jpg'
import saltBae from '../../images/restaurant chef B.jpg'

function Backstory() {

    return (
        <Flex bg="#495E57" height="578px">
            <HStack>
                <VStack spacing={0}>
                    <Box as='h1' >Little Lemon</Box>
                    <Box as='h2' >Chicago</Box>
                    <Box width="370px" height="322px">
                        <Box as='h4' >
                            Brothers Mario and Adrian have poured their hearts into Little Lemon, blending cherished family recipes with contemporary culinary techniques.
                        </Box>
                        <Box as='h4' >
                            Every dish tells a story of Mediterranean heritage, passed down through generations and brought to life in Chicago.
                        </Box>
                        <Box as='h4' >
                            Join us for a dining experience that feels like home, where every meal is a celebration of family, tradition, and innovation.
                        </Box>
                    </Box>
                </VStack>
                <Box as='img'
                    src={brothers}
                    width="276px"
                    height="338px"
                    objectFit="cover"
                    objectPosition="center"
                    style={{ margin: '97px 279px 143px 889px' }}
                />
                <Box as='img'
                    src={saltBae}
                    width="276px"
                    height="338px"
                    objectFit="cover"
                    objectPosition="center"
                    style={{ margin: '204px 450px 36px 714px' }}
                />
            </HStack>


        </Flex>
    );

}

export default Backstory;