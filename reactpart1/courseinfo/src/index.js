import React from 'react'
import ReactDOM from 'react-dom'

const Header = ({course}) => <h1>{course}</h1>
const Part = ({msjPart, numPart}) => <p>{msjPart} {numPart}</p>
const Content = ({parts, exes}) => {
  return (
    <div>
      <Part msjPart={parts.part1} numPart={exes.part1} />
      <Part msjPart={parts.part2} numPart={exes.part2} />
      <Part msjPart={parts.part3} numPart={exes.part3} />
    </div>
  )
}

const Total = ({exes}) => <p>Number of exercises: {exes.part1 + exes.part2 + exes.part3}</p> 

const App = () => {
  const course = 'Half Stack application development'

  const parts = {
    part1: 'Fundamentals of React',
    part2: 'Using props to pass data',
    part3: 'State of a component'
  }
  const exes = {
    part1 : 10,
    part2: 7,
    part3: 10
  }

  return (
    <div>
      <h1><Header course={course}/></h1>
      <Content parts={parts} exes={exes} />
      <Total exes={exes} />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))