import React, { useState } from "react";

const Calculator = () => {

  const [gross, setGross] = useState(0);
  const [tax, setTax] = useState(0);
  const [hi, setHi] = useState(0);
  const [net, setNet] = useState(0);

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

  const addCommas = (num) => {
    return num.toLocaleString("en-US");
  }

  return (
    <div>
      <label className="">
      <input 
        id="input"
        type="number"
        min="0"
        placeholder="Enter Gross Salary"
        className="mb-6 p-2 border-black text-black rounded-md bg-sky-100 hover:bg-sky-300"
        onChange={(e)=> setGross(+e.target.value)}/>
      </label>
      <div className="flex justify-center ">
        <button 
          className=" bg-sky-800 text-white hover:bg-sky-400 px-4 py-2 rounded-lg mr-2"
          onClick={()=> handleCalculate(grossCopy)}>
            Calculate
        </button>
        <button 
          className="bg-sky-800 text-white hover:bg-sky-400 px-4 py-2 rounded-lg mr-2"
          onClick={handleClear}>
            Reset
        </button>
      </div>
      <div className="grid bg-emerald-800 w-1/2 mt-6 rounded-lg text-white text-lg mx-auto">
        <p className="p-2 sm:mx-14 hover:bg-emerald-500 rounded-md">Gross: $ {addCommas(gross)}</p>
        <p className="p-2 sm:mx-14 hover:bg-emerald-500 rounded-md">Tax: $ {addCommas(tax)}</p>
        <p className="p-2 sm:mx-14 hover:bg-emerald-500 rounded-md">HI: $ {addCommas(hi)}</p>
        <p className="p-2 sm:mx-14 hover:bg-emerald-500 rounded-md">Net: $ {addCommas(net)}</p>
      </div>

      <div className="bg-violet-700 mx-auto mt-6 w-1/2 rounded-lg p-2">
        <h4 className="text-lg font-bold">Tax and Health Insurance Rates</h4>
        <p className="text-left"><span className="font-semibold">First $15,000:</span> No Tax or HI rates to be paid.</p>
        <p className="text-left"><span className="font-semibold">Amounts above $15,000 and less than $50,000:</span> 20% Tax and 12% HI.</p>
        <p className="text-left"><span className="font-semibold">Any amount above $50,000:</span> 40% Tax and 2% HI.</p>
      </div>
    </div>
  )
}

export default Calculator;
