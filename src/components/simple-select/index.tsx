import React, { CSSProperties, useState } from "react";
import Select from 'react-select';
import { useSelector } from "react-redux";

const SimpleSelect = ({ input, options, formName, name }: any) => {
  const [ isBluredOnce, setBluredOnce ] = useState(false);

  const form = useSelector((store: any) => store.form[formName]);
  const { value } = form?.values && form?.values[name] ? form.values[name] : '';

  const isValid = !!value;

  const shouldShowValidity = isValid || isBluredOnce;

  console.log('isBluredOnce', isBluredOnce);
  console.log('isValid', isValid);

  const customStyles = {
    control: (provided: CSSProperties, {isFocused, hasValue}: any): CSSProperties => {
      const backgroundColor = isFocused || hasValue ? '#FFFFFF' : '#F5F6F7';
      let borderColor = isFocused ? '#09A2C3': '#EBEEEE';

      if(shouldShowValidity && !isValid) {
        borderColor = '#F43015';
      }

      if(hasValue) {
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
  );
};

export default SimpleSelect;
