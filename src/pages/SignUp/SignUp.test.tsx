import React from 'react';
import SignUp from './SignUp';
import renderer from 'react-test-renderer';

describe('SignUp', () => {
  beforeEach(() => {
    jest.resetAllMocks();
  });
  it('should render without errors', () => {
    const tree = renderer.create(<SignUp />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
