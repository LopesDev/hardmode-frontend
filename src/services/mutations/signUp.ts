import { gql } from '@apollo/client';

export default gql`
    mutation(
        $fullName: String!,
        $nickName: String!,
        $email: String!,
        $password: String!,
        $profileImage: Upload,
        $cellphone: String,
        $steamUrl: String,
        $instagramUrl: String,
        $facebookUrl: String,
        $githubUrl: String
    ) {
        signUp(
            user: {
                fullName: $fullName,
                nickName: $nickName,
                email: $email,
                password: $password,
                profileImage: $profileImage,
                cellphone: $cellphone,
                steamUrl: $steamUrl,
                instagramUrl: $instagramUrl,
                facebookUrl: $facebookUrl,
                githubUrl: $githubUrl
            }
        ) {
            fullName
            nickName
            email
            profileImage
            roles
        }
    }
`;