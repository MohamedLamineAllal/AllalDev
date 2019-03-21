import { combineReducers } from "redux";

import mainGithubLinks from './mainGithubLinks'
import mainGithubMascotMinimize from "./mainGithubMascotMinimize";

const rootReducer = combineReducers({
    mainGithubLinks,
    mainGithubMascotMinimize
});

export default rootReducer;
