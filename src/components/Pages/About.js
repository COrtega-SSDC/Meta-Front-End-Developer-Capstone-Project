import { Flex, Box, Text, HStack, VStack } from "@chakra-ui/react";
import brothers from '../../images/Mario and Adrian b.jpg'

function About() {
    return (
        <>
            <Flex bg="#495E57" height="800px" justifyContent="center">
                <HStack spacing="65px">
                    <VStack spacing={0} align="flex-start" textAlign="left" mt={0}>
                        <Text as='h1' >Our Story</Text>
                        <Box width="860px" >
                            <Text as='h4'>
                                Through humble beginnings in the streets of Chicago, two brothers embarked on a culinary journey that would forever change their lives.

                                Born into a family with a deep-rooted love for Mediterranean cuisine, Mario and Adrian inherited cherished family recipes and a passion for cooking.

                                From a young age, they watched their parents and grandparents create dishes that were expressions of love, heritage, and the joy of sharing a meal with loved ones. <br></br><br></br>

                                As they grew older, Mario and Adrian's curiosity led them to explore new horizons.

                                They traveled the world, worked in prestigious kitchens, but their hearts always went back to Chicago.

                                It was during a trip back home when the idea for Little Lemon was born.

                                The brothers wanted to create a place that celebrated their heritage while appealing to the modern world.

                                They envisioned a restaurant where family, tradition, and the spirit of innovation would come together to create a unique dining experience.

                                And so, Little Lemon was born as a family-owned Mediterranean restaurant where family recipes meet modern culinary techniques.  <br></br><br></br>

                                As you step into Little Lemon, you'll find yourself in a space that feels like home.

                                Mario and Adrian invite you to join them on this journey through their heritage and every visit is an opportunity to create new memories around the table. <br></br><br></br>

                                Welcome to Little Lemon, where the story of two brothers and their love for food comes alive with every dish.
                            </Text>
                        </Box>
                    </VStack>
                    <img src={brothers} height="500px" width="500px"/>

                </HStack>
            </Flex>
        </>
    )

}

export default About;