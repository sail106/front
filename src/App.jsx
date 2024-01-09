import './App.css'
import LoginForm from './components/LoginForm'
import PasswordFindForm from './components/PasswordFindForm';
import { Route, Routes } from "react-router-dom";

function App() {

  return (
    <Routes>
      <Route path='/' element={<LoginForm />} />
      <Route path='/pw' element={<PasswordFindForm />} />
    </Routes>
  )
}

export default App
