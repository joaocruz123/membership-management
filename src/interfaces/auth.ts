export interface FormAuthenticationInterface {
    username: string;
    password: string;
}

export interface AuthenticationUser {
    id: string;
    name: string;
    username: string;
    status: boolean;
    access_token: string;
}