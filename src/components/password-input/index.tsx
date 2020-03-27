import React, { useState } from "react";
import { Field } from "redux-form";
import { ReactComponent as Eye } from "../../icons/eye.svg";
import { ReactComponent as Check } from "../../icons/check.svg";
import { useSelector } from "react-redux";

const PasswordInput = () => {
  const [isPasswordType, setPasswordType] = useState(true);

  const toggleType = () => {
    setPasswordType(!isPasswordType);
  };

  const { auth } = useSelector((store: any) => store.form);
  const password = auth && auth.values ? auth.values.password : '';

  console.log(password);

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
          className="field-group__input"
        />
        <i className={`field-group__icon `}>
          <span
            className={`field-group__eye-icon ${isPasswordType ? 'field-group__eye-icon--crossed' : ''}`}
            onClick={toggleType}
          >
            <Eye/>
          </span>
          <Check/>
        </i>
      </div>

      <ul className="field-group-checks">
        <li className={`field-group-checks__item ${/[a-z]/.test(password) ? 'field-group-checks__item--valid' : ''}`}>
          One lowercase character
        </li>

        <li className={`field-group-checks__item ${/[0-9]/.test(password) ? 'field-group-checks__item--valid' : ''}`}>
          One number
        </li>

        <li className={`field-group-checks__item ${/[A-Z]/.test(password) ? 'field-group-checks__item--valid' : ''}`}>
          One uppercase character
        </li>

        <li className={`field-group-checks__item ${password.length > 7 ? 'field-group-checks__item--valid' : ''}`}>
          At least 8 symbols
        </li>
      </ul>
    </>
  );
};

export default PasswordInput;
