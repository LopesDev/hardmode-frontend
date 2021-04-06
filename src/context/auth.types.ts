export interface SignUpData {
    fullName: string,
    email: string,
    nickName: string,
    password: string,
    userProfileFile?: File,
    phoneNumber?: string,
    steamUrl?: string,
    instagramUrl?: string,
    facebookUrl?: string,
    gitHubUrl?: string
}