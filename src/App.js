import './App.css';
import img from './10219.jpg';
import { useState, useEffect } from 'react';
function App() {
  const [pizzaCount, setPizzaCount] = useState(0);
  const [discount, setDiscount] = useState(0);
  const [isChecked, setIsChecked] = useState(false);
  const [topay, setToPay] = useState(0);
  const [total, setTotal] = useState(0);
  const handleChange = () => {
    setIsChecked(!isChecked);
  }
  const handleDiscountChange = (event) => {
    event.preventDefault();
    if (event.target.value >= 0 && event.target.value <= 60) {
      setDiscount(event.target.value);
    }
    else {
      alert("Please enter a value between 0 and 61")
    }
  }
  const handleClick = (pizzaC) => {
    console.log("Curr Pizza Count" + pizzaC);
    if (pizzaC >= 0) {
      setPizzaCount(pizzaC);
    }
  }
  useEffect(() => {
    if (isChecked) {
      setTotal((50 + 5) * pizzaCount);
    } else {
      setTotal(50 * pizzaCount);
    }
    setToPay(total - total * (discount / 100));
  }, [pizzaCount, discount, isChecked, total]);

  return (
    <div className="App">
      <div className='header'>
        <h1>Pizza ABC</h1>
        <div>We are currently serving one pizza only. Please taste and review.</div>
        <div className='h-flex'>
          <div>
            <div>Add Quantity</div>
            <div className='h-flex'>
              <button onClick={() => handleClick(pizzaCount - 1)}>-</button>
              <div>{pizzaCount}</div>
              <button onClick={() => handleClick(pizzaCount + 1)}>+</button>
            </div>
            <div className='h-flex'>
              <input type="checkbox" disabled={pizzaCount <= 0} name="Add ons" value={isChecked} onChange={() => handleChange(isChecked)} /><div>Add ons</div>
            </div>
          </div>
          <img src={img} />
        </div>
      </div>
      <div className='flexend'>
        <div>
          <div>Total: ${(Math.round(total * 100) / 100).toFixed(2)}</div>
          <div className='aqua'>Discount: <input className='border aqua' type="number" placeholder='0' value={discount} onChange={handleDiscountChange} /> </div>
          <div className='red'>Topay:  {(Math.round(topay * 100) / 100).toFixed(2)}</div>
        </div>
      </div>

    </div>
  );
}

export default App;
