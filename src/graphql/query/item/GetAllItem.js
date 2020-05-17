import gql from 'graphql-tag';
const GET_ALL_ITEM = gql`
  query listitem {
    listitem {
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
export default GET_ALL_ITEM;
