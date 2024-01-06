import { CodeEditor, ButtonsSection } from '../../styles/common';
import { CopyButton } from './styles';
import MonacoEditor from '@monaco-editor/react';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { useGetQueryResponseQuery } from '../../services/api/slices/querySlice';
import { useRequestBodySelector } from '../../services/api/slices/requestSlice';
import { useEntrySelector } from '../../services/api/slices/entrySlice';

export default function JsonViewer() {
  const requestBody = useRequestBodySelector();
  const url = useEntrySelector();
  const { data, error } = useGetQueryResponseQuery({
    variables: { body: requestBody.requestBody, url: url.entry || '' },
  });
  return (
    <CodeEditor>
      <MonacoEditor
        language="json"
        theme="vs-dark"
        height="50vh"
        value={
          error ? JSON.stringify(error, null, 2) : JSON.stringify(data, null, 2)
        }
        options={{
          readOnly: true,
          minimap: { enabled: false },
        }}
      />
      <ButtonsSection>
        <CopyToClipboard text={'JSON.stringify(data)'}>
          <CopyButton>
            <ContentCopyIcon fontSize="medium" />
          </CopyButton>
        </CopyToClipboard>
      </ButtonsSection>
    </CodeEditor>
  );
}
