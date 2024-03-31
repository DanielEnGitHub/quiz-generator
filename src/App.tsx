import { ChakraProvider } from "@chakra-ui/react";
import { useQuestionsStore } from "./store/questions";
import Home from "./Home";

function App() {
  const questions = useQuestionsStore((state) => state.questions);

  console.log(questions, "questions");

  return (
    <ChakraProvider>
      <Home />
    </ChakraProvider>
  );
}

export default App;
