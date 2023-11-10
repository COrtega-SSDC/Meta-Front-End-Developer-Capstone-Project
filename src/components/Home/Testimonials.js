import { Box, Flex, HStack, VStack, Text } from '@chakra-ui/react'

import star from '../../images/yellow_star.svg'
import rating from '../../images/star_empty.svg'
import devin from '../../images/devin_cassidy.jpg'
import jodi from '../../images/jodi_hunter.jpg'
import gerardo from '../../images/Gerardo_Mora.jpg'
import robyn from '../../images/Robyn_Wong.jpg'

function Testimonials() {

    const style = {
        color: 'black',
        fontSize: 14,
        fontFamily: 'Karla',
        fontWeight: 700,
        wordWrap: 'break-word'
    }

    const review = {
        color: 'black',
        fontSize: 14,
        fontFamily: 'Karla',
        fontWeight: 400,
        wordWrap: 'break-word'
    }

    return (
        <>
            <Flex bg="#EDEFEE" height="590px" justifyContent="center">
                <section>
                    <VStack spacing="77px">
                        <Text as='h1' style={{ color: 'black', paddingTop: '80px', justifyContent: 'center' }}>Testimonials</Text>
                        <HStack spacing="20px">
                            <Box width="200px" height="175px" bg="#FFFFFF" >
                                <article>
                                    <HStack align="flex-start" mt="29px" spacing={0} justifyContent="center">
                                        <Text style={style} mr="14px">Rating</Text>
                                        <Box as='img' src={star} height="16px" width="16px" />
                                        <Box as='img' src={star} height="16px" width="16px" />
                                        <Box as='img' src={star} height="16px" width="16px" />
                                        <Box as='img' src={star} height="16px" width="16px" />
                                        <Box as='img' src={rating} height="16px" width="16px" />
                                    </HStack>
                                    <HStack justifyContent="center" spacing="12px">
                                        <Box as='img' src={devin} width="47px" height="46px" borderRadius="16px" mt="13px"></Box>
                                        <Text style={style} mt="13px">Devin Cassidy</Text>
                                    </HStack>
                                    <Text style={review} mt="17px" ml="24px" width="158px" height="48px" textAlign="left">
                                        Great Atmosphere! Enjoyed the music and the decor.
                                    </Text>
                                </article>

                            </Box>
                            <Box width="200px" height="175px" bg="#FFFFFF">
                                <article>
                                    <HStack align="flex-start" mt="29px" spacing={0} justifyContent="center">
                                        <Text style={style} mr="14px">Rating</Text>
                                        <Box as='img' src={star} height="16px" width="16px" />
                                        <Box as='img' src={star} height="16px" width="16px" />
                                        <Box as='img' src={star} height="16px" width="16px" />
                                        <Box as='img' src={star} height="16px" width="16px" />
                                        <Box as='img' src={star} height="16px" width="16px" />
                                    </HStack>
                                    <HStack justifyContent="center" spacing="12px">
                                        <Box as='img' src={jodi} width="47px" height="46px" borderRadius="16px" mt="13px"></Box>
                                        <Text style={style} mt="13px">Jodi Hunter</Text>
                                    </HStack>
                                    <Text style={review} mt="17px" ml="24px" width="158px" height="48px" textAlign="left">
                                        The lamb dish was a standout. Kudos to the chefs!
                                    </Text>
                                </article>

                            </Box>
                            <Box width="200px" height="175px" bg="#FFFFFF">
                                <article>
                                    <HStack align="flex-start" mt="29px" spacing={0} justifyContent="center">
                                        <Text style={style} mr="14px">Rating</Text>
                                        <Box as='img' src={star} height="16px" width="16px" />
                                        <Box as='img' src={star} height="16px" width="16px" />
                                        <Box as='img' src={rating} height="16px" width="16px" />
                                        <Box as='img' src={rating} height="16px" width="16px" />
                                        <Box as='img' src={rating} height="16px" width="16px" />
                                    </HStack>
                                    <HStack justifyContent="center" spacing="12px">
                                        <Box as='img' src={gerardo} width="47px" height="46px" borderRadius="16px" mt="13px"></Box>
                                        <Text style={style} mt="13px">Gerardo Mora</Text>
                                    </HStack>
                                    <Text style={review} mt="17px" ml="24px" width="158px" height="48px" textAlign="left">
                                        Service was a bit slow and my meal came out cold.
                                    </Text>
                                </article>

                            </Box>
                            <Box width="200px" height="175px" bg="#FFFFFF">
                                <article>
                                    <HStack align="flex-start" mt="29px" spacing={0} justifyContent="center">
                                        <Text style={style} mr="14px">Rating</Text>
                                        <Box as='img' src={star} height="16px" width="16px" />
                                        <Box as='img' src={star} height="16px" width="16px" />
                                        <Box as='img' src={star} height="16px" width="16px" />
                                        <Box as='img' src={star} height="16px" width="16px" />
                                        <Box as='img' src={rating} height="16px" width="16px" />
                                    </HStack>
                                    <HStack justifyContent="center" spacing="12px">
                                        <Box as='img' src={robyn} width="47px" height="46px" borderRadius="16px" mt="13px"></Box>
                                        <Text style={style} mt="13px">Robyn Wong</Text>
                                    </HStack>
                                    <Text style={review} mt="17px" ml="24px" width="158px" height="48px" textAlign="left">
                                        Food was great overall, but the dessert menu could use more variety.
                                    </Text>
                                </article>

                            </Box>
                        </HStack>
                    </VStack>
                </section>

            </Flex>
        </>

    );

}

export default Testimonials;