import { Text } from "@chakra-ui/react";

const ContentComponent = ({
  content = "",
  fontWeight = "normal",
  textAlign = "left",
}: {
  content: string;
  fontWeight?: string;
  textAlign?: any;
}) => {
  return (
    <Text
      fontSize={{ base: "20px", lg: "30px" }}
      fontWeight={fontWeight}
      textAlign={textAlign}
    >
      {content}
    </Text>
  );
};

export default ContentComponent;
