import { User } from "../model/user.model"

export interface LogininitialStateInterface {

    User : User | null
    errorMessage : string
}


export const LogininitialState : LogininitialStateInterface = {
    User: null,
    errorMessage: ""
}