import * as yup from 'yup';

export const serviceSchema = yup.object().shape({
  serviceName: yup.string().required('Service Name is required'),
  description: yup.string().required('Description is required'),
  category: yup.string().required('Category is Required'),
  price: yup.number().required('Price is Required'),
  status: yup.string().required('Status is Required'),
});
