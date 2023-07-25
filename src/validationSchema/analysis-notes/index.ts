import * as yup from 'yup';

export const analysisNotesValidationSchema = yup.object().shape({
  note: yup.string().required(),
  date: yup.date().required(),
  organization_id: yup.string().nullable().required(),
  user_id: yup.string().nullable().required(),
});
