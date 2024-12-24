import { AboutReducer } from "../dashbord/about/store/about.reducer";
import { counterReducer } from "../dashbord/home/store/counter.reducer";
import { LoaderReaducer } from "../loader/store/loader.reducer";
import { LoginReducer } from "../login/store/login.reducer";
import { SignUpReducer } from "../signup/store/signup.reducer";

export const appReducer = {
    counter : counterReducer,
    about : AboutReducer,
    login : LoginReducer,
    loader : LoaderReaducer,
    signup : SignUpReducer
}