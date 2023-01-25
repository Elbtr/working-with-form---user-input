import { useState } from "react";

const useData = (validateValue) => {
  const [valueInput, setValueInput] = useState("");
  const [isTouched, setIsTouched] = useState(false);

  const valueIsValid = validateValue(valueInput);
  const isErrorHandler = !valueIsValid && isTouched;

  const valueChangeHandler = (event) => {
    setValueInput(event.target.value);
  };

  const valueBlurHandler = () => {
    setIsTouched(true);
  };

  const reset = () => {
    setValueInput("");
    setIsTouched(false);
  };

  const classesError = isErrorHandler
    ? "form-control invalid"
    : "form-control ";
  return {
    value: valueInput,
    isErrorHandler,
    isValid: valueIsValid,
    classesError,
    valueChangeHandler,
    valueBlurHandler,
    reset,
  };
};

export default useData;
