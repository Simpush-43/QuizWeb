import React,{useState} from "react";
import { useNavigate } from "react-router-dom";
import type {Player} from '../App'
import {questions} from '../Questions/questions'
import type { Question } from "../Questions/questions";
type Props ={
  player:Player;
  onQuizEnd:(score:number,totalQuestions:number)=>void;
};
const QuizScreen: React.FC<Props> = ({player,onQuizEnd})=>{
  const [index,setindex]= useState(0);
  const [score,setscore]= useState(0);
  const [selected,setselected] = useState<string | null>(null);
  const [locked,setlocked] = useState(false);
  const navigate = useNavigate();
  const current : Question= questions[index];
  const handleSelect = (option:string)=>{
    if(locked) return;
    setselected(option);
    setlocked(true);
    if(option === current.answer){
      setscore(prev=>prev+2);
    }else{
      setscore(prev=>prev-1);
    }
  };
  const handleNext = ()=>{
    if(index === questions.length -1){
      onQuizEnd(score,questions.length);
      navigate('/result');
      return
    }
    setindex(prev=>prev+1);
    setselected(null);
    setlocked(false);
  };
  const getOptionStyle = (option:string):React.CSSProperties=>{
    if(!locked){
      return styles.option;
    }
    if(option === selected && selected !== current.answer){
      return {...styles.option,...styles.wrong}
    }
    if(option === selected && selected === current.answer){
      return {...styles.option,...styles.correct}
    }
    // other stay normal
    return styles.option;
  }
  return(
    <>
    <div style={styles.container}>
      {/* Top bar */}
      <div style={styles.topBar}>
        <span style={styles.info}>{player.name}</span>
        <span style={styles.info}>Score: {score}</span>
        <span style={styles.info}>
          Q {index + 1}/{questions.length}
        </span>
      </div>

      {/* Question */}
      <div style={styles.questionBox}>
        <p style={styles.question}>{current.question}</p>
      </div>

      {/* Options */}
      <div style={{ marginTop: 20 }}>
        {current.options.map(opt => (
          <div key={opt} style={{ margin: '8px 0' }}>
            <button
              style={getOptionStyle(opt)}
              onClick={() => handleSelect(opt)}
              disabled={locked}
            >
              {opt}
            </button>
          </div>
        ))}
      </div>

      {/* Next */}
      <button
        style={{
          ...styles.nextBtn,
          opacity: locked ? 1 : 0.5,
          cursor: locked ? 'pointer' : 'not-allowed',
        }}
        onClick={handleNext}
        disabled={!locked}
      >
        {index === questions.length - 1 ? 'See Result' : 'Next'}
      </button>
    </div>
    </>
  )
}
export default QuizScreen;
const styles : {[key:string]:React.CSSProperties}={
 container: {
    height: '100vh',
    backgroundColor: '#192a56',
    padding: 20,
    color: '#fff',
  },
  topBar: {
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  info: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  questionBox: {
    backgroundColor: '#273c75',
    borderRadius: 15,
    padding: 20,
  },
  question: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  option: {
    width: '100%',
    backgroundColor: '#40739e',
    borderRadius: 15,
    padding: '12px 16px',
    border: 'none',
    color: '#fff',
    fontSize: 18,
    textAlign: 'left',
    cursor: 'pointer',
  },
  correct: {
    backgroundColor: '#44bd32',
  },
  wrong: {
    backgroundColor: '#e84118',
  },
  nextBtn: {
    marginTop: 25,
    width: '100%',
    backgroundColor: '#e1b12c',
    borderRadius: 20,
    padding: '12px 16px',
    border: 'none',
    fontSize: 18,
    fontWeight: 'bold',
  }, 
}