import Card from './Card'
import TransactionList from './TransactionList';
import { useAuth } from '../contexts/authContext';
import ContactButton from './ContactButton';
import '../components.css'

function Dashboard() {
  const auth = useAuth();

  return (
    <><Card
      className='balance-card'
      bgcolor='light'
      txtcolor='black'
      header={`Hi ${auth.user.name}`}
      title={`Your balance is $${auth.user.balance}.`} />
      <h4>Recent Transactions</h4>
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

export default Dashboard;
