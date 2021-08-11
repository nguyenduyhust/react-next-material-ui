import * as Yup from 'yup';

export type FormValues = {
  displayName: string;
  language: string;
};

export const validationSchema = Yup.object().shape({
  displayName: Yup.string().required('required'),
  language: Yup.string().required('required'),
});

export const languageOptions: Array<{
  label: string;
  value: string;
}> = [
  {
    label: 'english',
    value: 'en',
  },
  {
    label: 'japanese',
    value: 'ja',
  },
];
