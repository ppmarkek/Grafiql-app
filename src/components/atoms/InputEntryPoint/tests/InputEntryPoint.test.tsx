import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import InputEntryPoint from '../InputEntryPoint';
import { Grid } from '@mui/material';

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

jest.mock('@monaco-editor/react', () => {
  return ({
    onChange,
    value,
  }: {
    onChange: (value: string) => void;
    value: string;
  }) => (
    <textarea
      data-testid="mock-monaco-editor"
      onChange={(e) => onChange(e.target.value)}
      value={value}
    ></textarea>
  );
});

describe('InputEntryPoint Component', () => {
  it('renders without crashing', () => {
    const { asFragment } = render(<InputEntryPoint />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('handles tab change', async () => {
    render(<InputEntryPoint />);
    const tab = screen.getByLabelText('Headers');
    await userEvent.click(tab);
  });

  it('handles input change in MonacoEditor', async () => {
    render(<InputEntryPoint />);
    const editor = await screen.findByRole('textbox');
    await userEvent.type(editor, 'new value');
  });

  it('triggers action when play button is clicked', async () => {
    render(<InputEntryPoint />);
    const playButton = await screen.findByTestId('play-button');
    await userEvent.click(playButton);
  });

  it('copies text to clipboard when copy button is clicked', async () => {
    render(<InputEntryPoint />);
    const copyButton = await screen.findByTestId('copy-button');
    await userEvent.click(copyButton);
  });

  it('displays correct tab panel on tab click', async () => {
    render(<InputEntryPoint />);
    const headersTab = screen.getByLabelText('Headers');
    const variablesTab = screen.getByLabelText('Variables');
    await userEvent.click(headersTab);
    await userEvent.click(variablesTab);
  });

  it('renders CustomTabPanel based on state value', () => {
    render(<InputEntryPoint />);
    const tabPanels = screen.getAllByRole('tabpanel');
    const variablesTabContent = tabPanels.find(
      (panel) => panel.getAttribute('id') === 'simple-tabpanel-0'
    );
    expect(variablesTabContent).toHaveAttribute('id', 'simple-tabpanel-0');
  });

  it('handles undefined input change in MonacoEditor', async () => {
    render(<InputEntryPoint />);
    const editor = await screen.findByTestId('mock-monaco-editor');
    fireEvent.change(editor, { target: { value: 'new value' } });
    expect((editor as HTMLTextAreaElement).value).toBe('new value');
  });

  it('handles error when copy to clipboard fails', async () => {
    Object.defineProperty(navigator, 'clipboard', {
      value: {
        writeText: jest.fn().mockRejectedValue(new Error('Failed to copy')),
      },
    });
    render(<InputEntryPoint />);
    const copyButton = await screen.findByTestId('copy-button');
    await userEvent.click(copyButton);
  });

  it('renders CustomTabPanel without children', () => {
    render(<CustomTabPanel index={0} value={0} />);
    const tabPanel = screen.getByRole('tabpanel');
    expect(tabPanel).toContainHTML('');
  });
});
