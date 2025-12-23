import { useState } from 'react'
import Course from './components/Course'

const App = () => {
  const [darkMode, setDarkMode] = useState(false)

  const toggleDarkMode = () => {
    setDarkMode(!darkMode)
    document.documentElement.classList.toggle('dark')
  }

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

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header Section */}
      <header className="px-6 pt-12 pb-6 flex items-center justify-between">
        <h1 className="text-slate-900 dark:text-white tracking-tight text-4xl font-extrabold leading-tight">
          Course Info
        </h1>
        <button
          onClick={toggleDarkMode}
          className="h-12 w-12 rounded-full bg-white dark:bg-slate-800 shadow-sm border border-slate-100 dark:border-slate-700/50 flex items-center justify-center hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors"
          aria-label="Toggle dark mode"
        >
          <span className="material-symbols-outlined text-slate-600 dark:text-slate-400" style={{ fontSize: '24px' }}>
            {darkMode ? 'light_mode' : 'dark_mode'}
          </span>
        </button>
      </header>

      {/* Course List Section */}
      <section className="flex-1 px-6 pb-12 flex flex-col gap-6">
        {courses.map(course => (
          <Course key={course.id} course={course} />
        ))}
      </section>
    </div>
  )
}

export default App
