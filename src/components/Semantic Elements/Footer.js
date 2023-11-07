import Facebook from '../../images/facebook.png'
import Twitter from '../../images/twitter.png'
import Insta from '../../images/instagram.png'
import LinkedIn from '../../images/linkedin.png'
import TikTok from '../../images/tiktok_icon.png'

import logo from '../../images/alt-logo.png'

import { HStack, Flex, Box, VStack, Text} from '@chakra-ui/react'
import { Link } from 'react-router-dom'


function Footer() {

    const style = {
        color: '#EDEFEE',
        fontSize: 18,
        fontFamily: 'Karla',
        fontWeight: '500',
        lineHeight: "130%",
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
                        marginLeft="40px"
                    />
                    <VStack align="flex-start" width="114px" height="184px" marginRight="105px" marginLeft="69px">
                        <Text as='h3' textAlign="left">Doormat Navigation</Text>
                        <Link to="/" style={style}>Home</Link>
                        <Link to="/about" style={style}>About</Link>
                        <Link to="/menu" style={style}>Menu</Link>
                        <Link to="/reservations" style={style}>Reservations</Link>
                        <Link to="/order" style={style}>Order Online</Link>
                        <Link to="/login" style={style}>Login</Link>
                    </VStack>
                    <VStack align="flex-start" width="185px" height="248px" mr="47px">
                        <Text as='h3' mb="24px">Contact Us</Text>
                        <Text style={style}>Address: <br></br> 1100 Hyde Park, Chicago, IL, 60615</Text>
                        <Text></Text>
                        <Text style={style}>Phone #: <br></br> +1 (312) 555-0142 </Text>
                        <Text></Text>
                        <Text style={style}>Email: <br></br> info@littlelemon.com</Text>
                    </VStack>
                    <VStack align="flex-start" width="188px" height="168px">
                        <Text as='h3' mb="24px" >Social Media Links</Text>
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