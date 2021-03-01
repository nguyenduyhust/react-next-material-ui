import * as Yup from 'yup';

export type FormValues = {
  displayName: string;
  email: string;
  password: string;
  confirmPassword: string;
};

export const initialValues: FormValues = {
  displayName: '',
  email: '',
  password: '',
  confirmPassword: '',
};

export const validationSchema = Yup.object().shape({
  displayName: Yup.string().required('required'),
  email: Yup.string().required('required').email('invalid_email'),
  password: Yup.string().required('required').min(8, 'min_password_validate_text'),
  confirmPassword: Yup.string().test('match-password', 'password_does_not_match', function (value) {
    return value === this.parent.password;
  }),
});
