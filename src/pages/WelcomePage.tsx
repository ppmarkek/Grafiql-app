import AuthButtons from '../components/authButtons/AuthButtons';
import WelcomeText from '../components/welcomeText/WelcomeText';
import Footer from '../components/footer/Footer';

export default function WelcomePage() {
  return (
    <div>
      <WelcomeText />
      <AuthButtons />
      <Footer />
    </div>
  );
}
