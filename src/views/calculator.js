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
  const [tax, setTax] = useState(0);
  const [hi, setHi] = useState(0);
  const [net, setNet] = useState();

  let grossCopy = Number(gross);
  let grossSetOne
  let grossSetTwo
  let grossSetThree
  let taxableAmount = Number()
  let hiAmount = Number()

  const handleTax = () => {
    if (grossCopy > 15000 && grossCopy < 50001) {
      taxableAmount = grossSetTwo * 0.2;
    } else if (grossCopy > 50000) {
      taxableAmount = 7000 + (grossSetThree * 0.4)
    }
    setTax(taxableAmount);
  }

  const handleHi = () => {
    if (grossCopy > 15000 && grossCopy < 50001) {
      hiAmount = grossSetTwo * 0.12;
    } else if (grossCopy > 50000) {
      hiAmount = 4200 + (grossSetThree * 0.02)
    }
    setHi(hiAmount);
  }

  const handleNet = () => {
    if (grossCopy < 15001) {
      setNet(grossCopy);
    } else if (grossCopy > 15000 && grossCopy < 50001) {
      setNet(grossCopy - (taxableAmount + hiAmount));
    } else if (grossCopy > 50000) {
      setNet(grossCopy - (taxableAmount + hiAmount));
    }
  }


  const handleCalculate = (gr) => {
    if (gr < 15001) {
      grossSetOne = gr
      console.log(grossSetOne)
    } else if (gr > 15000 && gr <= 50000) {
      grossSetOne = 15000
      grossSetTwo = gr - 15000;
      handleTax();
      handleHi();
    } else {
      grossSetOne = 15000;
      grossSetTwo = 35000;
      grossSetThree = gr - 50000;
      handleTax();
      handleHi();
    }
    handleNet();
  }

  const handleClear = () => {
    setGross(0);
    setTax(0);
    setHi(0);
    setNet(0);
    document.getElementById("input").value = "";
  }


  return (
    <div>
        <input 
          id="input"
          type="number"
          min="0"
          onChange={(e)=> setGross(+e.target.value)}/>
          <button onClick={()=> handleCalculate(grossCopy)}>Calculate</button>
          <button onClick={handleClear}>Reset</button>
      <ul>
        <li>Gross: {grossCopy}</li>
        <li>Tax: {tax}</li>
        <li>HI: {hi}</li>
        <li>Net: {net}</li>
      </ul>
    </div>
  )
  



}

export default Calculator;