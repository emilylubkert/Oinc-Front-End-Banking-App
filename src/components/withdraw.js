import { useState } from 'react';
import Card from './Card'
import ContactButton from './ContactButton';
import TransactionList from './TransactionList';
import { useAuth } from '../contexts/authContext';
import '../components.css'

function Withdraw() {
  const auth = useAuth();
  const [show, setShow] = useState(true);
  const [withdraw, setWithdraw] = useState('');
  const [currentBalance, setCurrentBalance] = useState(auth.user.balance);
  const [isValid, setIsValid] = useState(false);

  const handleChange = (event) => {
    setWithdraw(Number(event.target.value));
    if (withdraw < 0) {
      alert('Withdrawal amount must be a positive number');
      setWithdraw('');
      return setIsValid(false);
    } else {
      setIsValid(true);
    }
  };

  function handleWithdraw() {
    console.log(`withdrawal is ${withdraw}`);
    if (withdraw > currentBalance) {
      alert('Insufficient Funds');
      setWithdraw('');
      return setIsValid(false);
    }
    let newBalance = currentBalance - withdraw;
    auth.user.balance = newBalance;
    setCurrentBalance(newBalance);
    saveTransaction(newBalance);
    setShow(false);
    setIsValid(false);
  }

  function clearForm() {
    setWithdraw('');
    setShow(true);
  }

  function saveTransaction(total) {
    let today = new Date();
    let date = `${
      today.getMonth() + 1
    }-${today.getDate()}-${today.getFullYear()}`;
    let newTransaction = {
      date: `${date}`,
      amount: `$${withdraw}`,
      type: 'Withdrawal',
      balance: `$${total}`,
    };
    auth.user.transactions.push(newTransaction);
  }

  return (
    <>
      <Card
        
        bgcolor='light'
        txtcolor='black'
        header='Withdraw Funds'
        title={`Your balance is $${auth.user.balance}.`}
        body={
          show ? (
            <>
              Withdrawal Amount
              <br />
              <input
                type='number'
                className='form-control'
                id='withdraw'
                placeholder='Enter withdrawal amount'
                value={withdraw}
                onChange={handleChange}
              />
              <br />
              <input
                type='submit'
                className='btn btn-dark'
                onClick={handleWithdraw}
                disabled={!isValid}
              />
            </>
          ) : (
            <>
            <div className='deposit-withdraw-card'>
              <h5>Success! Withdraw processed.</h5>
              <button
                type='submit'
                className='btn btn-dark'
                onClick={clearForm}
              >
                Withdraw More Money
              </button>
              </div>
            </>
          )
        }
      />
      <table className='transaction-list'>
        <thead>
          <tr>
            <th>Date</th>
            <th>Amount</th>
            <th>Type</th>
            <th>Account Balance</th>
          </tr>
        </thead>
        <tbody>
          <TransactionList transactions={auth.user.transactions} />
        </tbody>
      </table>
      <ContactButton />
    </>
  );
}

export default Withdraw;
