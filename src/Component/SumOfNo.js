import React, { useState } from "react";

export default function SumOfNo() {

    const [myData, myDataUpdate] = useState({});
    const [ans, setAnsValue] = useState(0);

  const onChangeEvent =(e) =>{
    myDataUpdate((myData)=>({
        ...myData,
        [e.target.name] : e.target.value
    }));
  }

  const submitValue = (event) => {
    var c = parseInt(myData.text1) + parseInt(myData.text2);
    setAnsValue(c);
    alert(`Sum is :` +c);
    event.preventDefault();
  };
  return (
    <div className="container my-5">
      <form onSubmit={submitValue}>
        No1:
        <input type="text" name='text1' onChange={onChangeEvent} />
        No2:
        <input type="text"  name='text2'onChange={onChangeEvent} />
        <input type="submit" /><br/><br/>
        Answer : {ans}
      </form>
    </div>
  );
}
