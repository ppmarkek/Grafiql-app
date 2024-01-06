import { Button, Grid } from '@mui/material';
import { styled } from '@mui/system';

export const Wrapper = styled(Grid)({
  height: '100%',
  width: '30px',
});

export const OpenGrid = styled(Grid)({
  height: '100%',
  width: '100%',
});

export const OpenButton = styled(Button)(
  ({ active }: { active: string | boolean }) => ({
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
    left: active ? '387px' : '12px',
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
  })
);

export const DrawerGrid = styled(Grid)({
  display: 'flex',
  gap: '30px',
  flexDirection: 'column',
  width: '400px',
  padding: '20px',
});

export const SchemaTypesButton = styled(Button)({
  all: 'unset',
  display: 'flex',
  cursor: 'pointer',
  borderBottom: '1px solid #fff',
  transition: 'all 0.5s',
  span: {
    display: 'none',
  },
  ':hover': {
    backgroundColor: 'unset',
    borderBottom: '1px solid #444',
  },
  ':focus': {
    outline: 'unset',
  },
});

export const TypesGrid = styled(Grid)({
  display: 'flex',
  gap: '30px',
  flexDirection: 'column',
  width: '400px',
  padding: '20px',
});
