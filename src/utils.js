let gross;
let grossCopy = Number(gross);
let grossSetOne
let grossSetTwo
let grossSetThree
let taxableAmount = Number()
let hiAmount = Number()

export const handleTax = (grossCopy, taxableAmount, grossSetThree) => {
  if (grossCopy > 15000 && grossCopy < 50001) {
    taxableAmount = grossSetTwo * 0.2;
  } else if (grossCopy > 50000) {
    taxableAmount = 7000 + (grossSetThree * 0.4)
  }
  return taxableAmount;
}