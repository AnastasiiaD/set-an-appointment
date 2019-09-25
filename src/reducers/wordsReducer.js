import { Types as WordTypes } from "../actions/wordsActions";

const defaultState = {
    isLoading: false,
    words: [],
};

const words = (state = defaultState, action) => {
    switch (action.type) {
        case WordTypes.START_LOADING:
            return Object.assign(
                {},
                { ...state },
                { isLoading: true },
            );
        case WordTypes.SUCCESS_GET_WORDS:
            return Object.assign(
                {},
                { isLoading: false },
                { words: action.words },
        );
        case WordTypes.SUCCESS_ADD_WORD:
            return Object.assign(
                {},
                { isLoading: false },
                { words: [...state.words, action.word] },
            );
        case WordTypes.STOP_LOADING:
            return Object.assign(
                {},
                { ...state },
                { isLoading: false },
            );
        case WordTypes.SUCCESS_REMOVE_WORD:
            const filteredWords = state.words.filter( item => item.id !== action.id);
            return Object.assign(
                {},
                { isLoading: false },
                { words: filteredWords },
            );
        default:
            return state;
    }
};

export default words;