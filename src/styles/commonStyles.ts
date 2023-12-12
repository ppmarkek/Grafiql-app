import styled from 'styled-components';

export const FooterContainer = styled.footer`
  background-color: #eee;
  padding: 0.5rem;
  border-top-left-radius: 1.5rem;
  border-top-right-radius: 1.5rem;
`;

export const FooterContent = styled.div`
  display: flex;
  padding: 0.5rem;
  gap: 1rem;
  text-align: center;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 670px) {
    flex-direction: column;
  }
`;

export const FooterSection = styled.div`
  flex: 1;
  padding: 0.5rem;
  display: flex;
  gap: 0.33rem;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const FooterLink = styled.a`
  display: flex;
  align-items: center;
  gap: 0.25rem;
  text-decoration: none;
  color: #444;
  transition: 0.1s ease;
  opacity: 0.7;

  &:hover {
    color: #000;
    opacity: 1;
  }
`;

export const FooterLogo = styled.img`
  min-width: 128px;
  object-fit: cover;
  transition: transform 0.1s ease;
`;

export const WelcomePageContainer = styled.div`
  width: 100%;
`;

export const Authors = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;

  @media (max-width: 1570px) {
    flex-direction: column;
    text-align: center;
    gap: 0.33rem;
  }
`;

export const Line = styled.div`
  width: 90%;
  height: 2px;
  border-radius: 2px;
  background-color: #ccc;

  @media (min-width: 670px) {
    display: none;
  }
`;
