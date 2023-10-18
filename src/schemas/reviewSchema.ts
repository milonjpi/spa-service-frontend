import * as yup from 'yup';

export const reviewSchema = yup.object().shape({
  review: yup.string().required('Review is required'),
});
