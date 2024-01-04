import { useState } from 'react';
import QueryEditor from '../../components/queryEditor/QueryEditor';
import JsonViewer from '../../components/jsonViewer/JsonViewer';
import { Container } from '../../styles/common';

export default function MainPage() {
  const [query, setQuery] = useState<string>('query: { hello }');
  const [jsonResult, setJsonResult] = useState<string>('');

  const executeQuery = () => {
    const fakeApi = 'https://rickandmortyapi.com/api/character';

    fetch(fakeApi, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setJsonResult(JSON.stringify(data, null, 2));
      })
      .catch((error) => console.error('Error: ', error));
  };

  const handleQueryChange = (value: string | undefined) => {
    const updatedValue = value || '';
    setQuery(updatedValue);
  };

  return (
    <Container>
      <QueryEditor
        query={query}
        onChange={handleQueryChange}
        onExecute={executeQuery}
      />
      <JsonViewer jsonResult={jsonResult} />
    </Container>
  );
}
