import gql from 'graphql-tag';
const ADD_USER = gql`
  mutation createUser($username: String!, $email: String!, $password: String!) {
    createUser(username: $username, email: $email, password: $password) {
      converMail
    }
  }
`;
export default ADD_USER;
