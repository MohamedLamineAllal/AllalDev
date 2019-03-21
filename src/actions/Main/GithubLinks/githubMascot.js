import axios from 'axios';

export const MAIN_MASCOT_MINIMIZE = "MAIN_MASCOT_MINIMIZE";

export const MAIN_MASCOT_EXPAND = "MAIN_MASCOT_EXPAND";

export const minimize = () => {
    return {
        type: MAIN_MASCOT_MINIMIZE
    };
}

export function expand() {
    return {
        type: MAIN_MASCOT_EXPAND
    }
}
