import { useState } from 'react';
import { OpenButton, OpenGrid, Wrapper } from './style';
import { Drawer } from '@mui/material';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

const Documentation = () => {
  const [state, setState] = useState(false);

  return (
    <Wrapper>
      <OpenGrid>
        <OpenButton>
          <ChevronRightIcon />
        </OpenButton>
      </OpenGrid>
      <Drawer anchor={'left'} open={state}></Drawer>
    </Wrapper>
  );
};

export default Documentation;
