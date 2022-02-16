import '../components.css'

const TransactionList = ({ transactions }) => {
    const newRow = transactions.map((item, index) => {
      return (
        <tr key={index}>
          <td>{item.date}</td>
          <td>{item.amount}</td>
          <td>{item.type}</td>
          <td>{item.balance}</td>
        </tr>
      );
    });
    return newRow;
  };

  export default TransactionList;