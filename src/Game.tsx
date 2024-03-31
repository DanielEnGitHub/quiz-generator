import { List, ListItem, Stack } from "@chakra-ui/react";
import { ContentComponent } from "./components/Text";
import { useQuestionsStore } from "./store/questions";
import { type IQuestions } from "./types";

const CardQuestion = ({ questionInfo }: { questionInfo: IQuestions }) => {
  return (
    <Stack maxW={{base:"400px", lg:"550px"}}>
      <ContentComponent content={questionInfo.question} textAlign="center" />
      <List mt={4}>
        {questionInfo.answers.map((answer, index) => (
          <ListItem
            textAlign="center"
            key={index}
            bgColor="white"
            color="purple.700"
            borderRadius="18px"
            fontSize={{ base: "16px", lg: "20px" }}
            p={{ base: 3, lg: 4 }}
            my={5}
            mx="auto"
            cursor="pointer"
            _hover={{
              bgColor: "purple.400",
              color: "white",
            }}
            transition="all 0.3s"
            w={{ base: "250px", lg: "460px" }}
          >
            {answer}
          </ListItem>
        ))}
      </List>
    </Stack>
  );
};

const Game = () => {
  const questions = useQuestionsStore((state) => state.questions);
  const currentQuestionIndex = useQuestionsStore(
    (state) => state.currentQuestionIndex
  );

  const questionInfo = questions[currentQuestionIndex];

  return (
    <Stack>
      <CardQuestion questionInfo={questionInfo} />
    </Stack>
  );
};

export default Game;
