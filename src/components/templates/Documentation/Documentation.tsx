import { useState } from 'react';
import { DrawerGrid, OpenButton, OpenGrid, Wrapper } from './style';
import { Drawer, Grid } from '@mui/material';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import Text from '../../atoms/Text/Text';
import { AllSchemaTypes } from './AllSchemaTypes';

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
        <DrawerGrid>
          <Grid display={'flex'} flexDirection={'column'} gap={'10px'}>
            <Text variant={'H2'}>Docs</Text>
            <Text variant={'REGULAR'}>
              A GraphQL schema provides a root type for each kind of operation.
            </Text>
          </Grid>
          <Grid display={'flex'} flexDirection={'column'} gap={'10px'}>
            <Text variant={'BOLD'}>Root Types</Text>
            <Grid paddingLeft={'20px'}>
              <Text variant={'REGULAR'}>query: Root</Text>
            </Grid>
          </Grid>
          <Grid display={'flex'} flexDirection={'column'} gap={'10px'}>
            <Text variant={'BOLD'}>All Schema Types</Text>
            {AllSchemaTypes.map((value) => (
              <Grid key={value} paddingLeft={'20px'}>
                <Text variant={'REGULAR'}>{value}</Text>
              </Grid>
            ))}
          </Grid>
        </DrawerGrid>
      </Drawer>
    </Wrapper>
  );
};

export default Documentation;
