import '../components.css';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope} from '@fortawesome/free-solid-svg-icons';

function ContactButton() {
  return (
    <Link className='btn btn-dark contact-btn' role='button' to='../contact'>
      Contact Us
      <FontAwesomeIcon className="contact-icon" icon={faEnvelope} />
    </Link>
  );
}

export default ContactButton;
