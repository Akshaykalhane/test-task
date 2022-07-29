import React from 'react';
import { useState } from 'react';
import './App.css';

const App = () => {

  const employee = [
  {
    date: '29/08/2022',
    amount: '4000',
    payment: 'Card',
    remark: 'Good'
  }
  ];

  const [isperson, setPerson] = useState(employee);
  const [date, setDate] = useState('');
  const [amount, setAmount] = useState('');
  const [selects, setSelects] = useState();
  const [remark, setRemark] = useState('')



  const handleSubmit = (e) => {
    e.preventDefault();
    const id = isperson.length + 1;
    setPerson([...isperson, { id: id,  date: date, amount: amount, payment: selects, remark: remark }])
    setDate('');
    setAmount('');
    setSelects('');
    setRemark('')
    console.log('form submitted')
  }

  const resetBtn=()=>{
    setDate('');
    setAmount('');
    setSelects('');
    setRemark('')
  }


  return (
    <>

      <div className='form-container'>
        <h3>Receipt Details</h3>
        <form onSubmit={handleSubmit}>
          <div className='date-sec'>
            <label for="date">Date<span className='req'>*</span></label>
            <input placeholder='enter date' value={date} name="date" onChange={(e) => setDate(e.target.value)}  />
          </div>
          <div className='amount-div'>
            <label>Amount</label>
            <input placeholder='Enter Amount (in INR)' value={amount} name="amount" onChange={(e) => setAmount(e.target.value)} type="number" required />
          </div>
          <div className='payment-mode'>
            <label>payment Mode</label>
            <select value={selects} onChange={(e) => setSelects(e.target.value)} required>
              <option>Cash</option>
              <option>Card</option>
              <option>UPI</option>
              <option>Net Banking</option>
            </select>
          </div>
          <div class="remark">
            <label >Enter Remark<span className="req">*</span>
            </label>
            <input type="text" placeholder="Enter Remark" value={remark} onChange={(e) => setRemark(e.target.value)} required />
          </div>
          <div className="btn-div">
            <button className="cancel-btn" type='reset' onClick={resetBtn}>Cancel</button>
            <button className="submit-btn">Submit</button>
          </div>
        </form>
      </div>
      <div className='receipt-container'>

        {
          isperson.map((item) => (

            <div className='bill' key={item.id}>
              <p>Date : {item.date}</p>
              <p>Amount : {item.amount}</p>
              <p>Payment Method* : {item.payment}</p>
              <p>remark* : {item.remark}</p>
            </div>

          ))
        }
      </div>
    </>
  )
}

export default App