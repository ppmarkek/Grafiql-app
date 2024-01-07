import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import { Button } from './styles';
import { CodeEditor, ButtonsSection } from '../../styles/common';
import MonacoEditor from '@monaco-editor/react';

interface Props {
  value: string;
  onChange: (value: string | undefined) => void;
  onExecute: () => void;
}

export default function QueryEditor({ value, onChange, onExecute }: Props) {
  return (
    <CodeEditor data-testid="code-editor">
      <MonacoEditor
        language="graphql"
        theme="vs-dark"
        value={value}
        onChange={onChange}
        options={{
          minimap: { enabled: false },
        }}
      />
      <ButtonsSection>
        <Button onClick={onExecute} data-testid="execute-button">
          <PlayArrowIcon fontSize="medium" />
        </Button>
      </ButtonsSection>
    </CodeEditor>
  );
}
