import React, { useRef } from 'react';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import { Button, Prettifier } from './styles';
import { CodeEditor, ButtonsSection } from '../../styles/common';
import MonacoEditor from '@monaco-editor/react';
import * as monaco from 'monaco-editor';
import { parse, print } from 'graphql';

interface Props {
  value: string;
  onChange: (value: string | undefined) => void;
  onExecute: () => void;
}

export default function QueryEditor({ value, onChange, onExecute }: Props) {
  const editorRef = useRef<monaco.editor.IStandaloneCodeEditor | null>(null);

  const handleEditorDidMount = (
    editor: monaco.editor.IStandaloneCodeEditor
  ) => {
    editorRef.current = editor;
  };

  const prettifyCode = () => {
    if (editorRef.current) {
      const currentValue = editorRef.current.getValue();
      try {
        const formattedValue = print(parse(currentValue));
        editorRef.current.setValue(formattedValue);
      } catch (error) {
        console.error(error);
      }
    }
  };

  return (
    <CodeEditor>
      <MonacoEditor
        language="graphql"
        theme="vs-dark"
        value={value}
        onChange={(newValue) => onChange(newValue)}
        options={{
          minimap: { enabled: false },
        }}
        onMount={handleEditorDidMount}
      />
      <ButtonsSection>
        <Button onClick={onExecute} id="execute-button">
          <PlayArrowIcon fontSize="medium" />
        </Button>
        <Prettifier onClick={prettifyCode}>
          <AutoAwesomeIcon />
        </Prettifier>
      </ButtonsSection>
    </CodeEditor>
  );
}
