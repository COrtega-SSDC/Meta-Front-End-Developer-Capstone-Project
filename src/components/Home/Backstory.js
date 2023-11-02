import { Flex, Heading, VStack, Text, Box, HStack } from '@chakra-ui/react'

import brothers from '../../images/Mario and Adrian A.jpg'
import saltBae from '../../images/restaurant chef B.jpg'

function Backstory() {

    const littlelemon = {
        color: '#F4CE14',
        fontFamily: 'Markazi Text',
        fontSize: 64,
        fontWeight: 500,
        wordWrap: 'break-word'
    }

    const chicago = {
        color: '#EDEFEE',
        fontFamily: 'Markazi Text',
        fontSize: 40,
        fontWeight: 400,
        wordWrap: 'break-word'
    }

    const storyText = {
        color: "#EDEFEE",
        fontFamily: 'Karla',
        fontSize: 18,
        fontWeight: 500,
        wordWrap: 'break-word'
    }

    return (
        <Flex bg="#495E57" height="578px">
            <HStack>
                <VStack spacing={0}>
                    <Heading style={littlelemon}>
                        Little Lemon
                    </Heading>
                    <Heading style={chicago}>
                        Chicago
                    </Heading>
                    <Box width="370px" height="322px">
                        <Text style={storyText}>
                            Brothers Mario and Adrian have poured their hearts into Little Lemon, blending cherished family recipes with contemporary culinary techniques.
                        </Text>
                        <Text style={storyText}>
                            Every dish tells a story of Mediterranean heritage, passed down through generations and brought to life in Chicago.
                        </Text>
                        <Text style={storyText}>
                            Join us for a dining experience that feels like home, where every meal is a celebration of family, tradition, and innovation.
                        </Text>
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