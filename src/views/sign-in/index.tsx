// lib
import React, { useCallback } from 'react';
// Next
import { NextPage, InitialProps } from 'next';
import Link from 'next/link';
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

interface Props extends InitialProps, StyledComponentProps<typeof styles> {}

const SignIn: NextPage<Props, InitialProps> = (props) => {
  const { namespacesRequired } = props;
  const classes = useStyles(props);
  const { t } = useTranslation(namespacesRequired);
  console.log(t('sign_in'));

  const onSubmit = useCallback((values: FormValues) => {
    console.log('values: ', values);
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
          {t('sign_in')}
        </Typography>
        <form className={classes.form} onSubmit={formik.handleSubmit}>
          <TextField
            id="email"
            name="email"
            label={t('email_address')}
            onChange={formik.handleChange}
            value={formik.values.email}
            helperText={formik.errors.email && t(formik.errors.email)}
            error={Boolean(formik.errors.email)}
            variant="outlined"
            margin="normal"
            required
            fullWidth
            autoComplete="email"
            autoFocus
          />
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
            margin="normal"
            required
            fullWidth
            autoComplete="current-password"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            {t('sign_in')}
          </Button>
          <Grid container>
            <Grid item xs>
              <Link href="#">
                <a className={classes.forgotPassword}>{t('forgot_password')}</a>
              </Link>
            </Grid>
            <Grid item>
              <Link href="#">
                <a className={classes.signUp}>{t('sign_up_if_do_not_have_account')}</a>
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
    </AuthLayout>
  );
};

SignIn.getInitialProps = async ({ req }) => {
  return {
    title: 'Sign In',
    namespacesRequired: [NamespaceEnum.SIGN_IN],
  };
};

export default SignIn;
