import {
  FormControl,
  FormHelperText,
  InputLabel,
  OutlinedInput,
} from '@mui/material';
import { FormikProps } from 'formik';

export interface Values {
  name: string;
  email: string;
  password: string;
  passwordConfirm: string;
}

type FormInputType = {
  title: 'name' | 'email' | 'password' | 'passwordConfirm';
  type: 'text' | 'email' | 'password';
  text: string;
  formik: FormikProps<Values>;
};
const FormInput = ({ title, type, text, formik }: FormInputType) => {
  return (
    <FormControl error={!!formik.errors[title]} variant="outlined">
      <InputLabel htmlFor={title}>{text}</InputLabel>
      <OutlinedInput
        label={text}
        id={title}
        type={type}
        onChange={formik.handleChange}
        value={formik.values[title]}
        aria-describedby="component-error-text"
      />
      {formik.errors[title] && (
        <FormHelperText id="component-error-text">
          {formik.errors[title]}
        </FormHelperText>
      )}
    </FormControl>
  );
};

export default FormInput;
