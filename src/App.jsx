import {  Route, Routes } from "react-router-dom";

import './App.css'
import LoginForm from './components/LoginForm'
import PasswordFindForm from './components/PasswordFindForm';
import SpinnerTest from './components/SpinnerTest';
import SignupForm from "./components/SignupForm";

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<LoginForm />} />
        <Route path='/pw' element={<PasswordFindForm />} />
        <Route path='/test' element={<SpinnerTest />} />
      </Routes>
      <SignupForm />
    </>
  );
};

export default App
