import { BrowserRouter,Routes, Route } from "react-router-dom";
import ProtectedRouter from "./Components/ProtectedRoute.jsx";
import Dashboard from "./Components/Dashboard.jsx";
import Login from './Components/Login.jsx'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
        <Route path="/" element={<Login />} />
        <Route
          path="/Dashboard"
          element={
            <ProtectedRouter>
              <Dashboard />
            </ProtectedRouter>
          } />
          </Routes>
      </BrowserRouter>
    </>
  );
}

export default App
