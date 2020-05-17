import gql from 'graphql-tag';
const UPDATE_USER = gql`
  mutation updateUser(
    $id: ID!
    $username: String!
    $email: String!
    $password: String
  ) {
    updateUser(
      id: $id
      username: $username
      email: $email
      password: $password
    ) {
      converMail
    }
  }
`;
export default UPDATE_USER;
