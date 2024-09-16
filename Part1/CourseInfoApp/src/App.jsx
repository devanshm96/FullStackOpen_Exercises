/* eslint-disable react/prop-types */
function Header(props){
  return (
    <>
      <h1>{props.course}</h1>
    </>
  )
}

function Content(props){
  console.log(props);

  return(
    <>
    <p>This is - {props.parts[0].name} module with {props.parts[0].exercises} exercises</p>
    <p>This is - {props.parts[1].name} module with {props.parts[1].exercises} exercises</p>
    <p>This is - {props.parts[2].name} module with {props.parts[2].exercises} exercises</p>
    </>
  )
}

function Total(props){
  if (!props.parts) {
    return <p>No parts available</p>; // Added safety check
  }

  let totalExercises=0;

  props.parts.forEach(ele => {
    totalExercises+=ele.exercises;
  });

  return(
    <>
      <p>Total number of exercises: {totalExercises}</p>
    </>
  )
}

const App = () => {
  const course = 'Half Stack application development'
  const parts = [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]

  return (
    <div>
      <Header course={course}/>
      <Content parts={parts}/>
      <Total parts={parts}/>
    </div>
  )
}

export default App