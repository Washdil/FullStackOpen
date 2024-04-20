function Header(props) {
  return (
    <h1>{props.courseName}</h1>  
  )
}

function Part(props) {
  return (
    <p>
      <strong>{props.part.name}</strong>
      {props.part.exercises}
    </p>
  )
}

function Total(props) {
  const sum = props.parts.reduce((accumulator , current) => accumulator + current.exercises, 0);
  return (
    <div>
      <p><strong>Number of Exercise:</strong> {sum}</p>
    </div>
  )
}

function Content(props) {
  return (
    <div>
    <Part part = {props.parts[0]}/>
    <Part part = {props.parts[1]}/>
    <Part part = {props.parts[2]}/>
    </div>
  )
}



function App() {
  const course = {
    name: "Half Stack application development",

  parts: [
  {
    name: "Fundamentals of React",
    exercises: 10,
  },

  {
    name: "Using props to pass data",
    exercises:7,
  },

  {
    name: "State of a component",
    exercises: 14,
  }
 ]
}
  return (
    <div>
      <Header courseName = {course.name}/>
      
      <Content parts = {course.parts}/>

      <Total parts = {course.parts}/>
    </div>
  )
}

export default App
