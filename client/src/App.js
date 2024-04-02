
import './App.css';
import DecisionButtons from './components/decisionButton';
import InputFields from "./components/InputFields"
import { useState } from "react";

function App() {

  const [submitSuccess, setSubmitSuccess] = useState(false);

  function submitStatus(){
    setSubmitSuccess(true)
  }

  console.log(submitSuccess);

  return (
    <div className="App">
        <InputFields onFormSubmit={submitStatus}/>
        {submitSuccess && <DecisionButtons />}
    </div>
  );
}

export default App;
