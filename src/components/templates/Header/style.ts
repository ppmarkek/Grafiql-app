import { Grid } from '@mui/material';
import { Link } from 'react-router-dom';
import { styled } from '@mui/system';

type LinkStyleProps = {
  $width?: string;
  $isSticky?: boolean;
};

export const Wrapper = styled(Grid)(({ $isSticky }: LinkStyleProps) => ({
  height: $isSticky ? '80px' : '90px',
  backgroundColor: $isSticky ? '#f0f0f0' : 'transparent',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '0px 50px',
  position: 'sticky',
  top: '0',
  zIndex: '10',
  transition: 'all 0.5s ease-in-out',
}));

export const StyledLink = styled(Link)(({ $width }: LinkStyleProps) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: $width || 'auto',
  textDecoration: 'none',
  color: '#000',
  fontWeight: '700',
  fontSize: '18px',
  padding: '10px',
  borderRadius: '10px',
  transition: 'all 0.5s',

  '&:hover': {
    boxShadow:
      '0 -10px 25px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.1)',
  },
}));
