import { Space, Wrapper, Button, Text, Container, Digit } from './styles';
import './errorPage.css';

export default function ErrorPage() {
  return (
    <Container>
      <div className="background-img">
        <Space></Space>
        <Wrapper>
          <div className="img-wrapper">
            <Digit>44</Digit>
          </div>
          <Text>
            The page you are trying to search has been moved to another
            universe.
          </Text>
          <Button>GET ME HOME</Button>
        </Wrapper>
      </div>
    </Container>
  );
}
