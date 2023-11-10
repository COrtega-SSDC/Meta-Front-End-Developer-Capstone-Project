import { Flex, VStack, Box, HStack, Text } from '@chakra-ui/react'

import brothers from '../../images/Mario and Adrian A.jpg'
import saltBae from '../../images/restaurant chef B.jpg'

function Backstory() {

    return (
        <Flex bg="#495E57" height="578px" justifyContent="center">
            <HStack spacing="65px">
                <section>
                    <VStack spacing={0} align="flex-start" textAlign="left" mt="-17px">
                        <Text as='h1' >Little Lemon</Text>
                        <Text as='h2' mt="-20px" mb="11px" >Chicago</Text>
                        <Box width="370px" height="252px">
                            <Text as='h4' mb={4}>
                                Brothers Mario and Adrian have poured their hearts into Little Lemon, blending cherished family recipes with contemporary culinary techniques.
                            </Text>
                            <Text as='h4' mb={4}>
                                Every dish tells a story of Mediterranean heritage, passed down through generations and brought to life in Chicago.
                            </Text>
                            <Text as='h4'>
                                Join us for a dining experience that feels like home, where every meal is a celebration of family, tradition, and innovation.
                            </Text>
                        </Box>
                    </VStack>
                </section>

                <section>
                    <VStack >
                        <Box as='img'
                            src={brothers}
                            width="267.94px"
                            height="336px"
                            objectFit="cover"
                            objectPosition="center"
                            mb="-235px"
                            marginLeft="155px"
                            borderRadius="16px"
                            border='1px black solid'
                            zIndex="2"
                            alt='Mario and Adrian smiling and looking at each other'
                        />
                        <Box as='img'
                            src={saltBae}
                            width="271.88px"
                            height="336px"
                            objectFit="cover"
                            objectPosition="center"
                            marginLeft="-185px"
                            marginBottom="-60px"
                            borderRadius="16px"
                            border='1px black solid'
                            zIndex="1"
                            alt='Adrian sprinkilng seasoning on salad'
                        />
                    </VStack>
                </section>


            </HStack>
        </Flex>
    );

}

export default Backstory;