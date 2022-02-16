import { useState } from 'react';
import { useUsers } from '../contexts/userContext'

function useProvideAuth() {
  const [user, setUser] = useState(null);
  const ctx = useUsers();

  const signin = (email, password) => {
    let loginUser = ctx.users.find(
      (user) => user.email === email && user.password === password
    );
    if (loginUser) {
      console.log('valid user');
      console.log('currentUser is ' + loginUser.name);
      setUser(loginUser);
    } else {
      console.log('Please create an account first.');
    }
  };

  const signout = () => {
    setUser(null);
  };

  return {
    user,
    setUser,
    signin,
    signout,
  };
}

export default useProvideAuth;
