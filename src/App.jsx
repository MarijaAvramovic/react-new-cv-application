 import { FullForm } from "./components/FullForm"
 import GeneralInfo from "./components/GeneralInfo"
import Education from "./components/Education"
import Experience from "./components/Experience"
import "./styles/styles.css"
import { useState } from "react"

function App() { 
  const [isVisible, setIsVisible] = useState('false');

if(!isVisible) {
  return(
    <>
    <button onClick={() => setIsVisible(!isVisible)}>CV Builder</button>
      <FullForm />
    </> 
  );
}

  return  (
    <div>
<h1>CV Builder</h1>
<button onClick={() => setIsVisible(!isVisible)}>Cover Letter</button>

      <GeneralInfo />
     <Education />
      <Experience />  
  

    </div>
  )  

       
}

export default App
