import {  Route, Routes } from "react-router-dom";

import './App.css'
import LoginForm from './components/LoginForm'
import PasswordFindForm from './components/PasswordFindForm';
import SpinnerTest from './components/SpinnerTest';
import SignupForm from "./components/SignupForm";
import Card from "./components/store/Card";
import Navbar from "./components/Navbar";
import GlobalStyles from "../GlobalStyles";

function App() {

  return (
    <>
      <GlobalStyles />
      <Navbar />
      <Card>
        <Routes>
          <Route path='/' element={<LoginForm />} />
          <Route path='/pw' element={<PasswordFindForm />} />
          <Route path='/test' element={<SpinnerTest />} />
        </Routes>
        <SignupForm />
      </Card>
    </>
  );
}

export default App
