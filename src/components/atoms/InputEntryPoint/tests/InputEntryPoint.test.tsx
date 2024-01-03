import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import InputEntryPoint from '../InputEntryPoint';

describe('InputEntryPoint', () => {
  it('renders InputEntryPoint component', () => {
    render(<InputEntryPoint />);
    expect(screen.getByRole('textbox')).toBeInTheDocument();
    expect(screen.getByRole('button')).toBeInTheDocument();
  });

  it('allows typing in input', () => {
    render(<InputEntryPoint />);
    const input = screen.getByRole('textbox') as HTMLInputElement;
    fireEvent.change(input, { target: { value: 'test value' } });
    expect(input.value).toBe('test value');
  });

  it('clicking button logs value', () => {
    console.log = jest.fn();
    render(<InputEntryPoint />);
    const input = screen.getByRole('textbox');
    fireEvent.change(input, { target: { value: 'test value' } });
    fireEvent.click(screen.getByRole('button'));
    expect(console.log).toHaveBeenCalledWith('test value');
  });

  it('matches snapshot', () => {
    const { asFragment } = render(<InputEntryPoint />);
    expect(asFragment()).toMatchSnapshot();
  });
});
