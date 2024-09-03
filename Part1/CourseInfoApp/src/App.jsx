/* eslint-disable react/prop-types */
function Header(props){
  return (
    <>
      <h1>{props.course}</h1>
    </>
  )
}

function Content(props){
  return(
    <>
      <p>Topic: {props.topic}, Exercises: {props.exercises}</p>
    </>
  )
}

function Total(props){
  return(
    <>
      <p>Total number of exercises: {props.total}</p>
    </>
  )
}
const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <div>
      <Header course={course}/>
      <Content topic={part1} exercises={exercises1}/>
      <Content topic={part2} exercises={exercises2}/>
      <Content topic={part3} exercises={exercises3}/>
      <Total total={exercises1 + exercises2 + exercises3}/>
    </div>
  )
}

export default App