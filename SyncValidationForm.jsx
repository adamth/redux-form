import React from 'react'
import { Field, reduxForm } from 'redux-form'

const validate = values => {
    const errors = {};

    if (!values.name) {
        errors.name = 'Required';
    } else if (values.name.length <= 2) {
        errors.username = 'Must be 2 characters or more';
    } else if (values.name.length > 50) {
        errors.username = 'Must be 50 characters or less';
    }

    if (!values.email) {
        errors.email = 'Required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = 'Invalid email address';
    }

    if (!values.password) {
        errors.password = 'Required';
    } else if (!values.confirm) {
        errors.confirm = 'Required';
    } else if (values.password !== values.confirm) {
        errors.confirm = 'Passwords do not match';
    }
    return errors;
};

const warn = values => {
  const warnings = {}
  if (values.age < 19) {
    warnings.age = 'Hmm, you seem a bit young...'
  }
  return warnings
}

const renderField = ({ input, label, type, meta: { touched, error, warning } }) => (
  <div>
    <label>{label}</label>
    <div>
      <input {...input} placeholder={label} type={type}/>
      {touched && ((error && <span>{error}</span>) || (warning && <span>{warning}</span>))}
    </div>
  </div>
)

const SyncValidationForm = (props) => {
  const { handleSubmit, pristine, reset, submitting } = props
  return (
            <form onSubmit={handleSubmit}>
            <div className="row">
                <div className="medium-6 columns medium-centered">
                    <Field type="text" id="name" name="name" component={renderField} placeholder="name" label="Name" />
                </div>
                <div className="medium-6 columns medium-centered">
                    <Field type="text" id="email" name="email" component={renderField} placeholder="email" label="Email" />
                </div>
                <div className="medium-6 columns medium-centered">
                    <Field type="password" id="password" name="password" component={renderField} placeholder="password" label="Password" />
                </div>
                <div className="medium-6 columns medium-centered">
                    <Field type="password" id="confirm" name="confirm" component={renderField} placeholder="confirm" label="Confirm password" />
                </div>
                <div className="medium-6 columns medium-centered">
                    <button type="submit" disabled={submitting}>Submit</button>
                </div>
            </div>
        </form>
  )
}

export default reduxForm({
  form: 'syncValidation',  // a unique identifier for this form
  validate,                // <--- validation function given to redux-form
  warn                     // <--- warning function given to redux-form
})(SyncValidationForm)