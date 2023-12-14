import styled from 'styled-components';

export const PrimaryButton = styled.button`
  border-radius: 1.5rem;
  padding: 1.5rem 2rem;
  font-weight: 600;
  font-size: 16px;
  background-color: #ffb732;
  color: white;
  width: 100%;
  transition: 0.1s ease;

  &:hover {
    background-color: rgb(255, 198, 93);
  }

  &:active {
    background-color: rgb(255, 198, 93);
  }

  &:focus {
    outline: none;
    background-color: rgb(255, 198, 93);
  }
`;
