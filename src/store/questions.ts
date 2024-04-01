import { create } from "zustand";

import { type IState } from "../types.d";

import confetti from "canvas-confetti";
import { persist } from "zustand/middleware";

export const useQuestionsStore = create<IState>()(
  persist(
    (set, get) => {
      return {
        questions: [],
        currentQuestionIndex: 0,
        score: 0,

        fetchQuestions: async (limit: number) => {
          const res = await fetch("http://localhost:5173/data.json");
          const json = await res.json();

          const questions = json
            .sort(() => Math.random() - 0.5)
            .slice(0, limit);
          set({ questions });
        },

        selectAnswer: (questionId: number, answerIndex: number) => {
          // obtenemos las preguntas del estado
          const { questions } = get();

          // clonamos las preguntas para no mutar el estado
          const newQuestions = structuredClone(questions);

          // buscamos la pregunta que el usuario respondió
          const questionIndex = newQuestions.findIndex(
            (q) => q.id === questionId
          );

          // obtenemos la pregunta
          const questionInfo = newQuestions[questionIndex];

          // verificamos si la respuesta del usuario es correcta
          const isCorrectUserAnswer =
            questionInfo.correctAnswer === answerIndex + 1;

          if (isCorrectUserAnswer) {
            confetti();
          }

          // cambiamos el estado de la pregunta
          newQuestions[questionIndex] = {
            ...questionInfo,
            userSelectedAnswer: answerIndex,
            isCorrectUserAnswer,
          };

          // actualizamos el estado
          set({ questions: newQuestions });
        },

        goToNextQuestion: () => {
          const { currentQuestionIndex, questions } = get();

          if (currentQuestionIndex < questions.length - 1) {
            set({ currentQuestionIndex: currentQuestionIndex + 1 });
          }
        },
        goToPreviousQuestion: () => {
          const { currentQuestionIndex } = get();

          if (currentQuestionIndex > 0) {
            set({ currentQuestionIndex: currentQuestionIndex - 1 });
          }
        },
        reset: () => {
          set({ questions: [], currentQuestionIndex: 0 });
        },

        setScore: (score: number) => {
          set({ score });
        },
      };
    },
    { name: "questions" }
  )
);
