import { ChakraProvider } from "@chakra-ui/react";
import Start from "./Start";

function App() {
  return (
    <ChakraProvider>
      <h1>Quiz Generator</h1>
      <Start />
    </ChakraProvider>
  );
}

export default App;
