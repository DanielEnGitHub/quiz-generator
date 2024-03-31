import { Text } from "@chakra-ui/react";

const ContentComponent = ({
  content = "",
  fontWeight = "normal",
}: {
  content: string;
  fontWeight?: string;
}) => {
  return (
    <Text fontSize={{ base: "20px", lg: "30px" }} fontWeight={fontWeight}>
      {content}
    </Text>
  );
};

export default ContentComponent;
