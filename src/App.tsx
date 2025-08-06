import { Home } from './pages/Home'
import { TaskContextProvider } from './components/contexts/TaskContexts/TaskContextProvider'

import './styles/theme.css'
import './styles/global.css'
import { MessagesContainers } from './components/MessagesContainers'

export function App() {
  return (
    <TaskContextProvider>
      <MessagesContainers>
        <Home />
      </MessagesContainers>
    </TaskContextProvider>
  )
}
