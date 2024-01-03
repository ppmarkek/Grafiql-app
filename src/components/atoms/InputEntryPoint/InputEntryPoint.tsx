import { Grid, Tabs } from '@mui/material';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import * as monaco from 'monaco-editor';
import MonacoEditor from '@monaco-editor/react';
import {
  ButtonGrid,
  ButtonStart,
  GridTabs,
  StyledButton,
  StyledTab,
  StyledTextField,
} from './style';
import { useState } from 'react';

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function CustomTabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <Grid
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
      height={'70%'}
    >
      {value === index && <Grid height={'100%'}>{children}</Grid>}
    </Grid>
  );
}

const InputEntryPoint = () => {
  const [value, setValue] = useState(0);
  const [inputValue, setInputValue] = useState('');

  const a11yProps = (index: number) => {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    };
  };

  const handleChange = (_event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const handleEditorChange = (value: string | undefined) => {
    setInputValue(value || '');
  };

  const options: monaco.editor.IStandaloneEditorConstructionOptions = {
    selectOnLineNumbers: true,
    roundedSelection: false,
    readOnly: false,
    cursorStyle: 'line',
    glyphMargin: true,
    folding: true,
    minimap: {
      enabled: false,
    },
    autoClosingBrackets: 'always',
    autoClosingQuotes: 'always',
    autoSurround: 'languageDefined',
    bracketPairColorization: { enabled: true },
  };

  const copyToClipboard = async () => {
    if (inputValue) {
      try {
        await navigator.clipboard.writeText(inputValue);
        console.log('Text copied to clipboard');
      } catch (err) {
        console.error('Failed to copy: ', err);
      }
    }
  };

  return (
    <Grid container item xs={6} height={'90%'} flexDirection={'column'}>
      <Grid container height={'75%'}>
        <Grid width={'93%'}>
          <MonacoEditor
            data-testid="monaco-editor"
            height="100%"
            theme="vs-dark"
            language="graphql"
            value={inputValue}
            onChange={handleEditorChange}
            options={options}
          />
        </Grid>
        <ButtonGrid container>
          <ButtonStart data-testid="play-button">
            <PlayArrowIcon />
          </ButtonStart>
          <StyledButton onClick={copyToClipboard} data-testid="copy-button">
            <ContentCopyIcon />
          </StyledButton>
        </ButtonGrid>
      </Grid>
      <GridTabs container>
        <Grid sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="basic tabs example"
          >
            <StyledTab label="Variables" {...a11yProps(0)} />
            <StyledTab label="Headers" {...a11yProps(1)} />
          </Tabs>
        </Grid>
        <CustomTabPanel value={value} index={0}>
          <StyledTextField multiline variant="filled" />
        </CustomTabPanel>
        <CustomTabPanel value={value} index={1}>
          <StyledTextField multiline variant="filled" />
        </CustomTabPanel>
      </GridTabs>
    </Grid>
  );
};

export default InputEntryPoint;
