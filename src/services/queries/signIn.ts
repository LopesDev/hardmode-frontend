import { gql } from '@apollo/client';

export default gql`
    query SignIn($email: String!, $password: String!){
        signIn(email: $email, password: $password)  {
            token
            expireDate
        }
    }
`;