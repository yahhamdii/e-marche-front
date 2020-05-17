import React, { Component } from 'react';
import PropTypes from 'prop-types';
import createHistory from 'history/createBrowserHistory';
const history = createHistory({ forceRefresh: true });
class FormItem extends Component {
  static propTypes = {
    onSubmit: PropTypes.func.isRequired,
    item: PropTypes.object,
  };

  static defaultProps = {
    item: {},
  };

  state = {
    id: this.props.item.id || '',
    image: this.props.item.images.small || '',
    date_create: this.props.item.date_create || '',
  };

  handleInput = (e) => {
    const formData = {};
    formData[e.target.name] = e.target.value;
    this.setState({ ...formData });
  };

  render() {
    const { onSubmit } = this.props;
    const { id, image, date_create} = this.state;
    return (
      <form
        onSubmit={(e) => {
          e.preventDefault();
          onSubmit({
            variables: {
              id,
              image,
              date_create,
            },
          })
            .then(() => history.push('/'))
            .catch((e));
        }}
      >
        <input
          name="image"
          type="text"
          onChange={this.handleInput}
          value={image}
          placeholder="image"
        />
        <input
          name="date_create"
          type="text"
          onChange={this.handleInput}
          value={date_create}
          placeholder="date_create"
        />
        <button className='btn'>Envoyer</button>
      </form>
    );
  }
}
export default FormItem;
