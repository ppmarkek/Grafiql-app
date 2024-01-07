import '@testing-library/jest-dom';
import { render, screen, fireEvent } from '@testing-library/react';
import QueryEditor from './QueryEditor';

jest.mock('@monaco-editor/react', () => {
  const FakeEditor = jest.fn((props) => {
    return (
      <textarea
        data-auto={props.wrapperClassName}
        data-testid="monaco-editor"
        onChange={(e) => props.onChange(e.target.value)}
        onClick={() => props.onExecute()}
        value={props.value}
      ></textarea>
    );
  });
  return FakeEditor;
});

test('QueryEditor renders correctly', () => {
  const query = 'query { hello }';
  const onChangeMock = jest.fn();
  const onExecuteMock = jest.fn();

  render(
    <QueryEditor
      value={query}
      onChange={onChangeMock}
      onExecute={onExecuteMock}
    />
  );

  expect(screen.getByTestId('code-editor')).toBeInTheDocument();

  expect(screen.getByTestId('monaco-editor')).toHaveValue(query);
});

test('QueryEditor calls onChange when text is changed', () => {
  const query = 'query { hello }';
  const onChangeMock = jest.fn();
  const onExecuteMock = jest.fn();

  render(
    <QueryEditor
      value={query}
      onChange={onChangeMock}
      onExecute={onExecuteMock}
    />
  );

  const newQuery = 'new query';

  fireEvent.change(screen.getByRole('textbox'), {
    target: { value: newQuery },
  });

  expect(onChangeMock).toHaveBeenCalledWith(newQuery);
});

test('QueryEditor calls onExecute when button is clicked', () => {
  const query = 'query { hello }';
  const onChangeMock = jest.fn();
  const onExecuteMock = jest.fn();

  render(
    <QueryEditor
      value={query}
      onChange={onChangeMock}
      onExecute={onExecuteMock}
    />
  );

  fireEvent.click(screen.getByTestId('execute-button'));

  expect(onExecuteMock).toHaveBeenCalled();
});
