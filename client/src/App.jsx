import { Route, Routes } from 'react-router-dom'
import Landing from './components/Landing'
import NavBar from './components/NavBar'
import FormCreateClient from './components/FormCreateClient'
import ViewClients from './components/ViewClients'

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
