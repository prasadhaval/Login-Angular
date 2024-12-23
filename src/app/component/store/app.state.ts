import { AboutReducer } from "../dashbord/about/store/about.reducer";
import { counterReducer } from "../dashbord/home/store/counter.reducer";
import { LoginReducer } from "../login/store/login.reducer";

export const appReducer = {
    counter : counterReducer,
    about : AboutReducer,
    login : LoginReducer
}