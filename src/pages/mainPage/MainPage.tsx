import { useState } from 'react';
import QueryEditor from '../../components/queryEditor/QueryEditor';
import JsonViewer from '../../components/jsonViewer/JsonViewer';
import { Container } from '../../styles/common';
import InputEntryPoint from '../../components/atoms/InputEntryPoint/InputEntryPoint';
import {
  setRequestBody,
  useRequestBodySelector,
} from '../../services/api/slices/requestSlice';
import { useAppDispatch } from '../../services/api/store';

export default function MainPage() {
  // const [query, setQuery] = useState<string>('query: { hello }');
  const query = useRequestBodySelector();
  const [jsonResult, setJsonResult] = useState<string>('');
  const dispatch = useAppDispatch();

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
    dispatch(setRequestBody(updatedValue));
  };

  return (
    <Container id="main-page">
      <InputEntryPoint />
      <QueryEditor
        query={query.requestBody}
        onChange={handleQueryChange}
        onExecute={executeQuery}
      />
      <JsonViewer jsonResult={jsonResult} />
    </Container>
  );
}
