import AuthButtons from '../components/authButtons/AuthButtons';
import WelcomeText from '../components/welcomeText/WelcomeText';
import Footer from '../components/footer/Footer';
import { WelcomePageContainer } from '../styles/commonStyles';
import { useI18n } from '../components/Context/ValueContext';
import Documentation from '../components/templates/Documentation/Documentation';
import { useFirebaseAuth } from '../services/auth/firebase';

export default function WelcomePage() {
  const { user } = useFirebaseAuth();
  const i18n = useI18n();
  return (
    <WelcomePageContainer>
      <WelcomeText
        welcomeText={i18n.welcome.welcomeText}
        projectText={i18n.welcome.projectText}
        developersText={i18n.welcome.developersText}
        courseText={i18n.welcome.courseText}
      />
      <Documentation />
      {!user && <AuthButtons />}
      <Footer />
    </WelcomePageContainer>
  );
}
