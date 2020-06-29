import React from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';

import { getEvent, deleteEvent, putEvent } from '../actions';

class EventsShow extends React.Component {
  constructor(props) {
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
    this.onDeleteClick = this.onDeleteClick.bind(this);
  }
<<<<<<< HEAD

  componentDidMount() {
    const { id } = this.props.match.params;
    if (id) this.props.getEvent(id);
  }
=======
>>>>>>> db41f58... implement delete feature
  renderField(field) {
    const { input, label, type, meta: { touched, error } } = field;
    return (
      <div>
        <input {...input} placeholder={label} type={type} />
        {touched && error && <span>{error}</span>}
      </div>
    );
  }
  async onDeleteClick() {
    const { id } = this.props.match.params;
    await this.props.deleteEvent(id);
    this.props.history.push('/');
  }

  async onSubmit(values) {
<<<<<<< HEAD
    await this.props.putEvent(values);
    this.props.history.push('/');
  }
  render() {
    const { handleSubmit, pristine, submitting, invalid } = this.props;
=======
    // await this.props.postEvent(values);
    this.props.history.push('/');
  }
  render() {
    const { handleSubmit, pristine, submitting } = this.props;
>>>>>>> db41f58... implement delete feature

    return (
      <form onSubmit={handleSubmit(this.onSubmit)}>
        <div><Field label="Title" name="title" type="text" component={this.renderField} /></div>
        <div><Field label="Body" name="body" type="text" component={this.renderField} /></div>
        <div>
<<<<<<< HEAD
          <input type="submit" value="Submit" disabled={pristine || submitting || invalid} />
=======
          <input type="submit" value="Submit" disabled={pristine || submitting} />
>>>>>>> db41f58... implement delete feature
          <Link to="/">Cancel</Link>
          <Link to="/" onClick={this.onDeleteClick}>Delete</Link>
        </div>
      </form>
    )
  }
}
const validate = values => {
  const errors = {};
  if (!values.title) errors.title = "Enter a title, please."
  if (!values.body) errors.body = "Enter a body, please."

  return errors;
}
<<<<<<< HEAD
const mapStateToProps = (state, ownProps) => {
  const event = state.events[ownProps.match.params.id];
  return { initialValues: event, event };
}
const mapDispatchToProps = ({ deleteEvent, getEvent, putEvent });
export default connect(mapStateToProps, mapDispatchToProps)(
  reduxForm({ validate, form: 'eventShowForm', enableReinitialize: true })(EventsShow)
=======
const mapDispatchToProps = ({ deleteEvent });
export default connect(null, mapDispatchToProps)(
  reduxForm({ validate, form: 'eventShowForm' })(EventsShow)
>>>>>>> db41f58... implement delete feature
)
