import { Formik } from 'formik';

export interface MemesFormProps {
  setTopText: (string: string) => void;
  setBottomText: (string: string) => void;
}

export const MemesForm = ({ setTopText, setBottomText }: MemesFormProps) => (
  <div>
    <Formik
      initialValues={{ topText: '', bottomText: '' }}
      validate={(values) => {
        const errors = {};
        if (!values.topText) {
          errors.topText = 'Must not be empty!';
        }
        if (!values.bottomText) {
          errors.bottomText = 'Must not be empty!';
        }
        return errors;
      }}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          const { topText, bottomText } = values;
          setTopText(topText);
          setBottomText(bottomText);
          setSubmitting(false);
        }, 400);
      }}
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleSubmit,
        isSubmitting,
      }) => (
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="topText"
            onChange={handleChange}
            value={values.topText}
          />
          {errors.topText && touched.topText && errors.topText}
          <input
            type="text"
            name="bottomText"
            onChange={handleChange}
            value={values.bottomText}
          />
          {errors.bottomText && touched.bottomText && errors.bottomText}
          <button type="submit" disabled={isSubmitting}>
            Submit
          </button>
        </form>
      )}
    </Formik>
  </div>
);
