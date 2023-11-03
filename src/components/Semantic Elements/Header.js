
import Nav from "../Semantic Elements/Nav";

import logo from '../../images/logo.png'
import { HStack, Flex, Box } from '@chakra-ui/react'
import { Link } from 'react-router-dom'


function Header() {


    const style = {
        justifyContent: "center",
        marginBottom: "26px",
        marginTop: "21px",
        width: "905px",
        height: "78px",
        margin: "auto"
    }

    return (
        <>
            <Flex style={style}>
                <HStack spacing='63px'>
                    <Link to="/">
                        <Box as="img"
                            src={logo}
                            alt="Little Lemon Logo"
                            objectPosition="center"
                            objectFit="contain"
                            className="logo"
                        />
                    </Link>
                    <Nav />
                </HStack>
            </Flex>

        </>
    );

}

export default Header;