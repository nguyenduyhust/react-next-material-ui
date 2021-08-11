// libs
import React, { useCallback, useRef } from 'react';
import firebase from 'firebase';
// components
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import DialogActions from '@material-ui/core/DialogActions';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuItem from '@material-ui/core/MenuItem';
import CircularProgress from '@material-ui/core/CircularProgress';
import CreateIcon from '@material-ui/icons/Create';
// form
import { useFormik } from 'formik';
import { FormValues, validationSchema, languageOptions } from './form';
// Localization
import { useTranslation, NamespaceEnum } from '~/i18n';
// selectors
import { useSelector } from 'react-redux';
import { sUserPreference } from '~/redux/selectors/app.selector';
// hooks
import { useSnackbar } from 'notistack';
// utils
import * as FileConverterUtils from '~/utils/file-converter.util';
// enum
// type
import { StyledComponentProps } from '~/types/material-ui';
// style
import { useStyles, styles } from './style';
import FirebaseService from '~/services/firebase.service';

interface Props extends StyledComponentProps<typeof styles> {
  open: boolean;
  onClose: () => void;
  user: firebase.User;
}

const UserSettingDialog: React.FC<Props> = (props) => {
  const { open, onClose, user } = props;
  const classes = useStyles(props);
  const { t } = useTranslation(NamespaceEnum.COMMON);
  const { language } = useSelector(sUserPreference);
  const { enqueueSnackbar } = useSnackbar();

  const onSubmit = useCallback(
    async (values: FormValues) => {
      try {
        if (values.language !== language) {
          await FirebaseService.updateUserPreference({
            uid: user.uid,
            preference: {
              language: values.language,
            },
          });
        }
        if (values.displayName !== user.displayName) {
          await user.updateProfile({
            displayName: values.displayName,
          });
        }
      } catch (error) {
        enqueueSnackbar(error.message, { variant: 'error' });
      }
    },
    [user, language],
  );
  const formik = useFormik<FormValues>({
    enableReinitialize: true,
    initialValues: {
      displayName: user.displayName || '',
      language,
    },
    validationSchema,
    onSubmit,
  });

  const onDialogClose = useCallback(() => {
    formik.resetForm();
    onClose();
  }, []);

  const avatarInputEl = useRef<HTMLInputElement>(null);
  const onEditAvatarButtonClick = () => {
    if (avatarInputEl.current) {
      avatarInputEl.current.click();
    }
  };

  const onFileInputChange = useCallback(
    async (event: React.ChangeEvent<HTMLInputElement>) => {
      const file = event.target && event.target.files && event.target.files[0];
      if (!file) {
        return;
      }
      try {
        const avatarUrl = await FirebaseService.uploadUserAvatarAsset({
          uid: user.uid,
          image: await FileConverterUtils.fileToBase64(file),
        });
        const a = await user.updateProfile({
          photoURL: avatarUrl,
        });
      } catch (error) {
        enqueueSnackbar(error.message, { variant: 'error' });
      }
    },
    [user],
  );

  return (
    <Dialog
      open={open}
      onClose={onDialogClose}
      classes={{ paper: classes.dialogPaper }}
      scroll="body"
    >
      <DialogTitle className={classes.dialogTitle}>{t('user_setting')}</DialogTitle>
      <form onSubmit={formik.handleSubmit}>
        <DialogContent className={classes.dialogContent}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <div className={classes.avatar}>
                <img src={user.photoURL || '/static/icons/default_account_icon.png'} alt="" />
                <input ref={avatarInputEl} type="file" onChange={onFileInputChange} hidden />
                <IconButton
                  className={classes.editAvatarButton}
                  size="small"
                  onClick={onEditAvatarButtonClick}
                >
                  <CreateIcon />
                </IconButton>
              </div>
            </Grid>
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
                label={t('email_address')}
                value={user.email}
                variant="outlined"
                required
                fullWidth
                disabled
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                name="language"
                label={t('language')}
                select
                value={formik.values.language}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                helperText={
                  formik.errors.language && formik.touched.language && t(formik.errors.language)
                }
                error={Boolean(formik.errors.language) && formik.touched.language}
                variant="outlined"
                required
                fullWidth
              >
                {languageOptions.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {t(option.label)}
                  </MenuItem>
                ))}
              </TextField>
            </Grid>
          </Grid>
        </DialogContent>
        <DialogActions className={classes.dialogActions}>
          <Button onClick={onDialogClose}>{t('cancel')}</Button>
          <Button
            type="submit"
            disabled={!formik.isValid || !formik.dirty || formik.isSubmitting}
            variant="contained"
            color="primary"
            className={classes.submitButton}
          >
            {formik.isSubmitting ? (
              <CircularProgress className={classes.loadingIcon} />
            ) : (
              t('submit')
            )}
          </Button>
        </DialogActions>
      </form>
    </Dialog>
  );
};

export default UserSettingDialog;
