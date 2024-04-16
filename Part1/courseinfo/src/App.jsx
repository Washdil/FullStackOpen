function Header(props) {
  
  return (
    <h1>{props.courseName}</h1>  
  )
}

function Part(props) {
  return (
    <p>{props.partName} {props.exerciseName}</p>
  )
}

function Total(props) {
  return (
    <p>Number of exercises {props.exer1 + props.exer2 + props.exer3}</p>
  )
}


function App() {
  const course = "Half Stack application development";
  const part1 = "Fundamentals of React";
  const exercise1 = 10;
  const part2 = "Using props to pass data";
  const exercise2 = 7;
  const part3 = "State of a component";
  const exercise3 = 14;
  return (
    <div>
      <Header courseName = {course}/>
      
      <Part partName = {part1} exerciseName = {exercise1}/>
      <Part partName = {part2} exerciseName = {exercise2}/>
      <Part partName = {part3} exerciseName = {exercise3}/>

      <Total
      exer1 = {exercise1}
      exer2 = {exercise2}      
      exer3 = {exercise3}
      />
    </div>
  )
}

export default App
