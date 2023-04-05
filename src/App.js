import "./App.css";
import LocalStorage from "./Component/LocalStorage";
import NavBar from "./Component/NavBar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sum from "./Component/Sum";
import FComponent from "./Component/FComponent";
import CComponent from "./Component/CComponent";
import Error from "./Component/Error";
import Counter from "./Component/Counter";


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
          <Route exact path="*" element={<Error />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
