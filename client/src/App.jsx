import { Route, Routes } from 'react-router-dom'
import NavBar from './components/NavBar'
import Landing from './pages/Landing'
import FormCreateClient from './pages/FormCreateClient'
import ViewClients from './pages/ViewClients'

function App() {

  return (
    <div>
      <NavBar />
      <Routes>
        <Route
          exact
          path='/'
          element={<Landing />}
        />
        <Route
          exact
          path='/create'
          element={<FormCreateClient />}
        />
        <Route
          exact
          path='/view'
          element={<ViewClients />}
        />
      </Routes>
    </div>
  )
}

export default App
