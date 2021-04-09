import { gql } from '@apollo/client';

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