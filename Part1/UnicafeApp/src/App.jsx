/* eslint-disable react/prop-types */
import { useState } from 'react'

const Button = ({handleClick,text}) => {
  return (
    <button onClick={handleClick}>{text}</button>
  )
}

const StatisticLine = ({text,value}) =>{
  return (
      <tr>
        <td>{text} :</td>
        <td>{value}</td>
      </tr> 
  )
}

const Statistics = ({goodFeedback,neutralFeedback,badFeedback,totalFeedback,avgScore,positivePercentage})=>{
  if(totalFeedback===0){
    return(
      <p>No feedback given!</p>
    )
  }
  return (
    <table>
      <tbody>
        <StatisticLine text="Good" value={goodFeedback}/>
        <StatisticLine text="Neutral" value={neutralFeedback}/>
        <StatisticLine text="Bad" value={badFeedback}/>
        <StatisticLine text="All" value={totalFeedback}/>
        <StatisticLine text="Average" value={avgScore}/>
        <StatisticLine text="Positives" value={positivePercentage}/>
      </tbody>
    </table>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [total,setTotal] = useState(0)
  const [avg,setAvg] = useState(0)
  const [positivePercentage,setPositivePercentage] = useState(0)

  // the average score (good: 1, neutral: 0, bad: -1)
  const clickGood = ()=>{
    let updatedGood=good+1
    setGood(updatedGood)

    let total=updatedGood+neutral+bad
    setTotal(total)

    setAvg((updatedGood-bad)/total)

    let positivePercentage=(updatedGood/total)*100
    setPositivePercentage(positivePercentage)
  }

  const clickNeutral = ()=>{
    let updatedNeutral=neutral+1
    setNeutral(updatedNeutral)

    let total=good+updatedNeutral+bad
    setTotal(total)

    setAvg((good-bad)/total)

    let positivePercentage=(good/total)*100
    setPositivePercentage(positivePercentage)
  }

  const clickBad = ()=>{
    let updatedBad=bad+1
    setBad(updatedBad)

    let total=good+neutral+updatedBad
    setTotal(total)

    setAvg((good-updatedBad)/total)
    
    let positivePercentage=(good/total)*100
    setPositivePercentage(positivePercentage)
  }
  


  return (
    <div>
      <h1>Give Feedback</h1>
      <Button handleClick={clickGood} text="Good"/>
      <Button handleClick={clickNeutral} text="Neutral"/>
      <Button handleClick={clickBad} text="Bad"/>
      
      <h2>Statistics</h2>
      <Statistics goodFeedback={good} neutralFeedback={neutral} badFeedback={bad} totalFeedback={total} avgScore={avg.toFixed(2)} positivePercentage={positivePercentage.toFixed(2)}/>
      
    </div>
  )
}

export default App