import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import { CodeEditor, ButtonsSection, Button } from './styles';
import MonacoEditor from '@monaco-editor/react';

interface Props {
  query: string;
  onChange: (value: string | undefined) => void;
  onExecute: () => void;
}

export default function QueryEditor({ query, onChange, onExecute }: Props) {
  return (
    <CodeEditor>
      <MonacoEditor
        height="500px"
        language="graphql"
        theme="vs-dark"
        value={query}
        onChange={onChange}
        options={{
          minimap: { enabled: false },
        }}
      />
      <ButtonsSection>
        <Button onClick={onExecute}>
          <PlayArrowIcon />
        </Button>
      </ButtonsSection>
    </CodeEditor>
  );
}
