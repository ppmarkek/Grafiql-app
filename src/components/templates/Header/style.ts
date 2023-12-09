import { Grid } from '@mui/material';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

type LinkStyleProps = {
  $width?: string;
  $isSticky?: boolean;
};

export const Wrapper = styled(Grid)<LinkStyleProps>`
  height: ${(props) => (props.$isSticky ? '80px' : '90px')};
  background-color: ${(props) => (props.$isSticky ? '#f0f0f0' : 'transparent')};
  justify-content: space-between;
  align-items: center;
  padding: 0px 50px;
  position: sticky;
  top: 0;
  z-index: 10;
  transition: all 0.5s ease-in-out;
`;

export const StyledLink = styled(Link)<LinkStyleProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${(props) => props.$width || 'auto'};
  text-decoration: none;
  color: #000;
  font-weight: 700;
  font-size: 18px;
  padding: 10px;
  border-radius: 10px;
  transition: all 0.5s;

  &:hover {
    box-shadow:
      0 -10px 25px rgba(0, 0, 0, 0.25),
      0 10px 10px rgba(0, 0, 0, 0.1);
  }
`;
