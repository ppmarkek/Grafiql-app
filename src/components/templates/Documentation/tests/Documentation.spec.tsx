import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Documentation from '../Documentation';
import { OpenButton } from '../style';

describe('Documentation Component', () => {
  it('renders without crashing', () => {
    render(<Documentation />);
  });

  it('toggles drawer state on button click', () => {
    render(<Documentation />);
    const button = screen.getByRole('button');
    fireEvent.click(button);
  });

  it('matches snapshot', () => {
    const { asFragment } = render(<Documentation />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('initially has the drawer closed and type set to all', async () => {
    render(<Documentation />);
    expect(screen.queryByTestId('drawer')).toBeNull();
  });

  it('displays correct content when a schema type is selected', async () => {
    render(<Documentation />);
    fireEvent.click(screen.getByTestId('open-button'));
    const queryRootButton = await screen.findByText('query: Root');
    fireEvent.click(queryRootButton);
    expect(screen.getByText('Root')).toBeInTheDocument();
  });

  it('returns to all types view when NavigateBeforeIcon is clicked', async () => {
    render(<Documentation />);
    fireEvent.click(screen.getByTestId('open-button'));
    const queryRootButton = await screen.findByText('query: Root');
    fireEvent.click(queryRootButton);
    fireEvent.click(screen.getByTestId('NavigateBeforeIcon'));
    expect(screen.getByText('All Schema Types')).toBeInTheDocument();
  });

  it('applies correct styles when active is true', () => {
    render(<OpenButton active="true" />);
    const button = screen.getByRole('button');
    expect(button).toHaveStyle('left: 387px');
    expect(button).toHaveStyle('transform: rotate(0.5turn)');
  });

  it('applies correct styles when active is false', () => {
    render(<OpenButton active={false} />);
    const button = screen.getByRole('button');
    const style = window.getComputedStyle(button);
    expect(style.left).toBe('17px');
    expect(style.transform).toBe('none');
  });
});
