
import Nav from "../Semantic Elements/Nav";

import logo from '../../images/logo.png'
import { HStack, Flex, Box } from '@chakra-ui/react'


function Header() {
   

    const style = {
        justifyContent: "center",
        paddingBottom: 26,
        paddingTop: 49,
        width: "905px",
        height: "78px",
        margin: "auto"
    }

    return (
        <>
            <Flex style={style}>
                <HStack spacing='63px'>
                    <Box as="img" 
                        src={logo} 
                        alt="Little Lemon Logo"
                        objectPosition="center"
                        objectFit="contain"
                        className="logo"
                    />                    
                    <Nav />
                </HStack>
            </Flex>

        </>
    );

}

export default Header;