import React from 'react'
import ReactDOM from 'react-dom'
const App = () => {
	const courses = [
		{
		  name: 'Half Stack application development',
		  id: 1,
		  parts: [
			{
			  name: 'Fundamentals of React',
			  exercises: 10,
			  id: 1
			},
			{
			  name: 'Using props to pass data',
			  exercises: 7,
			  id: 2
			},
			{
			  name: 'State of a component',
			  exercises: 14,
			  id: 3
			},
			{
			  name: 'Redux',
			  exercises: 11,
			  id: 4
			}
		  ]
		}, 
		{
		  name: 'Node.js',
		  id: 2,
		  parts: [
			{
			  name: 'Routing',
			  exercises: 3,
			  id: 1
			},
			{
			  name: 'Middlewares',
			  exercises: 7,
			  id: 2
			}
		  ]
		}
	  ]
	return(<> 
		{courses.map((course) =>{
			return <Course course={course} />
		})}
	</>)
}
const Course =({course})=>{
	return(
	<>
		<Header name={course.name} />
		<Content parts={course.parts} />
		<Suma parts={course.parts}/>
	</>)
}
const Header =({name})=>{
	return(
		<h1>{name}</h1>
	)
}
const Content=({parts})=>{
	return (
		<>
			{parts.map((part) => {
				return(
				<Part name={part.name} exercise={part.exercises}/>
				)
			})}
		</>
	)
}
const Part = ({name,exercise})=>{
	return(
		<p>
		{name} {exercise}
		</p>
	)
}
const Suma = ({parts})=>{
	return(
	  <p>Number of exercises {parts.reduce((sum, part) => ( sum + part.exercises), 0)}</p>
	)
  }
ReactDOM.render(<App />, document.getElementById('root'))