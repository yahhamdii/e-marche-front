import React from 'react';
import { Mutation } from 'react-apollo';

import ADD_ITEM from '../../../graphql/mutation/item/AddItem';
import FormItem from './FormItem';

const AddItem = () => (
  <div id="app">
    <header>
      <h2 className="section-title">New Item</h2>
    </header>
    <table cellPadding="0" cellSpacing="0" border="0">
      <div>
        <Mutation mutation={ADD_ITEM}>
          {(createItem) => <FormItem onSubmit={createItem} />}
        </Mutation>
      </div>
    </table>
  </div>
);
export default AddItem;
