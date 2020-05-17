import gql from 'graphql-tag';
const DELETE_USER = gql`
  mutation deleteUser($id: ID!) {
    deleteUser(id: $id) {
      converMail
    }
  }
`;
export default DELETE_USER;
