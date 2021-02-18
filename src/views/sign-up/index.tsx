// lib
import React, { useCallback } from 'react';
import firebase from 'firebase/app';
import { useSnackbar } from 'notistack';
// Next
import { NextPage, InitialProps } from 'next';
import Link from 'next/link';
import { useRouter } from 'next/router';
// Redux
import { useSelector } from 'react-redux';
// Component
import AuthLayout from '@views/components/auth-layout';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
// Form
import { useFormik } from 'formik';
import { FormValues, initialValues, validationSchema } from './form';
// Localization
import { useTranslation, NamespaceEnum } from '@i18n';
// Action
import * as AppActions from '@actions/app.action';
// Type
import { StyledComponentProps } from '@type/material-ui';
// Style
import { useStyles, styles } from './style';
// Misc
import { AppRoutesEnum } from '@enums/route.enum';

interface Props extends InitialProps, StyledComponentProps<typeof styles> {}

const SignUp: NextPage<Props, InitialProps> = (props) => {
  const { namespacesRequired } = props;
  const classes = useStyles(props);
  const { t } = useTranslation(namespacesRequired);
  const { enqueueSnackbar } = useSnackbar();
  const router = useRouter();

  const onSubmit = useCallback(async (values: FormValues) => {
    const { email, password, firstName, lastName } = values;
    try {
      await firebase.auth().setPersistence(firebase.auth.Auth.Persistence.SESSION);
      const userCredential = await firebase.auth().createUserWithEmailAndPassword(email, password);
      const user = userCredential.user;
      const displayName = `${firstName} ${lastName}`;
      if (user) {
        await user.updateProfile({
          displayName,
        });
      }
      enqueueSnackbar(`Welcome ${displayName}`, { variant: 'success' });
      router.push(AppRoutesEnum.HOME);
    } catch (error) {
      enqueueSnackbar(error.message, { variant: 'error' });
    }
  }, []);

  const formik = useFormik<FormValues>({
    initialValues,
    validationSchema,
    onSubmit,
  });

  return (
    <AuthLayout>
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          {t('sign_up')}
        </Typography>
        <form className={classes.form} onSubmit={formik.handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <TextField
                id="first-name"
                name="firstName"
                label={t('first_name')}
                onChange={formik.handleChange}
                value={formik.values.firstName}
                onBlur={formik.handleBlur}
                helperText={
                  formik.errors.firstName && formik.touched.firstName && t(formik.errors.firstName)
                }
                error={Boolean(formik.errors.firstName) && formik.touched.firstName}
                variant="outlined"
                required
                fullWidth
                autoComplete="first-name"
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                id="last-name"
                name="lastName"
                label={t('last_name')}
                onChange={formik.handleChange}
                value={formik.values.lastName}
                onBlur={formik.handleBlur}
                helperText={
                  formik.errors.lastName && formik.touched.lastName && t(formik.errors.lastName)
                }
                error={Boolean(formik.errors.lastName) && formik.touched.lastName}
                variant="outlined"
                required
                fullWidth
                autoComplete="last-name"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                id="email"
                name="email"
                label={t('email_address')}
                onChange={formik.handleChange}
                value={formik.values.email}
                onBlur={formik.handleBlur}
                helperText={formik.errors.email && formik.touched.email && t(formik.errors.email)}
                error={Boolean(formik.errors.email) && formik.touched.email}
                variant="outlined"
                required
                fullWidth
                autoComplete="email"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                id="password"
                name="password"
                type="password"
                label={t('password')}
                value={formik.values.password}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                helperText={
                  formik.errors.password && formik.touched.password && t(formik.errors.password)
                }
                error={Boolean(formik.errors.password) && formik.touched.password}
                variant="outlined"
                required
                fullWidth
                autoComplete="password"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                id="confirm-password"
                name="confirmPassword"
                type="password"
                label={t('confirm_password')}
                value={formik.values.confirmPassword}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                helperText={
                  formik.errors.confirmPassword &&
                  formik.touched.confirmPassword &&
                  t(formik.errors.confirmPassword)
                }
                error={Boolean(formik.errors.confirmPassword) && formik.touched.confirmPassword}
                variant="outlined"
                required
                fullWidth
                autoComplete="confirm-password"
              />
            </Grid>
            <Grid item xs={12}>
              <Button
                type="submit"
                disabled={!formik.isValid || !formik.dirty}
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
              >
                {t('sign_up')}
              </Button>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Link href="#">
                <a className={classes.forgotPassword}>{t('forgot_password')}</a>
              </Link>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Link href={AppRoutesEnum.SIGN_IN}>
                <a className={classes.signUp}>{t('sign_in_if_have_account')}</a>
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
    </AuthLayout>
  );
};

SignUp.getInitialProps = async ({ req }) => {
  return {
    title: 'Sign Up',
    namespacesRequired: [NamespaceEnum.AUTH_PAGE],
  };
};

export default SignUp;
