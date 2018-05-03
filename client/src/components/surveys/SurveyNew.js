//SurveyNew shows SurveyForm and SurveyReview
import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import SurveyForm from './SurveyForm';
import SurveyFormReview from './SurveyFormReview';

class SurveyNew extends Component {
  //this only works with create-react-app
  state = { showReview: false };

  renderContent() {
    if (this.state.showReview) {
      return (
        <SurveyFormReview
          onBackClick={() => this.setState({ showReview: false })}
        />
      );
    }

    return (
      <SurveyForm onSurveySubmit={() => this.setState({ showReview: true })} />
    );
  }

  render() {
    return <div>{this.renderContent()}</div>;
  }
}

export default reduxForm({
  form: 'surveyForm'
})(SurveyNew);
