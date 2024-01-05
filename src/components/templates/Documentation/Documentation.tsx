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
import { AllSchemaTypesEN, AllSchemaTypesRU } from './AllSchemaTypes';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';

import Text from '../../atoms/Text/Text';
import { useLanguage } from '../../Context/ValueContext';

const Documentation = () => {
  const [language] = useLanguage();
  const [state, setState] = useState(false);
  const [type, setType] = useState('all');

  return (
    <Wrapper>
      <OpenGrid>
        <OpenButton
          active={state}
          onClick={() => setState(!state)}
          data-testid={'open-button'}
        >
          <ChevronRightIcon />
        </OpenButton>
      </OpenGrid>
      <Drawer anchor={'left'} open={state} data-testid={'drawer'}>
        {type === 'all' && language === 'en' && (
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
              {AllSchemaTypesEN.map(
                (value) =>
                  value.title !== 'Root' && (
                    <Grid key={value.title} paddingLeft={'20px'}>
                      <SchemaTypesButton
                        onClick={() => setType(value.title)}
                        data-testid={'schema-types-button'}
                      >
                        <Text variant={'REGULAR'}>{value.title}</Text>
                      </SchemaTypesButton>
                    </Grid>
                  )
              )}
            </Grid>
          </DrawerGrid>
        )}
        {type !== 'all' && language === 'en' && (
          <TypesGrid>
            <Grid>
              <SchemaTypesButton onClick={() => setType('all')}>
                <NavigateBeforeIcon />
                <Text variant={'H4'}>Docs</Text>
              </SchemaTypesButton>
            </Grid>
            <Text variant={'H4'}>{type}</Text>

            {AllSchemaTypesEN.map(
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
        {type === 'all' && language === 'ru' && (
          <DrawerGrid>
            <Grid display={'flex'} flexDirection={'column'} gap={'10px'}>
              <Text variant={'H2'}>Docs</Text>
              <Text variant={'REGULAR'}>
                Схема GraphQL предоставляет корневой тип для каждого вида
                операция.
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
              {AllSchemaTypesRU.map(
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
        )}
        {type !== 'all' && language === 'ru' && (
          <TypesGrid>
            <Grid>
              <SchemaTypesButton onClick={() => setType('all')}>
                <NavigateBeforeIcon />
                <Text variant={'H4'}>Docs</Text>
              </SchemaTypesButton>
            </Grid>
            <Text variant={'H4'}>{type}</Text>

            {AllSchemaTypesRU.map(
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
