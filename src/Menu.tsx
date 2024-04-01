import { Flex } from "@chakra-ui/react";
import { useQuestionsStore } from "./store/questions";
import PlayButton from "./components/Buttons/PlayButton";
import { ContentComponent, SubTitleComponent } from "./components/Text";

const Menu = () => {
  const fetchQuestions = useQuestionsStore((state) => state.fetchQuestions);
  const score = useQuestionsStore((state) => state.score);

  const handleClick = () => {
    fetchQuestions(10);
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
          content={`${score}/10`}
          mt={{ base: "-8px", lg: "-15px" }}
        />
      </Flex>
      <PlayButton onClick={handleClick} />
    </Flex>
  );
};

export default Menu;
