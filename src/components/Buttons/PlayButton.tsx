import { Button, Flex, Image } from "@chakra-ui/react";
import { play } from "../../utils";

const PlayButton = ({ onClick = () => {} }: { onClick: () => void }) => {
  return (
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
      onClick={onClick}
    >
      <Image src={play} w={{ base: "45px", lg: "60px" }} />
    </Flex>
  );
};

export default PlayButton;
