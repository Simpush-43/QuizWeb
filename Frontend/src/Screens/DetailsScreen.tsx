import React,{useState} from "react";
import { useNavigate } from "react-router-dom";
import type {Player} from '../App'
type Props ={
  onSavePlayer:(player:Player)=> void;
}

const DetailsScreen : React.FC<Props> = ({onSavePlayer})=>{
  const [name,setname] = useState('');
  const [age,setage]= useState('');
  const navigate = useNavigate();
  const handleContinue = ()=>{
    if(!name.trim()) return;
    onSavePlayer({name,age})
    navigate('/instructions');
  }
  return(
    <>
    <div style={styles.container}>
      <div style={styles.card}>
        <h2 style={styles.title}>Enter Details</h2>
        <input type="text" style={styles.input} 
        placeholder="Enter name"
        value={name}
        onChange={(e)=>setname(e.target.value)}
        />
        <input type="text" 
        placeholder="Enter age"
        value={age}
        onChange={(e)=>setage(e.target.value)}
        />
        <button style={styles.button} onClick={handleContinue}>
          Continue
        </button>
      </div>
    </div>
    </>
  )
};
export default DetailsScreen;
const styles : {[key:string]:React.CSSProperties}={
container: {
    height: '100vh',
    backgroundColor: '#dfe6e9',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  card: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 20,
    boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
    width: '100%',
    maxWidth: 400,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    width: '100%',
    padding: 10,
    margin: '8px -10px',
    borderRadius: 12,
    border: '1px solid #b2bec3',
    fontSize: 16,
  },
  button: {
    width: '100%',
    padding: 12,
    marginTop: 15,
    borderRadius: 25,
    border: 'none',
    backgroundColor: '#00b894',
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    cursor: 'pointer',
  },
}