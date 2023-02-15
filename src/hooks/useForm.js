import { useState } from 'react';

export const useForm = ({
  initialValues,
  validate,
  refs,
  onSuccess,
  onErrors,
  onSubmit,
}) => {
  const [inputValues, setInputValues] = useState(initialValues);
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const onChange = (e) => {
    const { name, value } = e.target;
    setInputValues({ ...inputValues, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setIsSubmitting(true);
    const validateResult = validate(inputValues);
    setErrors(validateResult);

    const errorKeys = Object.keys(validateResult);

    if (errorKeys.length !== 0) {
      const key = errorKeys[0];
      alert(validateResult[key]);
      onErrors();
      refs[key].current.focus();
      setIsSubmitting(false);
      return;
    }

    if (errorKeys.length === 0) {
      await onSubmit();
      return;
    }
  };

  return {
    inputValues,
    onChange,
    isSubmitting,
    errors,
    handleSubmit,
  };
};
