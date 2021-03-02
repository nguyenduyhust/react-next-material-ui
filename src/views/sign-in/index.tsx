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
// Type
import { StyledComponentProps } from '@type/material-ui';
// Style
import { useStyles, styles } from './style';
// Misc
import { AppRoutesEnum } from '@enums/route.enum';
import { FirebaseService } from '~/services/firebase.service';

interface Props extends InitialProps, StyledComponentProps<typeof styles> {}

const SignIn: NextPage<Props, InitialProps> = (props) => {
  const { namespacesRequired } = props;
  const classes = useStyles(props);
  const { t } = useTranslation(namespacesRequired);
  const { enqueueSnackbar } = useSnackbar();
  const router = useRouter();

  const onSubmit = useCallback(async (values: FormValues) => {
    const { email, password } = values;
    try {
      const userCredential = await FirebaseService.signIn({ email, password });
      const user = userCredential.user;
      enqueueSnackbar(t('sign_in_hello', { name: user?.displayName }), { variant: 'success' });
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
        {t('sign_in')}
      </Typography>
      <form className={classes.form} onSubmit={formik.handleSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              id="email"
              name="email"
              label={t('email_address')}
              onChange={formik.handleChange}
              value={formik.values.email}
              helperText={formik.errors.email && t(formik.errors.email)}
              error={Boolean(formik.errors.email)}
              variant="outlined"
              required
              fullWidth
              autoComplete="email"
              autoFocus
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
              helperText={formik.errors.password && t(formik.errors.password)}
              error={Boolean(formik.errors.password)}
              variant="outlined"
              required
              fullWidth
              autoComplete="password"
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
              {t('sign_in')}
            </Button>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Link href="#">
              <a className={classes.forgotPassword}>{t('forgot_password')}</a>
            </Link>
          </Grid>
          <Grid item xs={12} sm={6} className={classes.signUp}>
            <Link href={AppRoutesEnum.SIGN_UP}>
              <a>{t('sign_up_if_do_not_have_account')}</a>
            </Link>
          </Grid>
        </Grid>
      </form>
    </AuthLayout>
  );
};

SignIn.getInitialProps = async ({ req }) => {
  return {
    title: 'Sign In',
    namespacesRequired: [NamespaceEnum.AUTH_PAGE],
  };
};

export default SignIn;
