// import { useState } from 'react';
import QueryEditor from '../../components/queryEditor/QueryEditor';
import JsonViewer from '../../components/jsonViewer/JsonViewer';
import { Container } from '../../styles/common';
import InputEntryPoint from '../../components/atoms/InputEntryPoint/InputEntryPoint';
import {
  setRequestBody,
  useRequestBodySelector,
} from '../../services/api/slices/requestSlice';
import { useState } from 'react';
import { useAppDispatch } from '../../services/api/store';
import {
  setEntry,
  useEntrySelector,
} from '../../services/api/slices/entrySlice';
import Documentation from '../../components/templates/Documentation/Documentation';

export default function MainPage() {
  const requestBody = useRequestBodySelector();
  const inputEntryPoint = useEntrySelector();
  const [queryBody, setQueryBody] = useState(requestBody.requestBody || '');
  const [entryPoint, setEntryPoint] = useState(inputEntryPoint.entry || '');

  const dispatch = useAppDispatch();

  const handleEntryChange = (event: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setEntryPoint(event.target.value.toString());
  };

  const handleQueryBodyChange = (value: string | undefined) => {
    setQueryBody(value || '');
  };

  const handleExecute = () => {
    dispatch(setEntry(entryPoint));
    dispatch(setRequestBody(queryBody));
  };

  return (
    <Container id="main-page">
      <InputEntryPoint
        value={entryPoint}
        onChange={handleEntryChange}
        onExecute={handleExecute}
      />
      <QueryEditor
        value={queryBody}
        onChange={handleQueryBodyChange}
        onExecute={handleExecute}
      />
      <Documentation />
      <JsonViewer />
    </Container>
  );
}
