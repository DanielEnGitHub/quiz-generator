import { Text } from "@chakra-ui/react";

const SubTitleComponent = ({
  content = "",
  fontWeight = "normal",
  mt = { base: "-20px", lg: "-30px" },
}: {
  content: string;
  fontWeight?: string;
  mt?: object;
}) => {
  return (
    <Text
      fontSize={{ base: "30px", lg: "50px" }}
      fontWeight={fontWeight}
      mt={mt}
      mb="20px"
    >
      {content}
    </Text>
  );
};

export default SubTitleComponent;
