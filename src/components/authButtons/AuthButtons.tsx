import { Link } from 'react-router-dom';
import { PrimaryButton } from '../buttons/PrimaryButton';
import { ButtonsContainer } from './style';

export default function AuthButtons() {
  return (
    <ButtonsContainer>
      <Link to="/signin">
        <PrimaryButton>Sign In</PrimaryButton>
      </Link>
      <Link to="/signup">
        <PrimaryButton>Sign Up</PrimaryButton>
      </Link>
    </ButtonsContainer>
  );
}
