import "./App.css";
import NavBar from "./Component/NavBar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sum from "./Component/Sum";
import Error from "./Component/Error";
import Counter from "./Component/ClassComponents/Counter";
import CounterFunction from "./Component/FunctionComponents/CounterFunction";
import SumOfNo from "./Component/FunctionComponents/SumOfNo";
import SignupForm from "./Component/FunctionComponents/SignupForm";
import SignInForm from "./Component/FunctionComponents/SignInForm";
import MapDemo from "./Component/FunctionComponents/MapDemo";
import Todo from "./Component/FunctionComponents/TODO";
import UserInput from "./Component/FunctionComponents/UserInput";
import LocalStorage from "./Component/ClassComponents/LocalStorage"
import AxiosPro from "./Component/FunctionComponents/AxiosPro";
import WeatherApp from "./Component/WeatherApp/WeatherApp";
import Calculator from "./Component/Sum";


function App() {
  return (
    <>
      <Router>
        <NavBar />
        <Routes>
          <Route exact path="/" element={<Sum />} />
          <Route exact path="/calculator" element={<Calculator/>} />
          <Route exact path="/localstorage" element={<LocalStorage />} />
          <Route exact path="/counter" element={<Counter />} />
          <Route exact path="/counterFunction" element={<CounterFunction />} />
          <Route exact path="/SumOfNo" element={<SumOfNo />} />
          <Route exact path="/SignupForm" element={<SignupForm />} />
          <Route exact path="/SignInForm" element={<SignInForm />} />
          <Route exact path="/MapDemo" element={<MapDemo />} />
          <Route exact path="/Todo" element={<Todo />} />
          <Route exact path="/UserInput" element={<UserInput />} />
          <Route exact path="/axiosPro" element={<AxiosPro />} />
          <Route exact path="/weather" element={<WeatherApp />} />
          <Route exact path="*" element={<Error />} />
        </Routes>
      </Router> 
    </>
  );
}

export default App;
