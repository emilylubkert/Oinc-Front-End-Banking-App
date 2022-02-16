import { Fragment } from 'react';

function Logo(props) {
  const logoStyle = {
    backgroundImage: 'url(/oinc-logo.png)',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    position: 'inherit',
    height: '75vh',
    backgroundSize: '80% auto',
  };

  return (
    <Fragment>
      <div className='bank-logo' style={logoStyle}>
        {props.children}
      </div>
    </Fragment>
  );
}

export default Logo;
