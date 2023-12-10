import { Button, Grid, List, ListItem, Paper } from '@mui/material';
import { FormikProps, useFormik } from 'formik';
import FormInput, { Values } from '../../components/FormInput/FormInput';
import i18n from '../SignUp/en.json';

const SignIn = () => {
  const formik: FormikProps<Values> = useFormik({
    initialValues: {
      name: '',
      email: '',
      password: '',
      passwordConfirm: '',
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  return (
    <Grid
      sx={{
        width: '100%',
        height: '100%',
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
      }}
    >
      <Paper
        elevation={3}
        sx={{
          width: '60vw',
          height: '60vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-around',
          alignItems: 'center',
          position: 'relative',
          margin: 'auto',
        }}
      >
        <h1>{i18n.auth.signIn}</h1>
        <form onSubmit={formik.handleSubmit}>
          <List
            sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
          >
            <ListItem>
              <FormInput
                title={'email'}
                text={i18n.auth.email}
                type={'email'}
                formik={formik}
              />
            </ListItem>
            <ListItem>
              <FormInput
                title={'password'}
                text={i18n.auth.password}
                type={'password'}
                formik={formik}
              />
            </ListItem>
            <ListItem>
              <Button type="submit">{i18n.auth.buttonName}</Button>
            </ListItem>
          </List>
        </form>
      </Paper>
    </Grid>
  );
};

export default SignIn;
