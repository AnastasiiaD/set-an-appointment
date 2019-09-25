import { Types as TokenTypes } from "../actions/tokenActions";


const defaultState = {
    isTokenValid: false,
    isChecked: false,
};

const token = (state = defaultState, action) => {
    switch (action.type) {
        case TokenTypes.SET_WHETHER_IS_VALID:
            return Object.assign({}, {...state}, {isTokenValid: action.isValid} );
        case TokenTypes.SET_WHETHER_IS_CHECKED:
            return Object.assign({}, {...state}, {isChecked: action.isChecked} );
        default:
            return state;
    }
};

export default token;