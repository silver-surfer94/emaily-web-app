//reduxForm is very similar to connect in regular redux and is wired up the same way
// Field renders any type of traditional html element

import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { Link } from 'react-router-dom';

import SurveyField from './SurveyField';
import validateEmails from '../../utils/validateEmails';
import formFields from './formFields';

class SurveyForm extends Component {
  renderFields() {
    return (
      <div>
        {formFields.map(({ label, name }) => (
          <Field
            key={name}
            label={label}
            type="text"
            name={name}
            component={SurveyField}
          />
        ))}
      </div>
    );
  }
  render() {
    return (
      <div>
        <form onSubmit={this.props.handleSubmit(this.props.onSurveySubmit)}>
          {this.renderFields()}
          <Link to="/surveys" className="red btn-flat white-text">
            Cancel
          </Link>
          <button className="teal btn-flat right white-text" type="submit">
            Next <i className="material-icons right">done</i>
          </button>
        </form>
      </div>
    );
  }
}

function validate(values) {
  const errors = {};

  formFields.forEach(({ name, noValueErr }) => {
    if (!values[name]) {
      errors[name] = noValueErr;
    }
  });

  if (values.recipients) {
    errors.recipients = validateEmails(values.recipients);
  }

  return errors;
}

export default reduxForm({
  form: 'surveyForm',
  validate,
  destroyOnUnmount: false
})(SurveyForm);
