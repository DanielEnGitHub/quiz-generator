import { Button, Flex, Image } from "@chakra-ui/react";
import { next } from "../../utils";

const ButtonNextPrev = ({
  onClick = () => {},
  isPrev = false,
  display,
}: {
  onClick: () => void;
  isPrev?: boolean;
  display?: string;
}) => {
  return (
    <Flex
      as={Button}
      p={{ base: 3, lg: 4 }}
      w={{ base: "40px", lg: "60px" }}
      h={{ base: "40px", lg: "60px" }}
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
      display={display}
    >
      <Image
        src={next}
        w={{ base: "45px", lg: "60px" }}
        transform={`rotate(${isPrev ? 180 : 0}deg)`}
      />
    </Flex>
  );
};

export default ButtonNextPrev;
