import { TaskContextProvider } from './components/contexts/TaskContexts/TaskContextProvider'
import './styles/theme.css'
import './styles/global.css'
import { MessagesContainers } from './components/MessagesContainers'
import { MainRouter } from './routers/MainRouter'

export function App() {
  return (
    <TaskContextProvider>
      <MessagesContainers>
        <MainRouter />
      </MessagesContainers>
    </TaskContextProvider>
  )
}
