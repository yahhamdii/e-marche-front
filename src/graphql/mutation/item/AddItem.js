import gql from 'graphql-tag';
const ADD_ITEM = gql`
  mutation createItem($url: String, $date_create: String) {
    createItem(url: $url, date_create: $date_create) {
      converUrl
    }
  }
`;
export default ADD_ITEM;
