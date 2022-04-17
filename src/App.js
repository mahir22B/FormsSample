import './App.css';
import { Button } from '@mui/material';
import { useState } from 'react';
import Edit from './Edit/Edit'

function App() {

  const [comp, setComp] = useState(true);

  const [fe, setFe] = useState('React');
  const [be, setBe] = useState('NodeJs');
  const [db, setDb] = useState('Mongo');
  const [com, setCom] = useState('Intel');

  const showEdit = () => {
    setComp(!comp);
  }

  const getFe = (childdata) => {
    setFe(childdata);
  }
  const getBe = (childdata) => {
    setBe(childdata);
  }
  const getDb = (childdata) => {
    setDb(childdata);
  }
  const getCom = (childdata) => {
    setCom(childdata);
  }

  return (
    <>
    {comp ? 
    <>
    <div className="App">
      <span>{fe}</span>
      <span>{com}</span>
      <span>{be}</span>
      <span>{db}</span>
    </div>
    <Button style={{color: "#0071c5"}} variant = "contained" className='btn' onClick={showEdit}>Edit</Button></>
    : <Edit onStateChange={showEdit} getFe={getFe} getBe={getBe} getDb={getDb} getCom={getCom} fe={fe} com={com} be={be} db={db} />
    }
    </>
  );
}

export default App;
