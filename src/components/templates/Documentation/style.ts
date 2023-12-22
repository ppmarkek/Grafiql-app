import { Button, Grid } from '@mui/material';
import { styled } from '@mui/system';

export const Wrapper = styled(Grid)({
  height: '100%',
  width: '30px',
});

export const OpenGrid = styled(Grid)({
  height: '100%',
  width: '100%',
  borderRight: '1px solid #444',
});

export const OpenButton = styled(Button)({
  all: 'unset',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  background: '#000',
  borderRadius: '20px',
  width: '25px',
  height: '25px',
  cursor: 'pointer',
  position: 'absolute',
  left: '17px',
  top: '120px',
  span: {
    display: 'none',
  },
});
