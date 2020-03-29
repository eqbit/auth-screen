import React from "react";
import { reduxForm, Field } from "redux-form";
import { ReactComponent as User } from '../../icons/user.svg';
import { ReactComponent as Email } from '../../icons/email.svg';
import PasswordInput from "../password-input";
import SimpleInput from "../simple-input";
import { validations } from "../../utils/validations";
import SimpleSelect from "../simple-select";

type SelectOption = {
  label: string;
  value: string;
}

const countries: SelectOption[] = [
  {
    label: 'China',
    value: 'China'
  },
  {
    label: 'Russia',
    value: 'Russia'
  },

];

const AuthForm: React.FC = () => {
  return (
    <div className="row auth-screen">
      <div className="col-lg-1 d-none d-lg-block"/>

      <div className="col-lg-5 col-md-6 mb-4">
        <img
          className="d-none d-md-block"
          src="/images/signUp.png"
          srcSet="/images/signUp.png 1x, /images/signUp@2x.png 2x"
          alt=""
        />

        <div className="auth-screen__text">
          <h1 className="page-title">Create account</h1>

          <p className="auth-screen__description">
            Sell goods/services and get paid in crypto or
            let your followers donate you in crypto. <br/>
            Do it all with AntonishSalesGroup.</p>

          <div className="auth-screen__log-in">
            Already have an account? <a href="/login">Log in</a>
          </div>
        </div>
      </div>

      <div className="col-lg-1 d-none d-lg-block"/>

      <div className="col-lg-4 col-md-6 mb-4">
        <form className="auth-screen-form">
          <div className="field-group">
            <SimpleInput
              formName="auth"
              name="name"
              placeholder="ex. John Oliver"
              label="Name"
              icon={<User/>}
              validationType={validations.name}
            />
          </div>

          <div className="field-group">
            <SimpleInput
              formName="auth"
              name="email"
              placeholder="you@example.com"
              label="Email"
              icon={<Email/>}
              validationType={validations.email}
            />
          </div>

          <div className="field-group">
            <label htmlFor="country" className="field-group__label">Country</label>
            <div className="field-group__container">
              <Field
                name="country"
                component={SimpleSelect}
                id="country"
                options={countries}
                formName="auth"
              />
            </div>
          </div>

          <div className="field-group">
            <PasswordInput formName="auth"/>
          </div>

          <div className="field-group">
            <button className="btn btn-lg btn-primary btn-fluid" disabled>Create Account</button>
          </div>
        </form>
      </div>

      <div className="col-lg-1 d-none d-lg-block"/>
    </div>
  )
};

export default reduxForm({
  form: 'auth'
})(AuthForm)
