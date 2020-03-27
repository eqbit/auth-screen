import React from "react";
import { reduxForm, Field } from "redux-form";
import { ReactComponent as User } from '../../icons/user.svg';
import { ReactComponent as Email } from '../../icons/email.svg';
import { ReactComponent as Arrow } from '../../icons/arrow.svg';
import PasswordInput from "../password-input";

const AuthForm: React.FC<any> = ({ pristine, reset, submitting }) => {
  return (
    <div className="row auth-screen">
      <div className="col-lg-1"/>

      <div className="col-lg-5">
        <img src="/images/signUp.png" srcSet="/images/signUp.png 1x, /images/signUp@2x.png 2x" alt=""/>

        <div className="auth-screen__text">
          <h1 className="page-title">Create account</h1>

          <p className="auth-screen__description">Sell goods/services and get paid in crypto or
            let your followers donate you in crypto. <br/>
            Do it all with Ebay.</p>

          <div className="auth-screen__log-in">
            Already have an account? <a href="/login">Log in</a>
          </div>
        </div>
      </div>

      <div className="col-lg-1"/>

      <div className="col-lg-4">
        <form className="auth-screen-form">
          <div className="field-group">
            <label htmlFor="name" className="field-group__label">Name</label>
            <div className="field-group__container">
              <Field
                name="name"
                type="text"
                component="input"
                placeholder="ex. John Oliver"
                id="name"
                className="field-group__input"
              />
              <i className="field-group__icon"><User/></i>
            </div>
          </div>

          <div className="field-group">
            <label htmlFor="email" className="field-group__label">Email</label>
            <div className="field-group__container">
              <Field
                name="email"
                type="text"
                component="input"
                placeholder="you@example.com"
                id="email"
                className="field-group__input"
              />
              <i className="field-group__icon"><Email/></i>
            </div>
          </div>

          <div className="field-group">
            <label htmlFor="country" className="field-group__label">Country</label>
            <div className="field-group__container">
              <Field
                name="country"
                type="text"
                component="input"
                placeholder="Сountry of your residence"
                id="country"
                className="field-group__input"
              />
              <i className="field-group__icon"><Arrow/></i>
            </div>
          </div>

          <div className="field-group">
            <PasswordInput/>
          </div>

          <div className="field-group">
            <button className="btn btn-lg btn-primary btn-fluid" disabled>Create Account</button>
          </div>
        </form>
      </div>

      <div className="col-lg-1"/>
    </div>
  )
};

export default reduxForm({
  form: 'auth'
})(AuthForm)
