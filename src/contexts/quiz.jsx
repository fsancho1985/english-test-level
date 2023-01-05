import { createContext, useReducer } from 'react'
import questions from "../assets/data"

const initialState = {
  questions,
  currentQuestionIndex: 0,
}

const reducer = (state, action) => {
  return state
}

export const QuizContext = createContext()

export const QuizProvider = ({ children }) => {
  const value = useReducer(reducer, initialState)
  return <QuizContext.Provider value={value}>{children}</QuizContext.Provider>
}
