import React from 'react';
import { FormikProps } from 'formik';
import FormInput, { Values } from './FormInput';
import renderer from 'react-test-renderer';

describe('FormInput', () => {
  beforeEach(() => {
    jest.resetAllMocks();
  });
  it('should render without errors', () => {
    const tree = renderer
      .create(
        <FormInput
          title="name"
          text="text"
          type="text"
          formik={
            {
              values: {
                name: '',
              },
              errors: {},
              handleChange: jest.fn(),
            } as unknown as FormikProps<Values>
          }
        />
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('should render with error', () => {
    const tree = renderer
      .create(
        <FormInput
          title="name"
          text="text"
          type="text"
          formik={
            {
              values: {
                name: '',
              },
              errors: { name: 'Required field' },
              handleChange: jest.fn(),
            } as unknown as FormikProps<Values>
          }
        />
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('should render with unrelated error', () => {
    const tree = renderer
      .create(
        <FormInput
          title="name"
          text="text"
          type="text"
          formik={
            {
              values: {
                name: '',
              },
              errors: { differentField: 'Required field' },
              handleChange: jest.fn(),
            } as unknown as FormikProps<Values>
          }
        />
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
