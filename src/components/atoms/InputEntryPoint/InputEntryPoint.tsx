import { Grid, Tabs } from '@mui/material';
import { GridTabs, StyledTab, StyledTextField } from './style';
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

  const a11yProps = (index: number) => {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    };
  };

  const handleChange = (_event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Grid container item xs={6} height={'90%'} flexDirection={'column'}>
      <Grid container height={'100%'}>
        <StyledTextField multiline variant="filled" />
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
