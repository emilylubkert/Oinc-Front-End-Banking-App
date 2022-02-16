import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event'
import App from './App';
import Deposit from './components/deposit';

test('process deposit', () => {
  const {getByLabelText, getByText} = render(
    <Deposit 
  )
});
