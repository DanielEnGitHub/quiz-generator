import { Box, Button, Flex, Image, Text } from "@chakra-ui/react";
import { play } from "./utils";

const Home = () => {
  return (
    <Box
      position={"relative"}
      bg="linear-gradient(15deg, rgba(170,125,180,1) 0%, rgba(89,72,164,1) 74%)"
      minH="100vh"
      color="white"
      fontFamily="Roboto, sans-serif"
    >
      <Flex
        direction="column"
        justifyContent="center"
        alignItems="center"
        minH="97vh"
      >
        <Flex
          direction="column"
          justifyContent="center"
          alignItems="center"
          alignContent="center"
          mb="30px"
        >
          {/* <Image src={logo} w={"60px"} /> */}
          <Text
            fontSize={{ base: "60px", lg: "100px" }}
            fontWeight="bold"
            p={0}
            m={0}
          >
            QUIZ
          </Text>
          <Text
            fontSize={{ base: "30px", lg: "50px" }}
            fontWeight="bold"
            mt={{ base: "-20px", lg: "-30px" }}
            mb="20px"
          >
            GENERATOR
          </Text>

          <Text fontSize={{ base: "20px", lg: "30px" }}>SCORE</Text>
          <Text
            fontSize={{ base: "30px", lg: "50px" }}
            mt={{ base: "-10px", lg: "-20px" }}
          >
            10/10
          </Text>
        </Flex>
        <Flex
          as={Button}
          p={4}
          w={{ base: "80px", lg: "100px" }}
          h={{ base: "80px", lg: "100px" }}
          bgColor="yellow.400"
          borderRadius="10px"
          justifyContent="center"
          alignItems="center"
          color="white"
          boxShadow={"0 0 0 8px rgba(236, 201, 75, 0.5)"}
          _hover={{
            boxShadow: "0 0 0 9px rgba(236, 201, 75, 0.6)",
            bgColor: "yellow.300",
          }}
        >
          <Image src={play} w={{ base: "45px", lg: "60px" }} />
        </Flex>
      </Flex>
    </Box>
  );
};

export default Home;
