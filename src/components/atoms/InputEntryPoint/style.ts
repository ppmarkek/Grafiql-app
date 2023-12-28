import { Grid, Tab, TextField } from '@mui/material';
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
