import { signUpuser } from "../model/signupUser.model";

export interface SignUPinitialStateInterface {

    signUpUser : signUpuser | null;
    ErrorMessage : string
}


export const signUpinitialState:SignUPinitialStateInterface = {
    signUpUser: null,
    ErrorMessage: ""
}