import { User } from "../model/user.model"

export interface LogininitialStateInterface {

    User : User | null
}


export const LogininitialState : LogininitialStateInterface = {
    User: null
}