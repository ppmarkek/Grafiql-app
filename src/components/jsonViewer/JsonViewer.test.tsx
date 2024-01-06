import { render, screen, fireEvent } from '@testing-library/react';
import JsonViewer from './JsonViewer';

test('JsonViewer renders correctly', () => {
  const jsonResult = '{"key": "value"}';
  console.log(jsonResult);
  render(<JsonViewer />);

  expect(screen.getByLabelText('Code Editor')).toBeInTheDocument();
});

test('JsonViewer copies content to clipboard on button click', async () => {
  const jsonResult = '{"key": "value"}';
  console.log(jsonResult);
  render(<JsonViewer />);

  document.execCommand = jest.fn();

  fireEvent.click(screen.getByLabelText('Copy Content'));

  expect(document.execCommand).toHaveBeenCalledWith('copy');
});
