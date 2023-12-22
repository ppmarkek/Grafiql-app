import { useState } from 'react';
import { OpenButton, OpenGrid, Wrapper } from './style';
import { Drawer, Grid } from '@mui/material';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import Text from '../../atoms/Text/Text';

const Documentation = () => {
  const [state, setState] = useState(false);

  return (
    <Wrapper>
      <OpenGrid>
        <OpenButton
          active={state}
          onClick={() => setState(state ? false : true)}
        >
          <ChevronRightIcon />
        </OpenButton>
      </OpenGrid>
      <Drawer anchor={'left'} open={state}>
        <Grid width={'400px'} padding={'20px'}>
          <Grid display={'flex'} flexDirection={'column'} gap={'10px'}>
            <Text variant={'H2'}>Docs</Text>
            <Text variant={'REGULAR'}>
              A GraphQL schema provides a root type for each kind of operation.
            </Text>
          </Grid>
        </Grid>
      </Drawer>
    </Wrapper>
  );
};

export default Documentation;
