import { Link } from 'react-router-dom';
import { PrimaryButton } from '../buttons/PrimaryButton';
import { ButtonsContainer } from './style';

interface Props {
  isAuthorized?: boolean;
  signInButtonText?: string;
  signUpButtonText?: string;
  mainPageButtonText?: string;
}

export default function AuthButtons({
  isAuthorized,
  signInButtonText,
  signUpButtonText,
  mainPageButtonText,
}: Props) {
  return (
    <ButtonsContainer>
      {isAuthorized ? (
        <>
          <Link to="/main">
            <PrimaryButton>{mainPageButtonText}</PrimaryButton>
          </Link>
        </>
      ) : (
        <>
          <Link to="/signin">
            <PrimaryButton>{signInButtonText}</PrimaryButton>
          </Link>
          <Link to="/signup">
            <PrimaryButton>{signUpButtonText}</PrimaryButton>
          </Link>
        </>
      )}
    </ButtonsContainer>
  );
}
