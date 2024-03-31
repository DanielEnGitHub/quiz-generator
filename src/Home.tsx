import { Box, Flex } from "@chakra-ui/react";
import { SubTitleComponent, TitleComponent } from "./components/Text";
import Menu from "./Menu";
import { useQuestionsStore } from "./store/questions";
import Game from "./Game";

const Home = () => {
  const questions = useQuestionsStore((state) => state.questions);
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
          <TitleComponent content="QUIZ" fontWeight="bold" />
          <SubTitleComponent content="GENERATOR" fontWeight="bold" />
          {questions.length > 0 ? <Game /> : <Menu />}
        </Flex>
      </Flex>
    </Box>
  );
};

export default Home;
