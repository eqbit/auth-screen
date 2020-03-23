import React from 'react';
import { reduxForm } from 'redux-form';
import { useSelector } from "react-redux";

const SimpleForm: React.FC<any> = ({ handleSubmit, pristine, reset, submitting }) => {
  const { simple } = useSelector((store: any) => store.form);

  console.log(simple);

  return (
    <form onSubmit={handleSubmit}>
      test
    </form>
  )
};

export default reduxForm({
  form: 'simple'
})(SimpleForm)
