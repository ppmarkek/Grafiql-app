import {
  FooterContainer,
  FooterContent,
  FooterSection,
  FooterLink,
  FooterLogo,
  Authors,
  Line,
} from '../../styles/commonStyles';
import { courseLink, authorsData } from '../../utils/constants/constants';
import courseLogo from '../../assets/rs_school_js.svg';
import GitHubIcon from '@mui/icons-material/GitHub';

export default function Footer() {
  return (
    <FooterContainer>
      <FooterContent>
        <FooterSection>
          <h3>Authors&apos; GitHub</h3>
          <Authors>
            {authorsData.map((author, index) => (
              <FooterLink key={index} href={author.gitHubLink} target="_blank">
                <GitHubIcon />
                <span>{author.name}</span>
              </FooterLink>
            ))}
          </Authors>
        </FooterSection>
        <Line></Line>
        <FooterSection>
          <h3>Year of Creation</h3>
          <span>2023</span>
        </FooterSection>
        <Line></Line>
        <FooterSection>
          <FooterLink href={courseLink} target="_blank">
            <FooterLogo src={courseLogo} alt="Course Logo" />
          </FooterLink>
        </FooterSection>
      </FooterContent>
    </FooterContainer>
  );
}
