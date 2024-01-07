import { Button, Grid, List, ListItem, Paper } from '@mui/material';
import { FormikProps, useFormik } from 'formik';
import FormInput, { Values } from '../../components/FormInput/FormInput';

import { useFirebaseAuth } from '../../services/auth/firebase';
import { Link, useNavigate } from 'react-router-dom';
import GoogleButton from '../../components/GoogleButton/GoogleButton';
import { useI18n } from '../../components/Context/ValueContext';
import * as Yup from 'yup';
import { useEffect } from 'react';

const SignInSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Required'),
  password: Yup.string().min(8, 'Too Short!').required('Required'),
});

const SignIn = () => {
  const i18n = useI18n();
  const { user, error, signInWithGoogle, logInWithEmailAndPassword } =
    useFirebaseAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (user) navigate('/main');
  }, [navigate, user]);

  const formik: FormikProps<Values> = useFormik({
    initialValues: {
      name: '',
      email: '',
      password: '',
      passwordConfirm: '',
    },
    validationSchema: SignInSchema,
    onSubmit: (values) => {
      logInWithEmailAndPassword(values.email, values.password);
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
        <h2>{i18n.auth.signIn}</h2>
        <GoogleButton
          googleButtonName={i18n.auth.googleButton}
          signInWithGoogleHandler={signInWithGoogle}
        />
        <form onSubmit={formik.handleSubmit}>
          <List
            sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
          >
            {error && <ListItem>{error.code}</ListItem>}
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
            <ListItem>
              <Grid sx={{ marginRight: '1rem' }}>
                {i18n.auth.dontHaveAccount}
              </Grid>
              <Link to={'/signup'}>{i18n.auth.signUpLink}</Link>
            </ListItem>
          </List>
        </form>
      </Paper>
    </Grid>
  );
};

export default SignIn;
