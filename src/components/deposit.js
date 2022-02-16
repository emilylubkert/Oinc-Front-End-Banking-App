import { useState } from 'react';
import Card from './Card';
import TransactionList from './TransactionList';
import { useAuth } from '../contexts/authContext';
import ContactButton from './ContactButton';
import '../components.css'

function Deposit() {
  const auth = useAuth();
  const [show, setShow] = useState(true);
  const [deposit, setDeposit] = useState('');
  const [currentBalance, setCurrentBalance] = useState(auth.user.balance);
  const [isValid, setIsValid] = useState(false);

  function handleChange(event) {
    setDeposit(Number(event.target.value));
    if (deposit < 0) {
      alert('Deposit amount must be a positive number');
      setDeposit('');
      return setIsValid(false);
    } else if (isNaN(deposit)) {
      alert('Deposit amount must a number');
      return setIsValid(false);
    } else {
      console.log('Valid Transaction');
      setIsValid(true);
    }
  }

  function handleDeposit() {
    let newBalance = currentBalance + deposit;
    auth.user.balance = newBalance;
    setCurrentBalance(newBalance);
    saveTransaction(newBalance);

    setShow(false);
    setDeposit('');
    setIsValid(false);
  }

  function clearForm() {
    setDeposit('');
    setShow(true);
  }

  function saveTransaction(total) {
    let today = new Date();
    let date = `${
      today.getMonth() + 1
    }-${today.getDate()}-${today.getFullYear()}`;
    let newTransaction = {
      date: `${date}`,
      amount: `$${deposit}`,
      type: 'Deposit',
      balance: `$${total}`,
    };
    auth.user.transactions.push(newTransaction);
  }

  return (
    <>
      <Card
        className='deposit-withdraw-card'
        bgcolor='light'
        txtcolor='black'
        header='Make A Deposit'
        title={`Your balance is $${auth.user.balance}.`}
        body={
          show ? (
            <>
              Deposit Amount
              <br />
              <input
                type='number'
                className='form-control'
                id='deposit'
                placeholder='Enter deposit amount'
                value={deposit}
                onChange={handleChange}
              />
              <br />
              <input
                type='submit'
                className='btn btn-dark'
                onClick={handleDeposit}
                disabled={!isValid}
              />
            </>
          ) : (
            <>
              <div className='deposit-withdraw-card'>
                <h5>Success! Deposit received.</h5>
                <button
                  type='submit'
                  className='btn btn-dark'
                  onClick={clearForm}
                >
                  Make Another Deposit
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

export default Deposit;
