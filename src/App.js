import Quiz  from "./components/Quiz";
import {useEffect, useMemo, useState } from "react";
import "./app.css";
import Timer from "./components/Timer";
import Start from "./components/Start";

function App() {
  const [username,setUsername] = useState(null);
  const [questionNumber,setquestionNumber]=useState(1);
  
  const [stop,setStop]=useState(false);
  const [earned,setEarned] = useState("$ 0")
  const data = [
    {
      id: 1,
      question: "Roles is a company that specilizes in what type of product?",
      answers: [
        {
          text: "phone",
          correct: "false"
        },
        {
          text: "watches",
          correct: "true"
        },
        {
          text: "food",
          correct: "false"
        },
        {
          text: "cosmetics",
          correct: "false"
        }
      ]
    },
    {
      id: 2,
      question: "Who is the owner of Facebook?",
      answers: [
        {
          text: "Mark",
          correct: "true"
        },
        {
          text: "Bezos",
          correct: "false"
        },
        {
          text: "Bill gate",
          correct: "false"
        },
        {
          text: "Amabni",
          correct: "false"
        }
      ]
    },
    {
      id: 3,
      question: "When Pakistan came into being?",
      answers: [
        {
          text: "1978",
          correct: "false"
        },
        {
          text: "1947",
          correct: "true"
        },
        {
          text: "1999",
          correct: "false"
        },
        {
          text:"1950",
          correct:"false"
        }
      ]
    },
        {
          id: 4,
          question:"Best teacher in digital world is?",
          answers: [
            {
             text: "TikTok",
             correct: "false"
            },
            {
              text: "Snack Video",
              correct: "false"
            },
            {
              text:"Youtube",
              correct:"true"
            },
            {
              text:"Instagram",
              correct:"false"
            }
      ],
    }
  ];
   const moneyPyramid = useMemo(()=>
    [ 
      { id: 1, amount: "$ 100"},
    { id: 2, amount: "$ 200"},
    { id: 3, amount: "$ 300"},
    { id: 4, amount: "$ 500"},
    { id: 5, amount: "$ 1000"},
    { id: 6, amount: "$ 100"},
    { id: 7, amount: "$ 2000"},
    { id: 8, amount: "$ 4000"},
    { id: 9, amount: "$ 8000"},
    { id: 10, amount: "$ 16000"},
    { id: 11, amount: "$ 32000"},
    { id: 12, amount: "$ 64000"},
    { id: 13, amount: "$ 250000"},
    ].reverse(), 
  []
  );
  
  useEffect(()=>{
       questionNumber > 1 &&
       setEarned(moneyPyramid.find((m) => m.id === questionNumber - 1).amount);
  },[moneyPyramid,questionNumber]);
  return (
    <div className="app">
      {!username ? (
        <Start setUsername= {setUsername}/>
      ) : ( 
        <div>
        <div className="main">
        {stop ? 
          (<h1 className="endText">You earned : {earned}</h1> 
          ):(
          <div>
        
           <div className="top">
               <div className="timer">
               <Timer 
                    setStop ={setStop} questionNumber={questionNumber}/>
              </div>
           </div>
           <div className="bottom">
               <Quiz
                    data={data} setStop={setStop} questionNumber={questionNumber}
                       setquestionNumber={setquestionNumber} />
            </div>
         </div>
       )}
     </div>
        <div className="pyramid">
          <ul className="moneyList">
          {moneyPyramid.map((m)=>(
           <li className= {questionNumber===m.id ? "moneyListItem active" : "moneyListItem"}>
           <span className="moneyListItemNumber">{m.id}</span>
           <span className="moneyListItemAmount">{m.amount}</span>
        </li>
     ))}
    </ul>
  </div> 
</div>
)}
</div>
 );      
}
        
    

export default App;
