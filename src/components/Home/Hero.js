
import { Button, HStack, VStack, Box, Flex, Spacer, Text } from '@chakra-ui/react'

import img from '../../images/restauranfood.jpg'
import { Link } from 'react-router-dom'

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
            <Flex justifyContent="center" bg='#495E57' height="406px">
                <HStack spacing='239px'>
                    <section>
                        <VStack width="291px" height="355px" align="flex-start">
                            <Box height="106px" width="280px">
                                <Box as='h1' >Little Lemon</Box>
                                <Box as='h2' textAlign="left" mt="-20px" >Chicago</Box>
                            </Box>
                            <Spacer />
                            <Box w='291px' h='132px'>
                                <Text as='h4' style={{ lineHeight: '25.31px', textAlign: "left" }}>
                                    We are a family owned
                                    Mediterranean restaurant,
                                    focused on traditional recipes served with a modern
                                    twist.
                                </Text>
                            </Box>
                            <Spacer />
                            <Link to="/reservations">
                                <Button
                                    bgColor="#F4CE14"
                                    style={button_style}
                                >
                                    Reserve a Table
                                </Button>
                            </Link>
                        </VStack>
                    </section>
                    <section>
                        <Box
                            as='img'
                            src={img}
                            objectFit="cover"
                            objectPosition="center"
                            className='hero_image'
                            alt='Chef holding a plate of appetizers from the neck down'
                        />
                    </section>
                </HStack>
            </Flex>


        </>
    );

}

export default Hero;