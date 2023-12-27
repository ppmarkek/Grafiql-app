import React, { useRef, useEffect, useState } from 'react';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import {
  CodeEditor,
  LineNums,
  ButtonsSection,
  CodeArea,
  Button,
} from './styles';

interface Props {
  onQuerySubmit: (query: string) => void;
}

export default function QueryEditor({ onQuerySubmit }: Props) {
  const codeAreaRef = useRef<HTMLTextAreaElement | null>(null);
  const lineNumbersRef = useRef<HTMLDivElement | null>(null);
  const [lines, setLines] = useState(1);
  const [query, setQuery] = useState<string>('');

  const handleQueryChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setQuery(event.target.value);
  };

  const handleQuerySubmit = () => {
    onQuerySubmit(query);
  };

  useEffect(() => {
    const handleInput = () => {
      updateLineNumbers();
    };

    const handleScroll = () => {
      updateLineNumbers();
    };

    const codeArea = codeAreaRef.current;

    if (codeArea) {
      codeArea.oninput = handleInput;
      codeArea.onscroll = handleScroll;

      return () => {
        codeArea.oninput = null;
        codeArea.onscroll = null;
      };
    }

    return () => {};
  }, []);

  const updateLineNumbers = () => {
    const codeArea = codeAreaRef.current;
    if (codeArea) {
      const codeLines = codeArea.value.split('\n').length;
      setLines(codeLines);
    }
  };

  return (
    <CodeEditor>
      <LineNums
        ref={lineNumbersRef}
        style={{ fontFamily: 'Consolas, monospace' }}
      >
        {Array.from({ length: lines }, (_, i) => i + 1).join('\n')}
      </LineNums>
      <CodeArea
        defaultValue={query}
        onChange={handleQueryChange}
        ref={codeAreaRef}
        spellCheck="false"
        onInput={updateLineNumbers}
        onScroll={updateLineNumbers}
        style={{ fontFamily: 'Consolas, monospace' }}
      ></CodeArea>
      <ButtonsSection className="buttons-section">
        <Button onClick={handleQuerySubmit}>
          <PlayArrowIcon />
        </Button>
      </ButtonsSection>
    </CodeEditor>
  );
}
