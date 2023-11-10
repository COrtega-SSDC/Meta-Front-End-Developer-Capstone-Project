import Nav from "../Semantic Elements/Nav";

import logo from '../../images/logo.png'
import { HStack, Flex, Box } from '@chakra-ui/react'
import { Link } from 'react-router-dom'


function Header() {


    const style = {
        width: 905,
        height: 78,
        paddingLeft: 23,
        margin: "21px auto 24px auto"
    }

    return (
        <>
            <header>
                <Flex as='nav' height="123px">
                    <HStack spacing='63px' style={style}>
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

            </header>

        </>
    );

}

export default Header;