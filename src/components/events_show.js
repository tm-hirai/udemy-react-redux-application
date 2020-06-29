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
<<<<<<< HEAD

  componentDidMount() {
    const { id } = this.props.match.params;
    if (id) this.props.getEvent(id);
  }
=======
>>>>>>> db41f58... implement delete feature
=======
>>>>>>> db41f589a8b79d894f0a1143cd01aaca23084ad1
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
<<<<<<< HEAD
    await this.props.putEvent(values);
    this.props.history.push('/');
  }
  render() {
    const { handleSubmit, pristine, submitting, invalid } = this.props;
=======
=======
>>>>>>> db41f589a8b79d894f0a1143cd01aaca23084ad1
    // await this.props.postEvent(values);
    this.props.history.push('/');
  }
  render() {
    const { handleSubmit, pristine, submitting } = this.props;
<<<<<<< HEAD
>>>>>>> db41f58... implement delete feature
=======
>>>>>>> db41f589a8b79d894f0a1143cd01aaca23084ad1

    return (
      <form onSubmit={handleSubmit(this.onSubmit)}>
        <div><Field label="Title" name="title" type="text" component={this.renderField} /></div>
        <div><Field label="Body" name="body" type="text" component={this.renderField} /></div>
        <div>
<<<<<<< HEAD
<<<<<<< HEAD
          <input type="submit" value="Submit" disabled={pristine || submitting || invalid} />
=======
          <input type="submit" value="Submit" disabled={pristine || submitting} />
>>>>>>> db41f58... implement delete feature
=======
          <input type="submit" value="Submit" disabled={pristine || submitting} />
>>>>>>> db41f589a8b79d894f0a1143cd01aaca23084ad1
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
=======
const mapDispatchToProps = ({ deleteEvent });
export default connect(null, mapDispatchToProps)(
  reduxForm({ validate, form: 'eventShowForm' })(EventsShow)
>>>>>>> db41f589a8b79d894f0a1143cd01aaca23084ad1
)
