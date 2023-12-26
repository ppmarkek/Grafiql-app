import { useState } from 'react';
import {
  DrawerGrid,
  OpenButton,
  OpenGrid,
  SchemaTypesButton,
  TypesGrid,
  Wrapper,
} from './style';
import { Drawer, Grid } from '@mui/material';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import Text from '../../atoms/Text/Text';
import { AllSchemaTypes } from './AllSchemaTypes';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';

const Documentation = () => {
  const [state, setState] = useState(false);
  const [type, setType] = useState('all');

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
        {type === 'all' ? (
          <DrawerGrid>
            <Grid display={'flex'} flexDirection={'column'} gap={'10px'}>
              <Text variant={'H2'}>Docs</Text>
              <Text variant={'REGULAR'}>
                A GraphQL schema provides a root type for each kind of
                operation.
              </Text>
            </Grid>
            <Grid display={'flex'} flexDirection={'column'} gap={'10px'}>
              <Text variant={'BOLD'}>Root Types</Text>
              <Grid paddingLeft={'20px'}>
                <SchemaTypesButton onClick={() => setType('Root')}>
                  <Text variant={'REGULAR'}>query: Root</Text>
                </SchemaTypesButton>
              </Grid>
            </Grid>
            <Grid display={'flex'} flexDirection={'column'} gap={'10px'}>
              <Text variant={'BOLD'}>All Schema Types</Text>
              {AllSchemaTypes.map(
                (value) =>
                  value.title !== 'Root' && (
                    <Grid key={value.title} paddingLeft={'20px'}>
                      <SchemaTypesButton onClick={() => setType(value.title)}>
                        <Text variant={'REGULAR'}>{value.title}</Text>
                      </SchemaTypesButton>
                    </Grid>
                  )
              )}
            </Grid>
          </DrawerGrid>
        ) : (
          <TypesGrid>
            <Grid>
              <SchemaTypesButton onClick={() => setType('all')}>
                <NavigateBeforeIcon />
                <Text variant={'H4'}>Docs</Text>
              </SchemaTypesButton>
            </Grid>
            <Text variant={'H4'}>{type}</Text>

            {AllSchemaTypes.map(
              (value) =>
                value.title === type && (
                  <div
                    key={value.title}
                    dangerouslySetInnerHTML={{ __html: value.html }}
                  />
                )
            )}
          </TypesGrid>
        )}
      </Drawer>
    </Wrapper>
  );
};

export default Documentation;
