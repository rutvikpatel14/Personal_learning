import React, { useEffect, useState } from "react";

export default function CounterFunction() {
  const [no, setNo] = useState(0);

  useEffect(()=>{
    console.log("Component loaded");
  },[]);
  return (
    <div className="container my-5">
      <center>
        {no}
        <br></br>
        <button onClick={() => setNo(no + 1)}>increment</button>
        <button onClick={() => setNo(no - 1)}>decrement</button>
      </center>
    </div>
  );
}
