import { useState } from 'react';

interface Props {
  onQuerySubmit: (query: string) => void;
}

export default function QueryEditor({ onQuerySubmit }: Props) {
  const [query, setQuery] = useState<string>('');

  const handleQueryChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setQuery(event.target.value);
  };

  const handleQuerySubmit = () => {
    onQuerySubmit(query);
  };

  return (
    <div>
      <textarea
        value={query}
        onChange={handleQueryChange}
        rows={20}
        cols={40}
      />
      <button onClick={handleQuerySubmit}>Submit Query</button>
    </div>
  );
}
