import { useEffect, useState } from 'react';
import QueryEditor from '../../components/queryEditor/QueryEditor';
import JsonViewer from '../../components/jsonViewer/JsonViewer';

export default function MainPage() {
  const [query, setQuery] = useState<string>('query: { hello }');
  const [jsonResult, setJsonResult] = useState<string>('');

  useEffect(() => {
    const fakeApi = 'https://rickandmortyapi.com/api';

    fetch(fakeApi, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ query }),
    })
      .then((response) => response.json())
      .then((data) => setJsonResult(JSON.stringify(data, null, 2)))
      .catch((error) => console.error('Error: ', error));
  }, [query]);

  const handleQueryChange = (value: string | undefined) => {
    const updatedValue = value || '';
    setQuery(updatedValue);
  };

  return (
    <div>
      <QueryEditor query={query} onChange={handleQueryChange} />
      <JsonViewer jsonResult={jsonResult} />
    </div>
  );
}
