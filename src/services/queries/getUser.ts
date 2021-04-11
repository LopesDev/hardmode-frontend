import { gql } from '@apollo/client';
import User from '../../models/User';

export default gql`
    query {
        getUser {
            _id
            fullName
            nickName
            email
            profileImage
            cellphone
            steamUrl
            instagramUrl
            facebookUrl
            githubUrl
            points
            roles
            createdAt
            updatedAt
        }
    }
`;

export interface getUsetApolloInterface {
    getUser?: User
}