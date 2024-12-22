import { AboutReducer } from "../dashbord/about/store/about.reducer";
import { counterReducer } from "../dashbord/home/store/counter.reducer";

export const appReducer = {
    counter : counterReducer,
    about : AboutReducer
}