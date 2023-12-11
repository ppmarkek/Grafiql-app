import { Link } from 'react-router-dom';
import { PrimaryButton } from '../buttons/PrimaryButton';
import { ButtonsContainer } from './style';

interface Props {
  isAuthorized?: boolean;
}

export default function AuthButtons({ isAuthorized }: Props) {
  return (
    <ButtonsContainer>
      {isAuthorized ? (
        <>
          <Link to="/main">
            <PrimaryButton>Main Page</PrimaryButton>
          </Link>
        </>
      ) : (
        <>
          <Link to="/signin">
            <PrimaryButton>Sign In</PrimaryButton>
          </Link>
          <Link to="/signup">
            <PrimaryButton>Sign Up</PrimaryButton>
          </Link>
        </>
      )}
    </ButtonsContainer>
  );
}
