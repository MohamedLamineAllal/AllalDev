
import { MAIN_MASCOT_MINIMIZE } from '../actions/Main/GithubLinks/githubMascot';
import { MAIN_MASCOT_EXPAND } from '../actions/Main/GithubLinks/githubMascot';

const initialState = false;

export default function (state = initialState, action) {
    switch (action.type) {
        case MAIN_MASCOT_MINIMIZE:
            // alert('reducer recieved = '+ JSON.stringify(action))
            return true;
        case MAIN_MASCOT_EXPAND:
            // alert('reducer recieved = '+ JSON.stringify(action))
            return false;
        default:
            return state;
    }
}