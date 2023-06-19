export interface UserInputLogin {
    email: TypeInput;
    phone: TypeInput;
    password: TypeInput;
    confirmPassword: TypeInput;
}
//
export interface TypeInput {
    type: string;
    value: string | number;
}
//
