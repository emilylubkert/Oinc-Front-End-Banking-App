import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import { useAuth } from '../contexts/authContext';
import '../components.css';

function NavBar() {
  const auth = useAuth();

  const [isNavCollapsed, setIsNavCollapsed] = useState(true);
  const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);

  return (
    <>
      <nav className='navbar navbar-expand-lg navbar-light'>
        <NavLink
          className='navbar-brand'
          exact='true'
          to='/'
          className={({ isActive }) => (isActive ? 'active-style' : 'none')}
          data-toggle='tooltip'
          data-placement='top'
          title='Return to home page'
        >
          oinc Home
        </NavLink>
        <button
          className='custom-toggler navbar-toggler'
          type='button'
          data-toggle='collapse'
          data-target='#navbarsExample09'
          aria-controls='navbarsExample09'
          aria-expanded={!isNavCollapsed ? true : false}
          aria-label='Toggle navigation'
          onClick={handleNavCollapse}
        >
          {' '}
          <span className='navbar-toggler-icon'></span>
        </button>
        <div
          className={`${isNavCollapsed ? 'collapse' : ''} navbar-collapse`}
          id='navbarNav'
        >
          <ul className='navbar-nav'>
            <li className='nav-item'>
              <NavLink
                className='nav-NavLink'
                to='/createaccount'
                className={({ isActive }) =>
                  isActive ? 'active-style' : 'none'
                }
                data-toggle='tooltip'
                data-placement='top'
                title='Make a new account'
              >
                Create Account
              </NavLink>
            </li>
            <li className='nav-item'>
              {!auth.user ? (
                <NavLink
                  className='nav-NavLink'
                  to='/login'
                  className={({ isActive }) =>
                    isActive ? 'active-style' : 'none'
                  }
                  data-toggle='tooltip'
                  data-placement='top'
                  title='Log in to your account'
                >
                  Login
                </NavLink>
              ) : (
                <NavLink
                  className='nav-NavLink'
                  onClick={auth.signout}
                  to='/'
                  className={({ isActive }) =>
                    isActive ? 'active-style' : 'none'
                  }
                  data-toggle='tooltip'
                  data-placement='top'
                  title='Log out of your account'
                >
                  Logout
                </NavLink>
              )}
            </li>
            <li className='nav-item'>
              <NavLink
                className='nav-NavLink'
                to='/dashboard'
                className={({ isActive }) =>
                  isActive ? 'active-style' : 'none'
                }
                data-toggle='tooltip'
                data-placement='top'
                title='View recent transactions'
              >
                Dashboard
              </NavLink>
            </li>
            <li className='nav-item'>
              <NavLink
                className='nav-NavLink'
                to='/deposit'
                className={({ isActive }) =>
                  isActive ? 'active-style' : 'none'
                }
                data-toggle='tooltip'
                data-placement='top'
                title='Make a deposit'
              >
                Deposit
              </NavLink>
            </li>
            <li className='nav-item'>
              <NavLink
                className='nav-NavLink'
                to='/withdraw'
                className={({ isActive }) =>
                  isActive ? 'active-style' : 'none'
                }
                data-toggle='tooltip'
                data-placement='top'
                title='Withdraw funds'
              >
                Withdraw
              </NavLink>
            </li>

            <li className='nav-item'>
              <NavLink
                className='nav-NavLink'
                to='/alldata'
                className={({ isActive }) =>
                  isActive ? 'active-style' : 'none'
                }
                data-toggle='tooltip'
                data-placement='top'
                title='View user data'
              >
                AllData
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default NavBar;
