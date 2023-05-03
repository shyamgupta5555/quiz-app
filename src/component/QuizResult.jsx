import React from 'react'

function QuizResult(props) {
  return (
    <>
    <div div className='show-score'>
     Your Score :  {props.score }<br/>
     Total Score : {props.totalScore}

    </div>
    <button onClick={props.tryAgain} id="next-button">Try Again</button>
    </>
  )
}

export default QuizResult
