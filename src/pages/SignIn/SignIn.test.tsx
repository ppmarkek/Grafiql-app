import React from 'react';
import SignIn from './SignIn';
import renderer from 'react-test-renderer';

describe('SignIn', () => {
  beforeEach(() => {
    jest.resetAllMocks();
  });
  it('should render without errors', () => {
    const tree = renderer.create(<SignIn />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
