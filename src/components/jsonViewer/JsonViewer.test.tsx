import '@testing-library/jest-dom';
import { render, screen, fireEvent } from '@testing-library/react';
import JsonViewer from './JsonViewer';
import { Provider } from 'react-redux';
import { store } from '../../services/api/createdStore';
import * as entrySliceModule from '../../services/api/slices/entrySlice';

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

global.prompt = () => '';

jest
  .spyOn(entrySliceModule, 'useEntrySelector')
  .mockReturnValue({ entry: 'https://spacex-production.up.railway.app/' });

test('JsonViewer renders correctly', () => {
  render(
    <Provider store={store}>
      <JsonViewer />
    </Provider>
  );
  expect(screen.getByTestId('code-editor')).toBeInTheDocument();
});

test('JsonViewer copies content to clipboard on button click', async () => {
  render(
    <Provider store={store}>
      <JsonViewer />
    </Provider>
  );

  document.execCommand = jest.fn();

  fireEvent.click(screen.getByTestId('copy-button'));
  expect(document.execCommand).toHaveBeenCalledWith('copy');
});
