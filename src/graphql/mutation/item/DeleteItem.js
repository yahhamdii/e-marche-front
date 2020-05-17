import gql from 'graphql-tag';
const DELETE_ITEM = gql`
  mutation deleteItem($id: ID!) {
    deleteItem(id: $id) {
      converUrl
    }
  }
`;
export default DELETE_ITEM;
