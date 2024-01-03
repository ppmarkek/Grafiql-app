import { Viewer } from './styles';
import MonacoEditor from '@monaco-editor/react';

interface Props {
  jsonResult: string;
}

export default function JsonViewer({ jsonResult }: Props) {
  return (
    <Viewer>
      <MonacoEditor
        height="500px"
        language="json"
        theme="vs-dark"
        value={jsonResult}
        options={{
          readOnly: true,
          minimap: { enabled: false },
        }}
      />
    </Viewer>
  );
}
