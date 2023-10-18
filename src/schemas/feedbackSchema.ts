import * as yup from 'yup';

export const feedbackSchema = yup.object().shape({
  comment: yup.string().required('Comment is required'),
  suggestion: yup.string(),
});
