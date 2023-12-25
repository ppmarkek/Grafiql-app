import React, { useState } from 'react';
import QueryEditor from '../../components/queryEditor/QueryEditor';
import { JsonViewer } from '../../components/jsonViewer/JsonViewer';

export default function MainPage() {
  const [result, setResult] = useState<string | null>(null);

  const handleQuerySubmit = () => {
    const mockedData = {
      data: {
        books: [
          { id: '1', name: 'Jason', language: { name: 'Typescript' } },
          { id: '2', name: 'Maria', language: { name: 'Python' } },
          { id: '3', name: 'Elizabeth', language: { name: 'C' } },
        ],
      },
    };

    setResult(JSON.stringify(mockedData, null, 2));
  };

  return (
    <div>
      <QueryEditor onQuerySubmit={handleQuerySubmit} />
      {result && <JsonViewer jsonData={result} />}
    </div>
  );
}
