import useData from "../hooks/use-data";

const BasicForm = (props) => {
  const {
    value: firstNameInput,
    isErrorHandler: firstNameIsErrorHandler,
    isValid: firstNameIsValid,
    valueChangeHandler: firtNameChangeHandler,
    valueBlurHandler: firtNameBlurHandler,
    reset: resetFirstNameInput,
    classesError: firstNameClasses,
  } = useData((event) => event.trim() !== "");

  const {
    value: lastNameInput,
    isErrorHandler: lastNameIsErrorHandler,
    isValid: lastNameIsValid,
    valueChangeHandler: lastNameChangeHandler,
    valueBlurHandler: lastNameBlurHandler,
    reset: resetLastNameInput,
    classesError: lastNameClasses,
  } = useData((event) => event.trim() !== "");

  const {
    value: emailInput,
    isErrorHandler: emailIsErrorHandler,
    isValid: emailIsValid,
    valueChangeHandler: emailChangeHandler,
    valueBlurHandler: emailBlurHandler,
    reset: reseEmailInput,
    classesError: emailClasses,
  } = useData((event) => event.includes("@"));

  let formIsValid = false;
  if (firstNameIsValid && lastNameIsValid && emailIsValid) {
    formIsValid = true;
  }

  const formSubmissionHandler = (event) => {
    event.preventDefault();

    if (!firstNameIsValid && !lastNameIsValid) {
      return;
    }

    resetFirstNameInput();
    resetLastNameInput();
    reseEmailInput();
    console.log(firstNameInput);
    console.log(lastNameInput);
    console.log(emailInput);
  };

  return (
    <form onSubmit={formSubmissionHandler}>
      <div className="control-group">
        <div className={firstNameClasses}>
          <label htmlFor="name">First Name</label>
          <input
            type="text"
            id="name"
            onChange={firtNameChangeHandler}
            onBlur={firtNameBlurHandler}
            value={firstNameInput}
          />
          {firstNameIsErrorHandler && (
            <p className="error-text">First Name cannot be empty</p>
          )}
        </div>
        <div className={lastNameClasses}>
          <label htmlFor="name">Last Name</label>
          <input
            type="text"
            id="name"
            onChange={lastNameChangeHandler}
            onBlur={lastNameBlurHandler}
            value={lastNameInput}
          />
          {lastNameIsErrorHandler && (
            <p className="error-text">Last Name cannot be empty</p>
          )}
        </div>
      </div>
      <div className={emailClasses}>
        <label htmlFor="text">E-Mail Address</label>
        <input
          type="email"
          id="email"
          onChange={emailChangeHandler}
          onBlur={emailBlurHandler}
          value={emailInput}
        />
        {emailIsErrorHandler && (
          <p className="error-text">Please enter a valid email</p>
        )}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
