
import { Button, HStack, VStack, Box, Flex, Spacer } from '@chakra-ui/react'

import img from '../../images/restauranfood.jpg'

function Hero() {

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
                            <Box as='h1' >Little Lemon</Box>
                            <Box as='h2' >Chicago</Box>
                        </Box>
                        <Spacer />
                        <Box w='291px' h='132px'>
                            <Box as='h4' style={{lineHeight: '28.125px'}}>
                                We are a family owned
                                Mediterranean restaurant,
                                focused on traditional recipes served with a modern
                                twist.
                            </Box>
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