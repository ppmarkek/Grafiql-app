import { Container, Heading, Paragraph } from './style';

interface Props {
  welcomeText?: string;
  projectText?: string;
  developersText?: string;
  courseText?: string;
}

export default function WelcomeText({
  welcomeText,
  projectText,
  developersText,
  courseText,
}: Props) {
  return (
    <Container>
      <Heading>{welcomeText}</Heading>
      <Paragraph>{projectText}</Paragraph>
      <Paragraph>{developersText}</Paragraph>
      <Paragraph>{courseText}</Paragraph>
    </Container>
  );
}
