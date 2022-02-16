import Card from './Card';
import { Link } from 'react-router-dom';
import '../components.css';
import ContactButton from './ContactButton';
import Logo from './Logo';

function Home() {
  return (
    <Logo>
      <Card
        txtcolor='black'
        header='WELCOME TO OIN¢'
        text='Tooth fairy coins,  money from grandma...'
        body={
          <>
            <p>OIN¢ helps keep track of it all.</p>
            <p>Let's get started.</p>
            <div className='btn-container'>
              <Link
                className='btn btn-info btn-lg'
                role='button'
                to='../createaccount'
              >
                Create Account
              </Link>
              <Link className='btn btn-info btn-lg' role='button' to='../login'>
                Log In
              </Link>
            </div>
          </>
        }
      />
      <ContactButton />
    </Logo>
  );
}

export default Home;
