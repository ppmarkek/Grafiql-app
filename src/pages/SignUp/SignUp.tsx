import { Button, Grid, List, ListItem, Paper } from '@mui/material';
import { FormikProps, useFormik } from 'formik';
import FormInput, { Values } from '../../components/FormInput/FormInput';

import { useFirebaseAuth } from '../../services/auth/firebase';
import { Link } from 'react-router-dom';
import GoogleButton from '../../components/GoogleButton/GoogleButton';
import { useI18n } from '../../components/Context/ValueContext';

const SignUp = () => {
  const i18n = useI18n();

  const {
    user,
    loading,
    error,
    registerWithEmailAndPassword,
    signInWithGoogle,
  } = useFirebaseAuth();
  console.log(user, loading, error);
  const formik: FormikProps<Values> = useFormik({
    initialValues: {
      name: '',
      email: '',
      password: '',
      passwordConfirm: '',
    },
    onSubmit: (values) => {
      registerWithEmailAndPassword(values.name, values.email, values.password);
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
        <h2>{i18n.auth.signUp}</h2>
        <GoogleButton
          googleButtonName={i18n.auth.googleButton}
          signInWithGoogleHandler={signInWithGoogle}
        />
        <form onSubmit={formik.handleSubmit}>
          <List
            sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
          >
            <ListItem>
              <FormInput
                title={'name'}
                text={i18n.auth.name}
                type={'text'}
                formik={formik}
              />
            </ListItem>
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
              <FormInput
                title={'passwordConfirm'}
                text={i18n.auth.passwordConfirm}
                type={'password'}
                formik={formik}
              />
            </ListItem>
            <ListItem>
              <Button type="submit">{i18n.auth.buttonName}</Button>
            </ListItem>
            <ListItem>
              <Grid sx={{ marginRight: '1rem' }}>{i18n.auth.haveAccount}</Grid>
              <Link to={'/signin'}>{i18n.auth.signInLink}</Link>
            </ListItem>
          </List>
        </form>
      </Paper>
    </Grid>
  );
};

export default SignUp;
