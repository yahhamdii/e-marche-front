import gql from 'graphql-tag';
const UPDATE_ITEM = gql`
  mutation updateItem($id: ID!, $url: String!, $date_create: String!) {
    updateItem(id: $id, url: $url, date_create: $date_create) {
      converUrl
    }
  }
`;
export default UPDATE_ITEM;
