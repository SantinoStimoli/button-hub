import { apps } from './data/apps'
import { ButtonCard } from './components/ButtonCard'
import { ThemeToggle } from './components/ThemeToggle'
import { useTheme } from './hooks/useTheme'

const App = () => {
  const { toggleTheme } = useTheme()

  return (
    <div className="min-h-screen bg-cream dark:bg-darkblue transition-colors">
      
      <div className="max-w-md mx-auto px-4 py-6">

        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-lg font-semibold tracking-tight dark:text-white">
            Apps
          </h1>

          <ThemeToggle toggle={toggleTheme} />
        </div>

        {/* Grid */}
        <div className="
          grid 
          grid-cols-2 
          gap-4
          sm:grid-cols-3
        ">
          {apps.map(app => (
            <ButtonCard key={app.id} {...app} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default App