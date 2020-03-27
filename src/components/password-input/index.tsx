import React, { useState } from "react";
import { Field } from "redux-form";
import { ReactComponent as Eye } from "../../icons/eye.svg";
import { ReactComponent as Check } from "../../icons/check.svg";
import { ReactComponent as Error } from "../../icons/validation-failed.svg";
import { useSelector } from "react-redux";

const PasswordInput = () => {
  const [ isPasswordType, setPasswordType ] = useState(true);
  const [ passwordTouched, setPasswordTouched ] = useState(false);
  const [isBluredOnce, setBluredOnce] = useState(false);

  const toggleType = () => {
    setPasswordType(!isPasswordType);
  };

  const { auth } = useSelector((store: any) => store.form);

  const password = auth && auth.values ? auth.values.password : '';

  const checkForLetterCase = /[a-z]/.test(password);
  const checkForUpperCase = /[A-Z]/.test(password);
  const checkForNumber = /[0-9]/.test(password);
  const checkForLength = password.length > 7;

  const isValid = checkForLetterCase && checkForUpperCase && checkForNumber && checkForLength;

  const isActive = auth && auth.active === 'password';
  if (isActive && !passwordTouched) {
    setPasswordTouched(true);
  }

  if(passwordTouched && !isActive && !isBluredOnce) {
    setBluredOnce(true);
  }

  const shouldShowValidity = isValid || (isBluredOnce && !isActive);

  const getInputClassName = () => {
    if(isValid) {
      return 'field-group__input field-group__input--valid';
    }

    return (isBluredOnce && !isActive) ? 'field-group__input field-group__input--error' : 'field-group__input';
  };

  const getValidatorClassName = ({regex, length}: {regex?: RegExp; length?: number}) => {
    const isLocalValid = (regex && regex.test(password)) || (length && password.length >= 8);

    if(isActive || !passwordTouched) {
      return isLocalValid
        ? 'field-group-checks__item field-group-checks__item--valid'
        : 'field-group-checks__item';
    }

    return isLocalValid
      ? 'field-group-checks__item field-group-checks__item--valid'
      : 'field-group-checks__item field-group-checks__item--error';
  };

  return (
    <>
      <label htmlFor="password" className="field-group__label">Password</label>
      <div className="field-group__container">
        <Field
          name="password"
          type={isPasswordType ? 'password' : 'text'}
          component="input"
          placeholder="Create password"
          id="password"
          className={getInputClassName()}
        />
        <i className={`field-group__icon `}>
          <span
            className={`field-group__eye-icon ${isPasswordType ? 'field-group__eye-icon--crossed' : ''}`}
            onClick={toggleType}
          >
            <Eye/>
          </span>
          {shouldShowValidity && (
            isValid ? <Check/> : <Error/>
            )}
        </i>
      </div>

      <ul className="field-group-checks">
        <li className={getValidatorClassName({regex: /[a-z]/})}>
          One lowercase character
        </li>

        <li className={getValidatorClassName({regex: /[0-9]/})}>
          One number
        </li>

        <li className={getValidatorClassName({regex: /[A-Z]/})}>
          One uppercase character
        </li>

        <li className={getValidatorClassName({length: 8})}>
          At least 8 symbols
        </li>
      </ul>
    </>
  );
};

export default PasswordInput;
