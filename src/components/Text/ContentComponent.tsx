import { Text } from "@chakra-ui/react";

const ContentComponent = ({
  content = "",
  fontWeight = "normal",
  textAlign = "left",
  height = "auto",
}: {
  content: string;
  fontWeight?: string;
  textAlign?: any;
  height?: any;
}) => {
  return (
    <Text
      fontSize={{ base: "20px", lg: "30px" }}
      fontWeight={fontWeight}
      textAlign={textAlign}
      h={height}
    >
      {content}
    </Text>
  );
};

export default ContentComponent;
