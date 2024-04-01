import { List, ListItem, Stack, Text } from "@chakra-ui/react";
import { ContentComponent } from "./components/Text";
import { useQuestionsStore } from "./store/questions";
import { IQuestions } from "./types";
import ButtonNextPrev from "./components/Buttons/ButtonNextPrev";

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
      <ContentComponent
        content={questionInfo.question}
        textAlign="center"
        height={{ base: "60px", lg: "100px" }}
      />
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

  // cambiar de pregunta
  const goToNextQuestion = useQuestionsStore((state) => state.goToNextQuestion);
  const goToPreviousQuestion = useQuestionsStore(
    (state) => state.goToPreviousQuestion
  );

  const reset = useQuestionsStore((state) => state.reset);
  const setScore = useQuestionsStore((state) => state.setScore);

  let correct = 0;
  let incorrect = 0;
  let unanswered = 0;

  questions.forEach((question) => {
    if ("userSelectedAnswer" in question) {
      if (question.isCorrectUserAnswer) {
        correct++;
      } else {
        incorrect++;
      }
    } else {
      unanswered++;
    }
  });

  const handleReset = () => {
    reset();
    setScore(correct);
  };

  return (
    <Stack mt={3}>
      <Stack w={{ base: "250px", lg: "460px" }} mx="auto">
        {/* pregunta indes */}
        <Text textAlign="center" fontSize="20px">
          {`${currentQuestionIndex + 1} / ${questions.length}`}
        </Text>
      </Stack>
      <CardQuestion questionInfo={questionInfo} />
      <Stack
        direction="row"
        justify={currentQuestionIndex === 0 ? "flex-end" : "space-between"}
        mt={5}
        w={{ base: "250px", lg: "460px" }}
        mx="auto"
      >
        <ButtonNextPrev
          onClick={goToPreviousQuestion}
          display={currentQuestionIndex === 0 ? "none" : "block"}
          isPrev
        />
        <ButtonNextPrev
          onClick={goToNextQuestion}
          display={
            currentQuestionIndex === questions.length - 1 ? "none" : "block"
          }
        />
      </Stack>
      <Stack w={{ base: "250px", lg: "460px" }} mx="auto" mt={5}>
        <Text textAlign="center" fontSize="20px">
          {`Correctas: ${correct} | Incorrectas: ${incorrect} | Sin responder: ${unanswered}`}
        </Text>
      </Stack>
      {unanswered === 0 && (
        <Stack mx="auto" mt={5} onClick={handleReset}>
          <Text
            cursor="pointer"
            textAlign="center"
            fontSize="20px"
            borderBottom="2px solid white"
            fontWeight="bold"
          >
            {`Comenzar de nuevo`}
          </Text>
        </Stack>
      )}
    </Stack>
  );
};

export default Game;
