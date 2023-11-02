
import { Button, HStack, VStack, Box, Flex, Heading, Spacer } from '@chakra-ui/react'

import img from '../../images/restauranfood.jpg'

function Hero() {

    const header = {
        color: '#F4CE14',
        fontFamily: 'Markazi Text',
        fontSize: 64,
        fontWeight: 500,
        wordWrap: 'break-word'
    }

    const subhead = {
        color: '#EDEFEE',
        fontFamily: 'Markazi Text',
        fontSize: 40,
        fontWeight: 400,
        wordWrap: 'break-word'
    }

    const button_style = {
        borderRadius: 16,
        width: 200,
        height: 60,
        flexShrink: 0,
        fontSize: 18,
        fontFamily: 'Karla',
        fontWeight: 700,
        wordWrap: 'break-word'
    }

    return (
        <>
            <Flex justifyContent="center" bg='#495E57' height="406px" marginTop="26px" >
                <HStack spacing='239px'>
                    <VStack width="291px" height="355px">
                        <Box height="106px" width="280px" alignContent="flex-start">
                            <Heading
                                style={header}
                            >
                                Little Lemon
                            </Heading>
                            <Heading
                                style={subhead}
                            >
                                Chicago
                            </Heading>
                        </Box>
                        <Spacer />
                        <Box w='291px' h='132px'>
                            <h3 className='description'>
                                We are a family owned
                                Mediterranean restaurant,
                                focused on traditional recipes served with a modern
                                twist.
                            </h3>
                        </Box>
                        <Spacer />
                        <Button
                            bgColor="#F4CE14"
                            style={button_style}
                        >
                            Reserve a Table
                        </Button>
                    </VStack>
                    <Box
                        as='img'
                        src={img}
                        objectFit="cover"
                        objectPosition="center"
                        className='hero_image'
                        alt='Chef holding a plate of appetizers from the neck down'
                    />
                </HStack>
            </Flex>


        </>
    );

}

export default Hero;