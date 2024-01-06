import { FormControl, Grid, Select, InputLabel } from '@mui/material';
import { Link } from 'react-router-dom';
import { styled } from '@mui/system';
import { PrimaryButton } from '../../buttons/PrimaryButton';

type LinkStyleProps = {
  width?: string;
  isSticky?: boolean;
};

export const Wrapper = styled(Grid, {
  shouldForwardProp: (prop) => prop !== 'isSticky',
})(({ isSticky }: LinkStyleProps) => ({
  height: isSticky ? '80px' : '90px',
  backgroundColor: isSticky ? '#f0f0f0' : 'transparent',
  borderBottom: isSticky ? 'unset' : '1px solid #444',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '0px 50px',
  position: 'sticky',
  top: '0',
  zIndex: '10',
  transition: 'all 0.5s ease-in-out',
}));

export const StyledLink = styled(Link, {
  shouldForwardProp: (prop) => prop !== 'isSticky',
})(({ width, isSticky }: LinkStyleProps) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: width || 'auto',
  textDecoration: 'none',
  color: isSticky ? '#000' : '#fff',
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

export const StyledButton = styled(PrimaryButton, {
  shouldForwardProp: (prop) => prop !== 'isSticky',
})(({ width, isSticky }: LinkStyleProps) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: width || 'auto',
  textDecoration: 'none',
  color: isSticky ? '#000' : '#fff',
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

export const StyledFormControl = styled(FormControl, {
  shouldForwardProp: (prop) => prop !== 'isSticky',
})({
  width: '130px',

  fieldset: {
    border: '1px solid #444',
  },
});

export const StyledSelect = styled(Select, {
  shouldForwardProp: (prop) => prop !== 'isSticky',
})(({ isSticky }: LinkStyleProps) => ({
  color: isSticky ? '#000' : '#fff',

  label: {
    color: isSticky ? '#000' : '#fff',
  },
}));

export const StyledInputLabel = styled(InputLabel, {
  shouldForwardProp: (prop) => prop !== 'isSticky',
})(({ isSticky }: LinkStyleProps) => ({
  color: isSticky ? '#000' : '#fff',
}));
