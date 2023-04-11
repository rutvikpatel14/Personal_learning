import { useState } from "react";
import {useNavigate} from "react-router-dom"

const SignUpForm = () => {
  const [email , setEmail]= useState('')
  const [pass , setPass]= useState('')
  const [isSubmitted, setIsSubmitted] = useState(false);
  const navigate =useNavigate();


  const handleSubmit = (event) => {
    event.preventDefault();
    var a=JSON.parse(localStorage.getItem('user'))
    if ( a.email === "" || a.password === "") {
      alert("Please fill out all fields");
      return;
    }
  debugger;
    if (
      email === a.email &&
      pass === a.password
    ) {
      setIsSubmitted(true);
      alert('Login Successful');
      navigate('/calculator')
      
    } else {
      alert("Incorrect name, email, or password");
    }
  };

  return (
    <div className="container my-5">
        <center>
        <form onSubmit={handleSubmit}>
          <div>
            <input type="email" id="email" name="email" placeholder="Enter email" value={email} onChange={(event)=>setEmail(event.target.value)} />
          </div>
          <div>
            <input type="password" id="password" name="password" placeholder="Enter password" value={pass} onChange={(event)=>setPass(event.target.value)} />
          </div>
          <button type="submit" style={{marginTop:'10px'}}>Sign In</button>
        </form>
        </center>
    </div>
  );
};

export default SignUpForm;
