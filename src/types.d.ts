export interface IQuestions {
  id: number;
  question: string;
  answers: string[];
  correctAnswer: number;
  userSelectedAnswer?: number;
  isCorrectUserAnswer?: boolean;
}

export interface IState {
  questions: IQuestions[];
  currentQuestionIndex: number;
  score: number;
  fetchQuestions: (limit: number) => Promise<void>;
  selectAnswer: (questionId: number, answerIndex: number) => void;
  goToNextQuestion: () => void;
  goToPreviousQuestion: () => void;
  reset: () => void;
  setScore: (score: number) => void;
}
