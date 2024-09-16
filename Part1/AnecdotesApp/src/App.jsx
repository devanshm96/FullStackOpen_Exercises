import { useState } from 'react'

const Button=({handleClick,text})=>{
  return (
    <button onClick={handleClick}>{text}</button>
  )
}
function App() {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]

  const [selected,setSelected] = useState(0)
  const [votes, setVotes] = useState(new Array(anecdotes.length).fill(0))

  const getRandomAnecdote = () =>{
    let randomIdx = Math.floor(Math.random()*anecdotes.length)
    // console.log(anecdotes[randomIdx]);
    setSelected(randomIdx)
  }
  /** Creates a shallow copy of the votes array.
  The spread operator (...) spreads the elements of votes into a new array, votesCopy. This ensures we are not directly mutating the original votes array (which is important in React for state immutability).
   */
  const voteAnecdote = () =>{
    const votesCopy=[...votes]
    votesCopy[selected]+=1
    setVotes(votesCopy)
  }

  const highestVotes=Math.max(...votes)
  const highestVotedIndex=votes.indexOf(highestVotes)

  return (
    <>
    <h1>Anecdote of the Day</h1>
      <p>{anecdotes[selected]}</p>
      <p>has {votes[selected]} votes</p>
      <Button handleClick={voteAnecdote} text="Vote"/>
      <Button handleClick={getRandomAnecdote} text="Next Anecdote"/>
    <h2>Anecdote with Most Votes</h2>
    {
      highestVotes>0?(
        <>
          <p>{anecdotes[highestVotedIndex]}</p>
          <p>Has {highestVotes} votes!</p>
        </>
      ) : (
        <p>No votes yet.</p>
      )
    }
    </>
  )
}

export default App
