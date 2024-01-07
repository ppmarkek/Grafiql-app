import { Link } from 'react-router-dom';
import { PrimaryButton } from '../buttons/PrimaryButton';
import { ButtonsContainer } from './style';
import { useI18n } from '../Context/ValueContext';

interface Props {
  isAuthorized?: boolean;
}

export default function AuthButtons({ isAuthorized }: Props) {
  const i18n = useI18n();
  return (
    <ButtonsContainer>
      {isAuthorized ? (
        <>
          <Link to="/main">
            <PrimaryButton>{i18n.main.mainLink}</PrimaryButton>
          </Link>
        </>
      ) : (
        <>
          <Link to="/signin">
            <PrimaryButton>{i18n.auth.signInLink}</PrimaryButton>
          </Link>
          <Link to="/signup">
            <PrimaryButton>{i18n.auth.signUpLink}</PrimaryButton>
          </Link>
        </>
      )}
    </ButtonsContainer>
  );
}
