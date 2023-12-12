import {
  FooterContainer,
  FooterContent,
  FooterSection,
  FooterLink,
  FooterLogo,
} from '../../styles/commonStyles';

export default function Footer() {
  return (
    <FooterContainer>
      <FooterContent>
        <FooterSection>
          <h3>Authors&apos; GitHub</h3>
          <div>
            <FooterLink href="" target="_blank"></FooterLink>
            <FooterLink href="" target="_blank"></FooterLink>
            <FooterLink href="" target="_blank"></FooterLink>
          </div>
        </FooterSection>
        <FooterSection>
          <h3>Year of Creation</h3>
          <span>2023</span>
        </FooterSection>
        <FooterSection>
          <FooterLink>
            <FooterLogo />
          </FooterLink>
        </FooterSection>
      </FooterContent>
    </FooterContainer>
  );
}
