import AuthRole from './AuthRole';

export default interface User {
    _id: string,
    fullName: string,
    nickName: string,
    email: string,
    profileImage: string,
    celphone: string,
    steamUrl: string,
    instagramUrl: string,
    facebookUrl: string,
    githubUrl: string,
    points: string,
    roles: Array<AuthRole>,
    createdAt: string,
    updatedAt: string
}
