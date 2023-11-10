import { Button, Heading, HStack, Box, Flex, VStack } from '@chakra-ui/react'

import salad from '../../images/greek salad.jpg'
import dessert from '../../images/lemon dessert.jpg'
import bruschetta from '../../images/bruchetta.png'
import bike from "../../images/Group.png"

import { Link } from 'react-router-dom'

function Specials() {

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

    const price = {
        color: '#EE9972',
        fontSize: 16,
        fontFamily: 'Karla',
        fontWeight: 500,
        wordWrap: 'break-word'
    }
    const delivery = {
        color: 'black',
        fontSize: 16,
        fontFamily: 'Karla',
        fontWeight: '700',
        wordWrap: 'break-word'
    }

    return (
        <>
            <Flex justifyContent="center" height="715px">
                <VStack marginTop='75px' marginBottom='73px'>
                    <HStack spacing="216px" marginBottom='51px'>
                        <Box as='h1' style={{ color: 'black' }}>This week's specials!</Box>
                        <Link to="/menu">
                            <Button
                                bgColor="#F4CE14"
                                style={button_style}
                            >
                                Online Menu
                            </Button>
                        </Link>
                    </HStack>
                    <HStack spacing='34.32px'>
                        <article>
                            <Box width='264.667px' height='439px' flexShrink={0}>
                                <Box
                                    as='img'
                                    src={salad}
                                    className='specials_image'
                                />
                                <Box height='253.742px' bg="#EDEFEE">
                                    <HStack justifyContent="center" spacing="68.85px">
                                        <Box as='h5' mt="19.32px">Greek Salad</Box>
                                        <Heading style={price} mt="20.19">$12.99</Heading>
                                    </HStack>
                                    <Box as='p' width="216.73553px" height="120.286px" margin="32.29px auto auto auto" textAlign="left">
                                        The famous greek salad of crispy lettuce, peppers,
                                        olives and our Chicago style feta cheese,
                                        garnished with crunchy garlic and rosemary croutons.
                                    </Box>
                                    <HStack ml="25.01px" mb="29.29px" spacing={3}>
                                        <Heading style={delivery} mt="17.56px" >Order a delivery </Heading>
                                        <Link to="/order">
                                            <Box as='img' src={bike} mt="21.07px" />
                                        </Link>
                                    </HStack>
                                </Box>
                            </Box>
                        </article>
                        <article>
                            <Box width='264.667px' height='439px' flexShrink={0}>
                                <Box
                                    as='img'
                                    src={bruschetta}
                                    className='specials_image'
                                />
                                <Box height='253.742px' bg="#EDEFEE">
                                    <HStack justifyContent="center" spacing="83.85px">
                                        <Box as='h5' mt="19.32px">Bruchetta</Box>
                                        <Heading style={price} mt="20.19">$5.99</Heading>
                                    </HStack>
                                    <Box as='p' width="216.73553px" height="120.286px" margin="32.29px auto auto auto" textAlign="left">
                                        Our Bruschetta is made from grilled bread that has been smeared with garlic
                                        and seasoned with salt and olive oil.
                                    </Box>
                                    <HStack ml="25.01px" mb="29.29px" spacing={3}>
                                        <Heading style={delivery} mt="17.56px" >Order a delivery </Heading>
                                        <Link to="/order">
                                            <Box as='img' src={bike} mt="21.07px" />
                                        </Link>
                                    </HStack>
                                </Box>
                            </Box>
                        </article>

                        <article>
                            <Box width='264.667px' height='439px' flexShrink={0}>
                                <Box
                                    as='img'
                                    src={dessert}
                                    className='specials_image'
                                    objectFit="cover"
                                />
                                <Box height='253.742px' bg="#EDEFEE">
                                    <HStack justifyContent="center" spacing="42.85px">
                                        <Box as='h5' mt="19.32px">Lemon Dessert</Box>
                                        <Heading style={price} mt="20.19">$5.00</Heading>
                                    </HStack>
                                    <Box as='p' width="216.73553px" height="120.286px" margin="32.29px auto auto auto" textAlign="left">
                                        This comes straight from grandma’s recipe book,
                                        every last ingredient has been sourced and is as authentic as can be imagined.
                                    </Box>
                                    <HStack ml="25.01px" mb="29.29px" spacing={3}>
                                        <Heading style={delivery} mt="17.56px" >Order a delivery </Heading>
                                        <Link to="/order">
                                            <Box as='img' src={bike} mt="21.07px" />
                                        </Link>
                                    </HStack>
                                </Box>
                            </Box>
                        </article>

                    </HStack>
                </VStack>
            </Flex>


        </>
    );

}

export default Specials;