
import { MAIN_GITHUBLINKS_FETCH } from './../actions/Main/GithubLinks/fetch'

const initialState = [];

export default function (state = initialState, action) {
    switch (action.type) {
      case MAIN_GITHUBLINKS_FETCH:
        return [...action.payload];
      default:
        return state;
    }
}