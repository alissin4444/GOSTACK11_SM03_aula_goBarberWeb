import { ValidationError } from "yup";

interface ValidationErrors {
  [key: string]: string;
}

export default function getValidationErrors(
  errors: ValidationError,
): ValidationErrors {
  const validationErrors: ValidationErrors = {};

  errors.inner.forEach((err) => {
    validationErrors[err.path] = err.message;
  });

  return validationErrors;
}
