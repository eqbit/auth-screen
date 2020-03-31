import React, { useState } from "react";
import { Field } from "redux-form";
import { ReactComponent as Eye } from "../../icons/eye.svg";
import { ReactComponent as Check } from "../../icons/check.svg";
import { ReactComponent as Error } from "../../icons/validation-failed.svg";
import { useSelector } from "react-redux";
import { validations } from '../../utils/validations'

interface Props {
  formName: string;
}

const PasswordInput: React.FC<Props> = ({ formName }) => {
  const [ isPasswordType, setPasswordType ] = useState(true);
  const [ isTouched, setIsTouched ] = useState(false);
  const [ isBluredOnce, setBluredOnce ] = useState(false);

  const toggleType = () => {
    setPasswordType(!isPasswordType);
  };

  const form = useSelector((store: any) => store.form[formName]);

  const password = form?.values?.password ? form.values.password : '';

  const isValid = validations.password(password);

  const isActive = form && form.active === 'password';
  if (isActive && !isTouched) {
    setIsTouched(true);
  }

  if (isTouched && !isActive && !isBluredOnce) {
    setBluredOnce(true);
  }

  const shouldShowValidity = isValid || (isBluredOnce && !isActive);

  const getInputClassName = () => {
    if (isValid) {
      return 'field-group__input field-group__input--valid';
    }

    return (isBluredOnce && !isActive) ? 'field-group__input field-group__input--error' : 'field-group__input';
  };

  const getValidatorClassName = (isLocallyValid: boolean): string => {
    if (isActive || !isTouched) {
      return isLocallyValid
        ? 'field-group-checks__item field-group-checks__item--valid'
        : 'field-group-checks__item';
    }

    return isLocallyValid
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
        <li className={getValidatorClassName(validations.checkForLowerCase(password))}>
          One lowercase character
        </li>

        <li className={getValidatorClassName(validations.checkForNumber(password))}>
          One number
        </li>

        <li className={getValidatorClassName(validations.checkForUpperCase(password))}>
          One uppercase character
        </li>

        <li className={getValidatorClassName(validations.checkForLength(password))}>
          At least 8 symbols
        </li>
      </ul>
    </>
  );
};

export default PasswordInput;
