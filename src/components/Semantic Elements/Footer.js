import Facebook from '../../images/facebook.png'
import Twitter from '../../images/twitter.png'
import Insta from '../../images/instagram.png'
import LinkedIn from '../../images/linkedin.png'

import logo from '../../images/alt-logo.png'

import { HStack, Flex, Box, VStack, Spacer } from '@chakra-ui/react'
import { Link } from 'react-router-dom'


function Footer() {

    const style = {
        color: '#EDEFEE',
        fontSize: 18,
        fontFamily: 'Karla',
        fontWeight: '500',
        // lineHeight: 23.40,
        wordWrap: 'break-word'
    }

    return (
        <>
            <Flex bg='#333333' justifyContent="center" paddingY="95px">
                <HStack >
                    <Box as='img'
                        src={logo}
                        width="162px"
                        height="248px"
                        objectFit="contain"
                        objectPosition="center"
                        flexShrink={0}
                        alt='Alternate Little Lemon Logo'
                    />
                    <Spacer/>
                    <VStack align="flex-start">
                        <Box as='h3' >Doormat Navigation</Box>
                        <Link to="/" style={style}>Home</Link>
                        <Link to="/about" style={style}>About</Link>
                        <Link to="/menu" style={style}>Menu</Link>
                        <Link to="/reservations" style={style}>Reservations</Link>
                        <Link to="/order" style={style}>Order Online</Link>
                        <Link to="/login" style={style}>Login</Link>
                    </VStack>
                    <VStack align="flex-start">
                        <Box as='h3' >Contact Us</Box>
                        <p style={style}>Address: </p>
                        <p style={style}>1100 Hyde Park, Chicago, IL, 60615</p>
                        <p style={style}>Phone #: </p>
                        <p style={style}>+1 (312) 555- 0142</p>
                        <p style={style}>Email: </p>
                        <p style={style}>info@littlelemon.com</p>
                    </VStack>
                    <VStack align="flex-start">
                        <Box as='h3' >Social Media Links</Box>
                        <ul title="Social Media Links">
                            <a href='https://www.facebook.com/LittleLemon' style={style} target="_blank" rel="noopener noreferrer">Facebook</a>
                            <li><img src={Facebook} alt="Little Lemon Logo" width="24px" height="24px" /></li>
                            <a href='https://www.twitter.com/LittleLemon' style={style} target="_blank" rel="noopener noreferrer">Twitter</a>
                            <li><img src={Twitter} alt="Little Lemon Logo" width="24px" height="24px" /></li>
                            <a href='https://www.instagram.com/LittleLemon' style={style} target="_blank" rel="noopener noreferrer">Instagram</a>
                            <li><img src={Insta} alt="Little Lemon Logo" width="24px" height="24px" /></li>
                            <a href='https://www.linkedin.com/LittleLemon' style={style} target="_blank" rel="noopener noreferrer">LinkedIn</a>
                            <li><img src={LinkedIn} alt="Little Lemon Logo" width="24px" height="24px" /></li>
                            <a href='https://www.tiktok.com/LittleLemon' style={style} target="_blank" rel="noopener noreferrer">TikTok</a>
                        </ul>
                    </VStack>
                </HStack>
            </Flex>
        </>
    );

}

export default Footer;