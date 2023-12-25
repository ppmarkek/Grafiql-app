import { useState } from 'react';

interface Props {
  initialQuery?: string;
  onQueryChange?: (query: string) => void;
}

export default function QueryEditor({
  initialQuery = '',
  onQueryChange,
}: Props) {
  const [query, setQuery] = useState(initialQuery);

  const handleQueryChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    const newQuery = event.target.value;
    setQuery(newQuery);
    onQueryChange?.(newQuery);
  };

  const fakePrettify = () => {
    try {
      const parsedQuery = JSON.parse(query);
      const prettyQuery = JSON.stringify(parsedQuery, null, 2);
      setQuery(prettyQuery);
    } catch (error) {
      console.error('Invalid JSON format', error);
    }
  };
  return (
    <div>
      <textarea
        value={query}
        onChange={handleQueryChange}
        rows={20}
        cols={40}
      />
      <button onClick={fakePrettify}>Prettify</button>
    </div>
  );
}
