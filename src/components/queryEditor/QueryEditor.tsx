import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import { CodeEditor, ButtonsSection, Button } from './styles';
import MonacoEditor from '@monaco-editor/react';

interface Props {
  query: string;
  onChange: (value: string | undefined) => void;
}

export default function QueryEditor({ query, onChange }: Props) {
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
      <ButtonsSection className="buttons-section">
        <Button>
          <PlayArrowIcon />
        </Button>
      </ButtonsSection>
    </CodeEditor>
  );
}
