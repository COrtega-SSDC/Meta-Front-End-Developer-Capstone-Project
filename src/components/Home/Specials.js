import { Button, Heading, HStack, Spacer, Box } from '@chakra-ui/react'

import salad from '../../images/greek salad.jpg'
import dessert from '../../images/lemon dessert.jpg'
import bruschetta from '../../images/bruchetta.png'

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

    return (
        <>
            <HStack justifyContent="center" spacing="216px" paddingTop='75px' paddingBottom='51px'>
                <Box as='h1' style={{ color: 'black' }}>This week's specials!</Box>
                <Link to="/order">
                    <Button
                        bgColor="#F4CE14"
                        style={button_style}
                    >
                        Online Menu
                    </Button>
                </Link>
            </HStack>
            <Spacer />
            <HStack justifyContent="center" spacing='34.32px' paddingBottom='73px'>
                <Box width='264.667px' height='439px' flexShrink={0}>
                    <Box
                        as='img'
                        src={salad}
                        className='specials_image'
                    />
                    <Box height='253.742px' bg="#EDEFEE">
                        <HStack justifyContent="center" spacing="68.85px">
                            <Box as='h5'>Greek Salad</Box>
                            <Heading style={price}>$12.99</Heading>
                        </HStack>
                        {/* <Text>The famous greek salad of crispy lettuce, peppers,
                            olives and our Chicago style feta cheese,
                            garnished with crunchy garlic and rosemary croutons.
                        </Text> */}
                    </Box>
                </Box>
                <Box width='264.667px' height='439px' flexShrink={0}>
                    <Box
                        as='img'
                        src={bruschetta}
                        className='specials_image'
                    />
                    <Box height='253.742px' bg="#EDEFEE">
                        <HStack justifyContent="center" spacing="83.85px">
                            <Box as='h5'>Bruchetta</Box>
                            <Heading style={price}>$5.99</Heading>
                        </HStack>
                    </Box>
                </Box>
                <Box width='264.667px' height='439px' flexShrink={0}>
                    <Box
                        as='img'
                        src={dessert}
                        className='specials_image'
                        objectFit="cover"
                    />
                    <Box height='253.742px' bg="#EDEFEE">
                        <HStack justifyContent="center" spacing="42.85px">
                            <Box as='h5'>Lemon Dessert</Box>
                            <Heading style={price}>$5.00</Heading>
                        </HStack>

                    </Box>
                </Box>
            </HStack>

        </>
    );

}

export default Specials;