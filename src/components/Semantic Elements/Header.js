
import Nav from "../Semantic Elements/Nav";

import logo from '../../images/logo.png'
import { HStack, Flex, Box } from '@chakra-ui/react'


function Header() {

    const style = {
        width: '202px',
        height: '76px',
        flexShrink: 0
    };

    const flex_style = {
        justifyContent: "center",
        paddingBottom: 26,
        paddingTop: 21,
        width: "905px",
        height: "78px",
        margin: "auto"
    }

    return (
        <>
            <Flex style={flex_style}>
                <HStack spacing='63px'>
                    <Box as="img" 
                        src={logo} 
                        alt="Little Lemon Logo"
                        objectPosition="center"
                        objectFit="contain"
                        style={style}
                    />                    
                    <Nav />
                </HStack>
            </Flex>

        </>
    );

}

export default Header;