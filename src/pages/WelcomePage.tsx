import AuthButtons from '../components/authButtons/AuthButtons';
import WelcomeText from '../components/welcomeText/WelcomeText';
import Footer from '../components/footer/Footer';
import { WelcomePageContainer } from '../styles/commonStyles';
import { Link } from 'react-router-dom';

export default function WelcomePage() {
  return (
    <WelcomePageContainer>
      <Link to="/signin"></Link>
      <WelcomeText />
      <AuthButtons />
      <Footer />
    </WelcomePageContainer>
  );
}
