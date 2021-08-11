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
import AuthLayout from '~/components/auth-layout';
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
import { useTranslation, NamespaceEnum } from '~/i18n';
// Action
// Service
import { FirebaseService } from '~/services/firebase.service';
// Hooks
// Type
import { StyledComponentProps } from '~/types/material-ui';
// Style
import { useStyles, styles } from './style';
// Misc
import { AppRoutesEnum } from '~/enums/route.enum';

interface Props extends InitialProps, StyledComponentProps<typeof styles> {}

const SignUp: NextPage<Props, InitialProps> = (props) => {
  const { namespacesRequired } = props;
  const classes = useStyles(props);
  const { t } = useTranslation(namespacesRequired);
  const { enqueueSnackbar } = useSnackbar();
  const router = useRouter();

  const onSubmit = useCallback(async (values: FormValues) => {
    const { email, password, displayName } = values;
    try {
      await FirebaseService.signUp({
        email,
        password,
        displayName,
      });
      enqueueSnackbar(t('sign_up_welcome', { name: displayName }), { variant: 'success' });
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
      <Avatar className={classes.avatar}>
        <LockOutlinedIcon />
      </Avatar>
      <Typography component="h1" variant="h5">
        {t('sign_up')}
      </Typography>
      <form className={classes.form} onSubmit={formik.handleSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              id="display-name"
              name="displayName"
              label={t('display_name')}
              onChange={formik.handleChange}
              value={formik.values.displayName}
              onBlur={formik.handleBlur}
              helperText={
                formik.errors.displayName &&
                formik.touched.displayName &&
                t(formik.errors.displayName)
              }
              error={Boolean(formik.errors.displayName) && formik.touched.displayName}
              variant="outlined"
              required
              fullWidth
              autoComplete="display-name"
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
          <Grid item xs={12} sm={6} className={classes.signUp}>
            <Link href={AppRoutesEnum.SIGN_IN}>
              <a>{t('sign_in_if_have_account')}</a>
            </Link>
          </Grid>
        </Grid>
      </form>
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
