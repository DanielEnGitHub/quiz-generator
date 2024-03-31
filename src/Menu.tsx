import { Flex } from "@chakra-ui/react";
import { useQuestionsStore } from "./store/questions";
import PlayButton from "./components/Buttons/PlayButton";
import { ContentComponent, SubTitleComponent } from "./components/Text";

const Menu = () => {
  const fetchQuestions = useQuestionsStore((state) => state.fetchQuestions);

  const handleClick = () => {
    fetchQuestions(5);
  };

  return (
    <Flex direction="column" justifyContent="center" alignItems="center">
      <Flex
        direction="column"
        justifyContent="center"
        alignItems="center"
        alignContent="center"
        mb="30px"
      >
        <ContentComponent content="SCORE" />
        <SubTitleComponent
          content="10/10"
          mt={{ base: "-10px", lg: "-20px" }}
        />
      </Flex>
      <PlayButton onClick={handleClick} />
    </Flex>
  );
};

export default Menu;
