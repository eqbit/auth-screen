import React, { CSSProperties, useState } from "react";
import Select from 'react-select';
import { useSelector } from "react-redux";

const SimpleSelect = (
  {
    input,
    options,
    formName,
    errorText
  }: any
) => {
  const [ isBluredOnce, setBluredOnce ] = useState(false);

  const form = useSelector((store: any) => store.form[formName]);
  const { value } = form?.values && form?.values[input.name] ? form.values[input.name] : '';

  const isValid = !!value;

  const shouldShowValidity = isValid || isBluredOnce;

  const customStyles = {
    control: (provided: CSSProperties, { isFocused, hasValue }: any): any => {
      const backgroundColor = isFocused || hasValue || (shouldShowValidity && !isValid) ? '#FFFFFF' : '#F5F6F7';
      let borderColor = isFocused ? '#09A2C3' : '#EBEEEE';

      if (shouldShowValidity && !isValid) {
        borderColor = '#F43015';
      }

      if (hasValue) {
        borderColor = '#0AD65C';
      }

      return {
        ...provided,
        backgroundColor,
        borderColor,
        padding: '12px 15px',
        minHeight: 'unset',
        boxShadow: 'none',
        fontSize: '16px',

        '&:hover': {
          borderColor: '#84D0E1'
        }
      }
    },
    valueContainer: (provided: CSSProperties): CSSProperties => ({
      ...provided,
      padding: 0
    }),
    input: (provided: CSSProperties): CSSProperties => ({
      ...provided,
      padding: 0,
      margin: 0
    }),
    placeholder: (provided: CSSProperties): CSSProperties => ({
      ...provided,
      padding: 0,
      margin: 0
    }),
    indicatorsContainer: (provided: CSSProperties): CSSProperties => ({
      ...provided,
      margin: '-8px -10px -8px 0',
      transition: '0.3s'
    }),
    indicatorSeparator: (provided: CSSProperties): CSSProperties => ({
      display: 'none'
    })
  };

  return (
    <>
      <Select
        {...input}
        onChange={value => input.onChange(value)}
        onBlur={() => {
          setBluredOnce(true);
          input.onBlur(input.value);
        }}
        options={options}
        styles={customStyles}
      />

      {shouldShowValidity && !isValid && (
        <div className="field-group__helper field-group__helper--error">
          {errorText}
        </div>
      )}
    </>
  );
};

export default SimpleSelect;
