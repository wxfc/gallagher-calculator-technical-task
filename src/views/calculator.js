import React, { useState } from "react";

const Calculator = () => {
  // gross, tax, HI, net
  // gross = user input value
  // tax = gross * 0.2 && gross * 0.4
  // HI = gross * 0.12 && gross * 0.02
  // net = gross - tax - HI

  // $15,000 >  : 
  //            net = gross 
  // $15,000 <  :
  //            tax = gross * 0.2
  //            HI = gross * 0.12
  //            net = gross - tax - HI
  // $50,000 <  :
  //            tax = gross * 0.4
  //            HI = gross * 0.02
  //            net = gross - tax - HI

  const [gross, setGross] = useState(0);
  const [grossSetOne, setGrossSetOne] = useState(0); // 15000
  const [grossSetTwo, setGrossSetTwo] = useState(0);  // gross - 15000
  const [grossSetThree, setGrossSetThree] = useState(0); // gross - grossSetTwo
  const [tax, setTax] = useState(0);
  const [hi, setHi] = useState(0);
  const [net, setNet] = useState(0);

  const handleGross = (e) => {
    setGross(e.target.value);
    if (e.target.value < 15000) {
      setGrossSetOne(e.target.value);
    } else if (e.target.value > 15000 && e.target.value <= 50000) {
      // setGrossSetOne(15000);
      setGrossSetTwo(e.target.value - 15000);
      console.log(e.target.value - 15000);
    } else {
      setGrossSetOne(15000);
      setGrossSetTwo(50000 - 15000);
      setGrossSetThree(e.target.value - setGrossSetTwo);
    }
  }



  return (
    <div>
      <input />
      <button onClick={event => handleGross(event)}>Calculate</button>
      <ul>
        <li>Gross: {gross}</li>
        <li>Tax: {tax < 0 ? 0 : tax}</li>
        <li>HI: {hi}</li>
        <li>Net: {net}</li>

        <li>Gross Set One: {grossSetOne}</li>
        <li>Gross Set Two: {grossSetTwo < 0 ? 0 : grossSetTwo}</li>
        <li>Gross Set Three: {grossSetThree < 0 ? 0 : grossSetThree}</li>
      </ul>
    </div>
  )
  



}

export default Calculator;