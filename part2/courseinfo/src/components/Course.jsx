const Header = ({ name }) => {
  return (
    <div className="flex items-center gap-3 mb-4">
      <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
        <span className="text-primary material-symbols-outlined" style={{ fontSize: '20px' }}>school</span>
      </div>
      <h2 className="text-slate-900 dark:text-white font-bold text-xl leading-snug">{name}</h2>
    </div>
  )
}

const Part = ({ part }) => {
  return (
    <div className="flex items-center justify-between p-3 bg-slate-50 dark:bg-slate-800/50 rounded-xl">
      <div className="flex items-center gap-3">
        <span className="text-slate-500 dark:text-slate-400 material-symbols-outlined" style={{ fontSize: '18px' }}>article</span>
        <span className="text-slate-700 dark:text-slate-300 font-medium">{part.name}</span>
      </div>
      <span className="text-primary font-bold">{part.exercises}</span>
    </div>
  )
}

const Content = ({ parts }) => {
  return (
    <div className="space-y-2 mb-4">
      {parts.map(part => (
        <Part key={part.id} part={part} />
      ))}
    </div>
  )
}

const Total = ({ parts }) => {
  const total = parts.reduce((sum, part) => sum + part.exercises, 0)

  return (
    <div className="flex items-center justify-between p-4 bg-primary/5 rounded-xl border border-primary/20">
      <span className="text-slate-700 dark:text-slate-300 font-medium">Total exercises</span>
      <span className="text-primary font-bold text-lg">{total}</span>
    </div>
  )
}

const Course = ({ course }) => {
  return (
    <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-700/50 p-6">
      <Header name={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </div>
  )
}

export default Course
