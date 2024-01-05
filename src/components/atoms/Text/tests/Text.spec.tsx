import React from 'react';
import { render } from '@testing-library/react';
import Text from '../Text';

enum Variant {
  'H1',
  'H2',
  'H3',
  'H4',
  'H5',
  'BOLD',
  'REGULAR',
  'ERROR',
}

describe('Text Component', () => {
  const variants: (keyof typeof Variant)[] = [
    'H1',
    'H2',
    'H3',
    'H4',
    'H5',
    'BOLD',
    'REGULAR',
    'ERROR',
  ];

  variants.forEach((variant) => {
    it(`renders ${variant} variant correctly`, () => {
      const { asFragment } = render(
        <Text variant={variant}>{`${variant} Text`}</Text>
      );
      expect(asFragment()).toMatchSnapshot();
    });
  });

  it('renders with custom color', () => {
    const { asFragment } = render(
      <Text variant="H1" color="blue">
        Colored Header
      </Text>
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it('renders small text when small prop is true', () => {
    const { asFragment } = render(
      <Text variant="BOLD" small>
        Small Bold Text
      </Text>
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it('renders regular text by default', () => {
    const { asFragment } = render(<Text variant={'H1'}>Default Text</Text>);
    expect(asFragment()).toMatchSnapshot();
  });

  it('renders correctly with numerical children', () => {
    const { asFragment } = render(<Text variant="H1">12345</Text>);
    expect(asFragment()).toMatchSnapshot();
  });

  it('renders correctly with no children', () => {
    const { asFragment } = render(<Text variant="H1" />);
    expect(asFragment()).toMatchSnapshot();
  });
});
