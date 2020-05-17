import gql from 'graphql-tag';
const GET_ITEM_BY_ID = gql`
  query item($id: ID!) {
    item(id: $id) {
      id
      name
      price
      date_create
      images{
        small
        large
      }
    }
  }
`;
export default GET_ITEM_BY_ID;
