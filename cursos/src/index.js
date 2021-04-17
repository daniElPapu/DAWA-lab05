import React from 'react'
import ReactDOM from 'react-dom'
const App = () => {
	const course = {
		id: 1,
		name: 'Half Stack application development',
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
		}
		]
	}
	return <Course course={course} />
}
const Course =({course})=>{
	return(
	<>
		<Header name={course.name} />
		<Content parts={course.parts} />
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
ReactDOM.render(<App />, document.getElementById('root'))