import React,{useState,useContext}from 'react';
import {QuizContext} from '../Helpers/Contexts';
import {Questions} from "../Helpers/QuestionBank";


export default function Quiz() {
    const[currQuestion,setCurrQuestion]=useState(0);
    const[optionChosen,setOptionchosen]=useState("");
    const {score,setScore,setGameState}=useContext(QuizContext);
    const nextQuestion=()=>{
 if(Questions[currQuestion].answer===optionChosen){
  setScore(score+1);
 }
 setCurrQuestion(currQuestion+1);
    }
    const finishQuiz=()=>{
      if(Questions[currQuestion].answer===optionChosen){
        setScore(score+1);
     } setGameState("endScreen");
    }
  return (
    <div className="Quiz">
      <h1>{Questions[currQuestion].prompt}</h1>
      <div className="options">
        <button onClick ={() => setOptionchosen("A")}>{Questions[currQuestion].optionA }</button>
        <button onClick ={() => setOptionchosen("B")}>{Questions[currQuestion].optionB}</button>
        <button onClick ={() => setOptionchosen("C")}>{Questions[currQuestion].optionC}</button>
        <button onClick ={() => setOptionchosen("D")}>{Questions[currQuestion].optionD}</button>
      </div>
      {currQuestion === Questions.length -1 ?(
        <button onClick ={finishQuiz}>Finish Quiz</button>

      ):(
        <button onClick={nextQuestion}>Next Question</button>
      )}
    
    </div>
  );
}
