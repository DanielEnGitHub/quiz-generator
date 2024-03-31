import { Text } from "@chakra-ui/react";

const TitleComponent = ({
  content = "",
  fontWeight = "normal",
}: {
  content: string;
  fontWeight?: string;
}) => {
  return (
    <Text
      fontSize={{ base: "60px", lg: "100px" }}
      fontWeight={fontWeight}
      p={0}
      m={0}
    >
      {content}
    </Text>
  );
};

export default TitleComponent;
