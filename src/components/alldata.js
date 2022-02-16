import { useUsers } from '../contexts/userContext'
import Card from './Card'
import '../components.css'

function AllData() {
  const ctx = useUsers();

  const UserList = ({users}) => {
    const newRow = users.map((item, index) => {
      return (
        <tr key={index}>
          <td>{item.name}</td>
          <td>{item.email}</td>
          <td>{item.password}</td>
          <td>{`$${item.balance}`}</td>
      </tr>
      )
    });
    return newRow;
  };

  return (
    <Card
      txtcolor="black"
      header="User Data"
      body={
        <table className='user-table'>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Password</th>
              <th>Account Balance</th>
            </tr>
          </thead>
          <tbody>
          <UserList users={ctx.users} />
          </tbody>
        </table>
      }
    />
  );
}

export default AllData;
