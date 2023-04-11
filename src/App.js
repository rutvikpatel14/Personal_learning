import "./App.css";
import LocalStorage from "./Component/LocalStorage";
import NavBar from "./Component/NavBar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sum from "./Component/Sum";
import FComponent from "./Component/FComponent";
import CComponent from "./Component/CComponent";
import Error from "./Component/Error";
import Counter from "./Component/Counter";
import CounterFunction from "./Component/CounterFunction";
import SumOfNo from "./Component/SumOfNo";
import BgColor from "./Component/BgColor";
import SignupForm from "./Component/SignupForm";
import SignInForm from "./Component/SignInForm";
import MapDemo from "./Component/MapDemo";
import UserInput from "./Component/UserInput";
import Todo from "./Component/TODO";


function App() {
  return (
    <>
      <Router>
        <NavBar />
        <Routes>
          <Route exact path="/" element={<Sum />} />
          <Route exact path="/calculator" element={<Sum />} />
          <Route exact path="/localstorage" element={<LocalStorage />} />
          <Route exact path="/fcomponent" element={<FComponent/>} />
          <Route exact path="/CComponent" element={<CComponent />} />
          <Route exact path="/counter" element={<Counter />} />
          <Route exact path="/counterFunction" element={<CounterFunction />} />
          <Route exact path="/SumOfNo" element={<SumOfNo />} />
          <Route exact path="/BgColor" element={<BgColor />} />
          <Route exact path="/SignupForm" element={<SignupForm />} />
          <Route exact path="/SignInForm" element={<SignInForm />} />
          <Route exact path="/MapDemo" element={<MapDemo />} />
          <Route exact path="/Todo" element={<Todo />} />
          <Route exact path="/UserInput" element={<UserInput />} />
          <Route exact path="*" element={<Error />} />
        </Routes>
      </Router> 
    </>
  );
}

export default App;
