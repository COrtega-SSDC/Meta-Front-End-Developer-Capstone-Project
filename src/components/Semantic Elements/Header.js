
import Nav from "../Semantic Elements/Nav";

import logo from '../../images/logo.png'
import { HStack, Flex, Box, Container } from '@chakra-ui/react'


function Header() {

    // const style = {
    //     width: '905px',
    //     height: '78px',
    //     flexShrink: 0
    // };

    return (
        <>
            <Flex justifyContent="center" alignItems="center" paddingY={21}>
                <HStack spacing='25px'>
                    <Container maxWidth="202px" maxHeight="78px" flexShrink={0}>
                        <img src={logo} alt="Little Lemon Logo"/>
                    </Container>                    
                    <Nav />
                </HStack>
            </Flex>

        </>
    );

}

export default Header;