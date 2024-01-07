import styled from 'styled-components';

export const CopyButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.25rem;
  border: none;
  background-color: #555555;
  color: #fff;
  border-radius: 0.5rem;
  cursor: pointer;
  transition: 0.1s ease;

  &:hover,
  &:active {
    background-color: #666666;
  }
`;
