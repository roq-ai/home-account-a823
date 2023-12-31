import * as yup from 'yup';

export const expendituresValidationSchema = yup.object().shape({
  amount: yup.number().integer().required(),
  date: yup.date().required(),
  organization_id: yup.string().nullable().required(),
});
