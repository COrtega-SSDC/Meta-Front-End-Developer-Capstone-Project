import Facebook from '../../images/facebook.png'
import Twitter from '../../images/twitter.png'
import Insta from '../../images/instagram.png'
import LinkedIn from '../../images/linkedin.png'
import TikTok from '../../images/tiktok_icon.png'

import logo from '../../images/alt-logo.png'

import { HStack, Flex, Box, VStack, Text, Spacer } from '@chakra-ui/react'
import { Link } from 'react-router-dom'


function Footer() {

    const style = {
        color: '#EDEFEE',
        fontSize: 18,
        fontFamily: 'Karla',
        fontWeight: '500',
        // lineHeight: 23.40,
        wordWrap: 'break-word',
        textAlign: "left"
    }

    return (
        <>
            <Flex bg='#333333' justifyContent="center" paddingY="95px" height="417px">
                <HStack align="flex-start" >
                    <Box as='img'
                        src={logo}
                        width="162px"
                        height="248px"
                        objectFit="contain"
                        objectPosition="center"
                        flexShrink={0}
                        alt='Alternate Little Lemon Logo'
                        marginLeft="95px"
                    />
                    <Spacer width="69px"/>
                    <VStack align="flex-start" width="128.43px" height="208px">
                        <Text as='h3' textAlign="left">Doormat Navigation</Text>
                        <Link to="/" style={style}>Home</Link>
                        <Link to="/about" style={style}>About</Link>
                        <Link to="/menu" style={style}>Menu</Link>
                        <Link to="/reservations" style={style}>Reservations</Link>
                        <Link to="/order" style={style}>Order Online</Link>
                        <Link to="/login" style={style}>Login</Link>
                    </VStack>
                    <Spacer width="123px"/>
                    <VStack align="flex-start" width="199.05px" height="248px">
                        <Text as='h3' >Contact Us</Text>
                        <Text style={style}>Address: </Text>
                        <Text style={style}>1100 Hyde Park, Chicago, IL, 60615</Text>
                        <Text style={style}>Phone #: </Text>
                        <Text style={style}>+1 (312) 555- 0142</Text>
                        <Text style={style}>Email: </Text>
                        <Text style={style}>info@littlelemon.com</Text>
                    </VStack>
                    <Spacer width="33px"/>
                    <VStack align="flex-start">
                        <Text as='h3' >Social Media Links</Text>
                        <ul style={{ listStyleType: 'none' }}>
                            <li>
                                <a href='https://www.facebook.com/LittleLemon' target="_blank" rel="noopener noreferrer">
                                    <HStack>
                                        <img src={Facebook} alt="Facebook" width="24px" height="24px" />
                                        <Text style={style}>Facebook</Text>
                                    </HStack>
                                </a>
                            </li>
                            <li>
                                <a href='https://www.twitter.com/LittleLemon' target="_blank" rel="noopener noreferrer">
                                    <HStack>
                                        <img src={Twitter} alt="Twitter" width="24px" height="24px" />
                                        <Text style={style}>Twitter</Text>
                                    </HStack>
                                </a>
                            </li>
                            <li>
                                <a href='https://www.instagram.com/LittleLemon' target="_blank" rel="noopener noreferrer">
                                    <HStack>
                                        <img src={Insta} alt="Instagram" width="24px" height="24px" />
                                        <Text style={style}>Instagram</Text>
                                    </HStack>
                                </a>
                            </li>
                            <li>
                                <a href='https://www.linkedin.com/LittleLemon' target="_blank" rel="noopener noreferrer">
                                    <HStack>
                                        <img src={LinkedIn} alt="LinkedIn" width="24px" height="24px" />
                                        <Text style={style}>LinkedIn</Text>
                                    </HStack>
                                </a>
                            </li>
                            <li>
                                <a href='https://www.tiktok.com/LittleLemon' target="_blank" rel="noopener noreferrer">
                                    <HStack>
                                        <img src={TikTok} alt="TikTok" width="24px" height="24px" />
                                        <Text style={style}>TikTok</Text>
                                    </HStack>
                                </a>
                            </li>

                        </ul>
                    </VStack>
                </HStack>
            </Flex>
        </>
    );

}

export default Footer;