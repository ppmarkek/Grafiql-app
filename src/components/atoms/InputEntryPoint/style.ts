import { Button, Grid, Tab, TextField } from '@mui/material';
import { styled } from '@mui/system';

export const StyledTextField = styled(TextField)({
  height: '100%',
  width: '100%',
  '.MuiInputBase-root': {
    height: '100%',
  },
  textarea: {
    color: '#fff',
    height: '100% !important',
  },
});

export const ButtonGrid = styled(Grid)({
  width: '7%',
  background: 'rgba(0, 0, 0, 0.06)',
  justifyContent: 'flex-start',
  alignItems: 'center',
  flexDirection: 'column',
  paddingTop: '15px',
  gap: '15px',
});

export const ButtonStart = styled(Button)({
  all: 'unset',
  width: '40px',
  height: '40px',
  background: '#FF5794',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  borderRadius: '8px',
  cursor: 'pointer',
  border: '1px solid #FF5794',
  transition: 'all 0.5s',

  span: {
    display: 'none',
  },
});

export const StyledButton = styled(Button)({
  all: 'unset',
  width: '42px',
  height: '42px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  borderRadius: '8px',
  cursor: 'pointer',
  transition: 'all 0.5s',

  span: {
    display: 'none',
  },
});

export const GridTabs = styled(Grid)({
  flexDirection: 'column',
  backgroundColor: 'rgba(0, 0, 0, 0.09)',
  borderBottomLeftRadius: '4px',
  borderBottomRightRadius: '4px',
  height: '25%',
});

export const StyledTab = styled(Tab)({
  color: '#fff',
});
