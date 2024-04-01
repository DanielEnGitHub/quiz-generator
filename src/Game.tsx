import { List, ListItem, Stack } from "@chakra-ui/react";
import { ContentComponent } from "./components/Text";
import { useQuestionsStore } from "./store/questions";
import { IQuestions } from "./types";

const CardQuestion = ({ questionInfo }: { questionInfo: IQuestions }) => {
  const selectAnswer = useQuestionsStore((state) => state.selectAnswer);
  const isOptionDisabled = "userSelectedAnswer" in questionInfo;

  const handleClick = (answerIndex: number) => {
    if (!isOptionDisabled) {
      selectAnswer(questionInfo.id, answerIndex);
    }
  };

  const getAnswerBackgroundColor = (
    index: number,
    isHover?: boolean
  ): string => {
    if (questionInfo.userSelectedAnswer === index) {
      return questionInfo.isCorrectUserAnswer ? "green.400" : "red.400";
    }

    if (isOptionDisabled && questionInfo.correctAnswer === index + 1) {
      return "green.400";
    }

    return isHover ? "purple.400" : "white";
  };

  const getAnswerColor = (index: number): string => {
    if (
      questionInfo.userSelectedAnswer === index ||
      (isOptionDisabled && questionInfo.correctAnswer === index + 1)
    ) {
      return "white";
    }

    return "purple.700";
  };

  return (
    <Stack maxW={{ base: "400px", lg: "550px" }}>
      <ContentComponent content={questionInfo.question} textAlign="center" />
      <List mt={4}>
        {questionInfo.answers.map((answer, index) => (
          <ListItem
            textAlign="center"
            key={index}
            bgColor={getAnswerBackgroundColor(index)}
            color={getAnswerColor(index)}
            borderRadius="18px"
            fontSize={{ base: "16px", lg: "20px" }}
            p={{ base: 3, lg: 4 }}
            my={5}
            mx="auto"
            cursor={isOptionDisabled ? "not-allowed" : "pointer"}
            _hover={
              isOptionDisabled
                ? {}
                : {
                    bgColor: getAnswerBackgroundColor(index, true),
                    color: "white",
                  }
            }
            transition="all 0.3s"
            w={{ base: "250px", lg: "460px" }}
            onClick={() => handleClick(index)}
            fontWeight="bold"
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
