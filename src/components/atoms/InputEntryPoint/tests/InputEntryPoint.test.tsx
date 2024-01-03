import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import { ValueContext, Langs } from '../../../Context/ValueContext';
import InputEntryPoint from '../InputEntryPoint';

describe('InputEntryPoint', () => {
  let mockInputEntryPoint = '';
  const mockSetLanguage = jest.fn();
  const mockSetInputEntryPoint = jest.fn((newState) => {
    mockInputEntryPoint = newState;
  });

  const renderComponent = () =>
    render(
      <ValueContext.Provider
        value={{
          language: Langs.en,
          setLanguage: mockSetLanguage,
          inputEntryPoint: mockInputEntryPoint,
          setInputEntryPoint: mockSetInputEntryPoint,
        }}
      >
        <InputEntryPoint />
      </ValueContext.Provider>
    );

  it('renders InputEntryPoint component', () => {
    renderComponent();
    expect(screen.getByRole('textbox')).toBeInTheDocument();
    expect(screen.getByRole('button')).toBeInTheDocument();
  });

  it('allows typing in input', async () => {
    renderComponent();
    const input = screen.getByRole('textbox') as HTMLInputElement;
    fireEvent.change(input, { target: { value: 'test value' } });

    await waitFor(() => {
      expect(mockSetInputEntryPoint).toHaveBeenCalledWith('test value');
    });
  });

  it('clicking button logs value', async () => {
    const mockConsoleLog = jest.fn();
    global.console.log = mockConsoleLog;

    renderComponent();
    const input = screen.getByRole('textbox') as HTMLInputElement;

    fireEvent.change(input, { target: { value: 'test value' } });

    await waitFor(() => {
      expect(mockSetInputEntryPoint).toHaveBeenCalledWith('test value');
    });

    fireEvent.click(screen.getByRole('button'));

    await waitFor(() => {
      expect(mockConsoleLog).toHaveBeenCalledWith(mockInputEntryPoint);
    });
  });

  it('matches snapshot', () => {
    const { asFragment } = renderComponent();
    expect(asFragment()).toMatchSnapshot();
  });
});
