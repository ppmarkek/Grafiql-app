import { Button, Grid, Input } from '@mui/material';
import { styled } from '@mui/system';

export const Wrapper = styled(Grid)({
  height: '5%',
  backgroundColor: 'rgba(0, 0, 0, 0.09)',
  borderTopRightRadius: '5px',
  borderBottomRightRadius: '5px',
});

export const StyledInput = styled(Input)({
  width: '95%',
  color: '#fff',
});

export const ButtonStart = styled(Button)({
  all: 'unset',
  width: '5%',
  height: '100%',
  background: 'rgba(0, 0, 0, 0.09)',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  borderRadius: '5px',
  cursor: 'pointer',
  transition: 'all 0.5s',

  span: {
    display: 'none',
  },
});
