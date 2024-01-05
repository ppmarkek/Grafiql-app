import { CodeEditor, ButtonsSection } from '../../styles/common';
import { CopyButton } from './styles';
import MonacoEditor from '@monaco-editor/react';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import { CopyToClipboard } from 'react-copy-to-clipboard';

interface Props {
  jsonResult: string;
}

export default function JsonViewer({ jsonResult }: Props) {
  return (
    <CodeEditor>
      <MonacoEditor
        language="json"
        theme="vs-dark"
        height="50vh"
        value={jsonResult}
        options={{
          readOnly: true,
          minimap: { enabled: false },
        }}
      />
      <ButtonsSection>
        <CopyToClipboard text={jsonResult}>
          <CopyButton>
            <ContentCopyIcon fontSize="medium" />
          </CopyButton>
        </CopyToClipboard>
      </ButtonsSection>
    </CodeEditor>
  );
}
