import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';

function Contact() {
  return (
    <>
      <h1 className='contact-text'>Contact Us</h1>
      <div className='contact-buttons'>
        <a
          className='btn btn-light large contact-link'
          role='button'
          href='mailto:elubkert@gmail.com'
          target='_blank'
          rel='noreferrer'
        >
          <h4>Email</h4>
          <FontAwesomeIcon icon={faEnvelope} />
        </a>
        <a
          className='btn btn-light large contact-link'
          role='button'
          href='https://twitter.com/'
          target='_blank'
          rel='noreferrer'
        >
          <h4>Twitter</h4>
          <FontAwesomeIcon icon={faTwitter} />
        </a>
      </div>
    </>
  );
}

export default Contact;
