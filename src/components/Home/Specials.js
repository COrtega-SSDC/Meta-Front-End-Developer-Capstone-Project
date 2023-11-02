import { Button, Heading, HStack, Spacer, Box, Text } from '@chakra-ui/react'

import salad from '../../images/greek salad.jpg'
import dessert from '../../images/lemon dessert.jpg'
import bruschetta from '../../images/bruchetta.png'

function Specials() {

    const heading = {
        fontSize: 64,
        fontFamily: 'Markazi Text',
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

    const card_title = {
        fontSize: 18,
        fontFamily: 'Karla',
        fontWeight: '700',
        lineHeight: 16.20,
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
                <Heading style={heading}>This week's specials!</Heading>
                <Button
                    bgColor="#F4CE14"
                    style={button_style}
                >
                    Online Menu
                </Button>
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
                            <Heading style={card_title}>Greek Salad</Heading>
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
                            <Heading style={card_title}>Bruchetta</Heading>
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
                            <Heading style={card_title}>Lemon Dessert</Heading>
                            <Heading style={price}>$5.00</Heading>
                        </HStack>

                    </Box>
                </Box>
            </HStack>

        </>
    );

}

export default Specials;