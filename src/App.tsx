import { Home } from './pages/Home'
import { TaskContextProvider } from './components/contexts/TaskContexts';

import './styles/theme.css'
import './styles/global.css'

export function App() {
  return (
    <TaskContextProvider>
      <Home />
    </TaskContextProvider>
  )
}
