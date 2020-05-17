import React from 'react';
import { Mutation } from 'react-apollo';
import PropTypes from 'prop-types';
import FormItem from '../additem/FormItem';
import UPDATE_ITEM from '../../../graphql/mutation/item/UpdateItem';

const UpdateItem = ({ item }) => (
  <Mutation mutation={UPDATE_ITEM}>
    {(updateItem) => <FormItem item={item} onSubmit={updateItem} />}
  </Mutation>
);
UpdateItem.propTypes = {
  item: PropTypes.object,
};
export default UpdateItem;
