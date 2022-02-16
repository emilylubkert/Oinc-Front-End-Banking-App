import { createContext, useContext } from 'react';

const UserContext = createContext(null);

//wrapper
function UserProvider({ children }) {
  
  let today = new Date();
  let date = `${
    today.getMonth() + 1
  }-${today.getDate()}-${today.getFullYear()}`;

  let signInBonus = {
    date: `${date}`,
    amount: `$10`,
    type: 'Sign Up Credit',
    balance: `$10`,
  }

  return (
    <UserContext.Provider
      value={{
        users: [
          {
            name: 'abel',
            email: 'abel@mit.edu',
            password: 'mysecret',
            balance: 10,
            transactions: [signInBonus]
          },
          {
            name: 'emily',
            email: 'emily@mit.edu',
            password: '12345678',
            balance: 10,
            transactions: [signInBonus]
          },
          {
            name: 'leti',
            email: 'leti@mit.edu',
            password: 'password',
            balance: 10,
            transactions: [signInBonus]
          },
        ],
      }}
    >
      {children}
    </UserContext.Provider>
  );
}

function useUsers() {
  return useContext(UserContext);
}

export { UserProvider, useUsers };
