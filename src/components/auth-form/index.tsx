import React from "react";
import { reduxForm, Field } from "redux-form";
import { useSelector } from "react-redux";
import { ReactComponent as User } from '../../icons/user.svg';
import { ReactComponent as Email } from '../../icons/email.svg';
import { ReactComponent as Arrow } from '../../icons/arrow.svg';
import { ReactComponent as Eye } from '../../icons/eye.svg';
import { ReactComponent as Check } from '../../icons/check.svg';

const AuthForm: React.FC<any> = ({ pristine, reset, submitting }) => {
  const { auth } = useSelector((store: any) => store.form);

  console.log(auth);

  return (
    <div className="row auth-screen">
      <div className="col-lg-1"/>

      <div className="col-lg-5">
        <img src="/images/signUp.png" srcSet="/images/signUp.png 1x, /images/signUp@2x.png 2x" alt=""/>

        <div className="auth-screen__text">
          <h1 className="page-title">Create account</h1>

          <p className="auth-screen__description">Sell goods/services and get paid in crypto or
            let your followers donate you in crypto. <br/>
            Do it all with Yomer.</p>

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
            <label htmlFor="password" className="field-group__label">Password</label>
            <div className="field-group__container">
              <Field
                name="password"
                type="password"
                component="input"
                placeholder="Create password"
                id="password"
                className="field-group__input"
              />
              <i className="field-group__icon"><Eye/><Check/></i>
            </div>
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
