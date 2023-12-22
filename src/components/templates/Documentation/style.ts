import { Button, Grid } from '@mui/material';
import { styled } from '@mui/system';

type ButtonProps = {
  active?: boolean;
};

export const Wrapper = styled(Grid)({
  height: '100%',
  width: '30px',
});

export const OpenGrid = styled(Grid)({
  height: '100%',
  width: '100%',
  borderRight: '1px solid #444',
});

export const OpenButton = styled(Button)(({ active }: ButtonProps) => ({
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
  left: active ? '387px' : '17px',
  transform: active ? 'rotate(0.5turn)' : 'none',
  top: '220px',
  zIndex: '1201',
  transition: 'all 0.2s',
  span: {
    display: 'none',
  },
  ':hover': {
    background: '#6B59CC',
  },
}));

export const DrawerGrid = styled(Grid)({
  display: 'flex',
  gap: '30px',
  flexDirection: 'column',
  width: '400px',
  padding: '20px',
});
