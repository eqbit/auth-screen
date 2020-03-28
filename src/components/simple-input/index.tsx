import React, { useState } from "react";
import { Field } from "redux-form";
import { useSelector } from "react-redux";
import { ReactComponent as Check } from "../../icons/check.svg";
import { ReactComponent as Error } from "../../icons/validation-failed.svg";

interface Props {
  name: string;
  placeholder: string;
  label: string;
  icon: JSX.Element;
  validationType?: (value: string) => boolean;
  formName: string;
}

// TODO: implement error field

const SimpleInput: React.FC<Props> = (
  {
    name,
    placeholder,
    label,
    icon,
    validationType,
    formName
  }
) => {
  const [ isTouched, setIsTouched ] = useState(false);
  const [ isBluredOnce, setBluredOnce ] = useState(false);

  const form = useSelector((store: any) => store.form[formName]);
  const value = form && form.values && form.values[name] ? form.values[name] : '';

  const isValid: boolean = validationType ? validationType(value) : true;

  const isActive = form && form.active === name;
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

  return (
    <>
      <label htmlFor="name" className="field-group__label">{label}</label>
      <div className="field-group__container">
        <Field
          name={name}
          type="text"
          component="input"
          placeholder={placeholder}
          id={name}
          className={getInputClassName()}
        />
        <i className="field-group__icon">
          {shouldShowValidity ? (
            isValid ? <Check/> : <Error/>
          ) : icon}
        </i>
      </div>
    </>
  )
};

export default SimpleInput;
