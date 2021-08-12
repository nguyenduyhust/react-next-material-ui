import * as Yup from 'yup';

export type FormValues = {
  displayName: string;
};

export const validationSchema = Yup.object().shape({
  displayName: Yup.string().required('required'),
});
