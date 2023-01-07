import { useContext } from 'react'
import { QuizContext } from '../contexts/quiz'
import Question from './Question'

const Quiz = () => {
  const [quizState, dispatch] = useContext(QuizContext)
  console.log('quizState', quizState)

  return (
    <div className="quiz">
      {quizState.showResults && (
        <div className="results">
          {quizState.correctAnswerCount >= 8 ? <div className="congratulations">Congratulations!</div> : <div className='study-more'>Sorry you should study more!
          <p>Your level is begginer</p>
          </div>}
          <div className="results-info">
            <div>You have completed the quiz.</div>
            <div>You've got {quizState.correctAnswerCount} of{" "} {quizState.questions.length} right.</div>
            <div className="next-button" onClick={() => dispatch({type:"RESTART"})}>Restart</div>
          </div>
        </div>
      )}
      {!quizState.showResults && (
        <div>
          <div className="score">
            Question {quizState.currentQuestionIndex + 1} /{' '}
            {quizState.questions.length}
          </div>
          <Question />
          <div
            className="next-button"
            onClick={() => dispatch({ type: 'NEXT_QUESTION' })}
          >
            Next Question
          </div>
        </div>
      )}
    </div>
  )
}

export default Quiz
