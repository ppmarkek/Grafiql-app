import AuthButtons from '../components/authButtons/AuthButtons';
import WelcomeText from '../components/welcomeText/WelcomeText';
import Footer from '../components/footer/Footer';
import { WelcomePageContainer } from '../styles/commonStyles';

export default function WelcomePage() {
  return (
    <WelcomePageContainer>
      <WelcomeText />
      <AuthButtons />
      <Footer />
    </WelcomePageContainer>
  );
}
