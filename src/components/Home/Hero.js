
import { Button, HStack, VStack, Box } from '@chakra-ui/react'

import img from '../../images/restauranfood.jpg'

function Hero() {

    const style = {
        color: '#EDEFEE'
    }

    return (
        <>
            <HStack spacing='239px' justifyContent="center" bg='#495E57'>
                <VStack alignItems="flex-start">
                    <h1 style={{color: '#F4CE14'}}>Little Lemon</h1>
                    <h2 style={style}>Chicago</h2>
                    <Box w='291px' h='79px'>
                        <h3 style={style}>
                            We are a family owned
                            Mediterranean restaurant,
                            focused on traditional recipes served with a modern
                            twist.
                        </h3>
                    </Box>
                    <Button className='button'>Reserve a Table</Button>
                </VStack>
                <img src={img} alt='Chef holding plate of appetizers' className='hero_image' />
            </HStack>

        </>
    );

}

export default Hero;