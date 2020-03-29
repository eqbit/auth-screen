import React, { CSSProperties } from "react";
import Select from 'react-select'

const SimpleSelect = ({ input, options }: any) => {
  const customStyles = {
    control: (provided: CSSProperties, {isFocused, hasValue}: any): CSSProperties => {
      const backgroundColor = isFocused || hasValue ? '#FFFFFF' : '#F5F6F7';
      let borderColor = isFocused ? '#09A2C3': '#EBEEEE';

      if(hasValue) {
        borderColor = '#0AD65C';
      }

      return {
        ...provided,
        backgroundColor,
        borderColor,
        padding: '12px 15px',
        minHeight: 'unset',
        boxShadow: 'none'
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
    indicatorsContainer: (provided: CSSProperties, state: any): CSSProperties => {
      console.log(state);
      //const transform = isFocused ? 'rotate(180deg)' : 'none';

      return {
        ...provided,
        margin: '-8px -10px -8px 0',
        //transform,
        transition: '0.3s'
      }
    },
    indicatorSeparator: (provided: CSSProperties): CSSProperties => ({
      display: 'none'
    })
  };

  return (
    <Select
      {...input}
      onChange={value => input.onChange(value)}
      onBlur={() => input.onBlur(input.value)}
      options={options}
      styles={customStyles}
    />
  );
};

export default SimpleSelect;
