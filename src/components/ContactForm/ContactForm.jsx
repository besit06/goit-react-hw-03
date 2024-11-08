import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import s from './ContactForm.module.css';

const ContactForm = ({ addContact }) => {
  const initialValues = { name: '', number: '' };
  const validationSchema = Yup.object({
    name: Yup.string()
      .required('Обовязковий')
      .min(3, 'Має бути принаймні 3 символи')
      .max(50, 'Має бути 50 символів або менше'),
    number: Yup.string()
      .required('Обовязковий')
      .matches(/^\d{3}-\d{2}-\d{2}$/, 'Формат має бути 000-00-00'),
  });

  const onSubmit = (values, { resetForm }) => {
    addContact(values.name, values.number);
    resetForm();
  };

  return (
    <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
      <Form className={s.form}>
        <label>
          Імя
          <Field name="name" type="text" />
          <ErrorMessage name="name" component="div" className={s.error} />
        </label>
        <label>
         Номер
          <Field name="number" type="text" />
          <ErrorMessage name="number" component="div" className={s.error} />
        </label>
        <button type="submit">Додати контакт</button>
      </Form>
    </Formik>
  );
};

export default ContactForm;

