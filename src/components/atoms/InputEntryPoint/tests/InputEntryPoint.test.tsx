import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import InputEntryPoint from '../InputEntryPoint';
import userEvent from '@testing-library/user-event';

describe('InputEntryPoint', () => {
  let mockValue = '';
  const mockSetValue = jest.fn((newState) => {
    mockValue = newState.target.value;
  });

  const renderComponent = () =>
    render(
      <InputEntryPoint
        value={mockValue}
        onChange={mockSetValue}
        onExecute={jest.fn()}
      />
    );

  it('renders InputEntryPoint component', () => {
    renderComponent();
    expect(screen.getByRole('textbox')).toBeInTheDocument();
    expect(screen.getByRole('button')).toBeInTheDocument();
  });

  it('allows typing in input', async () => {
    renderComponent();
    const input = screen.getByRole('textbox') as HTMLInputElement;
    await userEvent.type(input, 'test value');

    await waitFor(() => {
      expect(mockSetValue).toHaveBeenCalled();
    });
  });

  it('matches snapshot', () => {
    const { asFragment } = renderComponent();
    expect(asFragment()).toMatchSnapshot();
  });
});
