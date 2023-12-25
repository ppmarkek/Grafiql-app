import React, { useRef, useEffect, useState } from 'react';
import './QueryEditor.css';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';

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
      codeArea.addEventListener('input', handleInput);
      codeArea.addEventListener('scroll', handleScroll);

      return () => {
        codeArea.removeEventListener('input', handleInput);
        codeArea.removeEventListener('scroll', handleScroll);
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
    <div className="code-editor">
      <div
        className="line-numbers"
        ref={lineNumbersRef}
        style={{ fontFamily: 'Consolas, monospace' }}
      >
        {Array.from({ length: lines }, (_, i) => i + 1).join('\n')}
      </div>
      <textarea
        className="code-area"
        defaultValue={query}
        onChange={handleQueryChange}
        ref={codeAreaRef}
        spellCheck="false"
        onInput={updateLineNumbers}
        onScroll={updateLineNumbers}
        style={{ fontFamily: 'Consolas, monospace' }}
      ></textarea>
      <div className="buttons-section">
        <button onClick={handleQuerySubmit}>
          <PlayArrowIcon />
        </button>
      </div>
    </div>
  );
}
