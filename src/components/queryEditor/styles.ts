import styled from 'styled-components';

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.25rem;
  border: none;
  background-color: #ff2244;
  color: #fff;
  border-radius: 0.5rem;
  cursor: pointer;
  transition: 0.1s ease;

  &:hover,
  &:active {
    background-color: #ff3366;
  }
`;

export const Prettifier = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.25rem;
  border: none;
  background-color: rgba(255, 255, 255, 0);
  color: #fff;
  border-radius: 0.5rem;
  cursor: pointer;
  transition: 0.1s ease;
  &:hover {
    background-color: rgba(255, 255, 255, 0.3);
  }
`;
